import requests
import sys
import json
from datetime import datetime

class SEOAutopilotTester:
    def __init__(self, base_url="https://seo-cockpit.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.created_website_id = None

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_detail = response.json()
                    print(f"   Error: {error_detail}")
                except:
                    print(f"   Response: {response.text}")

            return success, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_get_stages(self):
        """Test getting stage definitions"""
        success, response = self.run_test("Get Stages", "GET", "stages", 200)
        if success and response:
            print(f"   Found {len(response)} stages")
            for stage_num, stage_info in response.items():
                print(f"   Stage {stage_num}: {stage_info['name']}")
        return success

    def test_create_website(self):
        """Test creating a new website"""
        test_website = {
            "name": "Test Website",
            "domain": "test-website.com",
            "main_language": "en",
            "target_country": "Global",
            "business_type": "Test Business",
            "main_goals": "Test goals for SEO improvement",
            "primary_services": ["Service 1", "Service 2", "Service 3"],
            "site_age": "New"
        }
        
        success, response = self.run_test(
            "Create Website", "POST", "websites", 200, data=test_website
        )
        
        if success and response:
            self.created_website_id = response.get('id')
            print(f"   Created website with ID: {self.created_website_id}")
        
        return success

    def test_get_websites(self):
        """Test getting all websites"""
        success, response = self.run_test("Get All Websites", "GET", "websites", 200)
        if success and response:
            print(f"   Found {len(response)} websites")
            for website in response:
                print(f"   - {website['name']} ({website['domain']})")
        return success

    def test_get_single_website(self):
        """Test getting a single website by ID"""
        if not self.created_website_id:
            print("❌ Skipped - No website ID available")
            return False
            
        success, response = self.run_test(
            "Get Single Website", "GET", f"websites/{self.created_website_id}", 200
        )
        
        if success and response:
            print(f"   Website: {response['name']} - Stage {response['current_stage']}")
        
        return success

    def test_update_website(self):
        """Test updating a website"""
        if not self.created_website_id:
            print("❌ Skipped - No website ID available")
            return False
            
        update_data = {
            "main_goals": "Updated goals for better SEO performance",
            "current_stage": 2
        }
        
        success, response = self.run_test(
            "Update Website", "PUT", f"websites/{self.created_website_id}", 200, data=update_data
        )
        
        if success and response:
            print(f"   Updated stage to: {response['current_stage']}")
        
        return success

    def test_get_snapshots(self):
        """Test getting snapshots for a website"""
        if not self.created_website_id:
            print("❌ Skipped - No website ID available")
            return False
            
        success, response = self.run_test(
            "Get Snapshots", "GET", f"snapshots/{self.created_website_id}", 200
        )
        
        if success:
            print(f"   Found {len(response)} snapshots")
        
        return success

    def test_stage_run(self):
        """Test running stage autopilot"""
        if not self.created_website_id:
            print("❌ Skipped - No website ID available")
            return False
            
        print("   ⏳ This may take 10-30 seconds due to GPT-5.1 processing...")
        
        success, response = self.run_test(
            "Stage Run Autopilot", "POST", "seo/stage-run", 200, 
            data={"website_id": self.created_website_id}
        )
        
        if success and response:
            snapshot = response.get('snapshot', {})
            output = response.get('output', '')
            print(f"   Snapshot created: {snapshot.get('summary', 'N/A')}")
            print(f"   Output length: {len(output)} characters")
        
        return success

    def test_page_optimization(self):
        """Test page optimization"""
        if not self.created_website_id:
            print("❌ Skipped - No website ID available")
            return False
            
        print("   ⏳ This may take 10-30 seconds due to GPT-5.1 processing...")
        
        page_data = {
            "website_id": self.created_website_id,
            "page_url": "https://test-website.com/home",
            "page_type": "Home",
            "page_content": "Welcome to our test website. We provide excellent services."
        }
        
        success, response = self.run_test(
            "Page Optimization", "POST", "seo/optimize-page", 200, data=page_data
        )
        
        if success and response:
            snapshot = response.get('snapshot', {})
            output = response.get('output', '')
            print(f"   Snapshot created: {snapshot.get('summary', 'N/A')}")
            print(f"   Output length: {len(output)} characters")
        
        return success

    def test_generate_report(self):
        """Test generating a report"""
        if not self.created_website_id:
            print("❌ Skipped - No website ID available")
            return False
            
        print("   ⏳ This may take 10-30 seconds due to GPT-5.1 processing...")
        
        success, response = self.run_test(
            "Generate Report", "POST", "seo/generate-report", 200,
            data={"website_id": self.created_website_id}
        )
        
        if success and response:
            snapshot = response.get('snapshot', {})
            output = response.get('output', '')
            print(f"   Report created: {snapshot.get('summary', 'N/A')}")
            print(f"   Output length: {len(output)} characters")
        
        return success

    def test_delete_website(self):
        """Test deleting a website"""
        if not self.created_website_id:
            print("❌ Skipped - No website ID available")
            return False
            
        success, response = self.run_test(
            "Delete Website", "DELETE", f"websites/{self.created_website_id}", 200
        )
        
        if success:
            print("   Website and associated snapshots deleted")
        
        return success

    def test_error_cases(self):
        """Test error handling"""
        print("\n🔍 Testing Error Cases...")
        
        # Test non-existent website
        success1, _ = self.run_test(
            "Get Non-existent Website", "GET", "websites/non-existent-id", 404
        )
        
        # Test invalid stage run
        success2, _ = self.run_test(
            "Stage Run Invalid Website", "POST", "seo/stage-run", 404,
            data={"website_id": "invalid-id"}
        )
        
        # Test report without snapshots (using a new website)
        test_website = {
            "name": "Empty Test Website",
            "domain": "empty-test.com",
            "main_language": "en",
            "target_country": "Global",
            "business_type": "Test",
            "main_goals": "Test",
            "primary_services": ["Test"]
        }
        
        create_success, create_response = self.run_test(
            "Create Empty Website", "POST", "websites", 200, data=test_website
        )
        
        if create_success:
            empty_website_id = create_response.get('id')
            success3, _ = self.run_test(
                "Generate Report No Snapshots", "POST", "seo/generate-report", 400,
                data={"website_id": empty_website_id}
            )
            
            # Clean up
            self.run_test(
                "Delete Empty Website", "DELETE", f"websites/{empty_website_id}", 200
            )
        else:
            success3 = False
        
        return success1 and success2 and success3

def main():
    print("🚀 Starting SEO Autopilot Lab Backend Tests")
    print("=" * 50)
    
    tester = SEOAutopilotTester()
    
    # Run all tests in sequence
    test_results = []
    
    # Basic API tests
    test_results.append(tester.test_root_endpoint())
    test_results.append(tester.test_get_stages())
    
    # Website CRUD tests
    test_results.append(tester.test_create_website())
    test_results.append(tester.test_get_websites())
    test_results.append(tester.test_get_single_website())
    test_results.append(tester.test_update_website())
    
    # Snapshot tests
    test_results.append(tester.test_get_snapshots())
    
    # SEO functionality tests (these use GPT-5.1)
    test_results.append(tester.test_stage_run())
    test_results.append(tester.test_page_optimization())
    test_results.append(tester.test_generate_report())
    
    # Error handling tests
    test_results.append(tester.test_error_cases())
    
    # Cleanup
    test_results.append(tester.test_delete_website())
    
    # Print final results
    print("\n" + "=" * 50)
    print("📊 FINAL TEST RESULTS")
    print("=" * 50)
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 ALL TESTS PASSED!")
        return 0
    else:
        print(f"❌ {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())