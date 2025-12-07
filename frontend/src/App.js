import { useState, useEffect } from "react";
import "@/App.css";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { Target, Rocket, FileText, PlusCircle, Settings, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [websites, setWebsites] = useState([]);
  const [activeWebsiteId, setActiveWebsiteId] = useState(null);
  const [activeWebsite, setActiveWebsite] = useState(null);
  const [snapshots, setSnapshots] = useState([]);
  const [stages, setStages] = useState({});
  const [loading, setLoading] = useState(false);
  const [stageOutput, setStageOutput] = useState("");
  const [pageOutput, setPageOutput] = useState("");
  const [reportOutput, setReportOutput] = useState("");
  const [productionOutput, setProductionOutput] = useState("");

  // Website form states
  const [websiteFormOpen, setWebsiteFormOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [websiteForm, setWebsiteForm] = useState({
    name: "",
    domain: "",
    main_language: "en",
    target_country: "",
    business_type: "",
    main_goals: "",
    primary_services: "",
    site_age: ""
  });

  // Page optimization form states
  const [pageForm, setPageForm] = useState({
    page_url: "",
    page_type: "Home",
    page_content: ""
  });

  useEffect(() => {
    fetchWebsites();
    fetchStages();
  }, []);

  useEffect(() => {
    if (activeWebsiteId) {
      fetchActiveWebsite();
      fetchSnapshots();
    }
  }, [activeWebsiteId]);

  const fetchWebsites = async () => {
    try {
      const response = await axios.get(`${API}/websites`);
      setWebsites(response.data);
      
      // Set initial websites if none exist
      if (response.data.length === 0) {
        await createInitialWebsites();
      } else if (!activeWebsiteId) {
        setActiveWebsiteId(response.data[0].id);
      }
    } catch (error) {
      console.error("Error fetching websites:", error);
      toast.error("Failed to load websites");
    }
  };

  const createInitialWebsites = async () => {
    const initialWebsites = [
      {
        name: "TrustMyMessage",
        domain: "trustmymessage.com",
        main_language: "sv",
        target_country: "Sweden",
        business_type: "Communication platform",
        main_goals: "Get more user signups and increase platform adoption",
        primary_services: ["Message verification", "Secure communication", "Trust badges", "API integration"]
      },
      {
        name: "Full Bin",
        domain: "fullbin.com",
        main_language: "en",
        target_country: "Global",
        business_type: "Waste management service",
        main_goals: "Get more bookings for waste collection services",
        primary_services: ["Bin collection", "Recycling services", "Waste disposal", "Commercial solutions"]
      }
    ];

    for (const site of initialWebsites) {
      try {
        await axios.post(`${API}/websites`, site);
      } catch (error) {
        console.error("Error creating initial website:", error);
      }
    }

    await fetchWebsites();
  };

  const fetchActiveWebsite = async () => {
    try {
      const response = await axios.get(`${API}/websites/${activeWebsiteId}`);
      setActiveWebsite(response.data);
    } catch (error) {
      console.error("Error fetching active website:", error);
      toast.error("Failed to load website details");
    }
  };

  const fetchSnapshots = async () => {
    try {
      const response = await axios.get(`${API}/snapshots/${activeWebsiteId}`);
      setSnapshots(response.data);
    } catch (error) {
      console.error("Error fetching snapshots:", error);
    }
  };

  const fetchStages = async () => {
    try {
      const response = await axios.get(`${API}/stages`);
      setStages(response.data);
    } catch (error) {
      console.error("Error fetching stages:", error);
    }
  };

  const handleWebsiteFormChange = (field, value) => {
    setWebsiteForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveWebsite = async () => {
    try {
      const formData = {
        ...websiteForm,
        primary_services: websiteForm.primary_services.split(",").map(s => s.trim())
      };

      if (editMode) {
        await axios.put(`${API}/websites/${activeWebsiteId}`, formData);
        toast.success("Website updated successfully");
      } else {
        const response = await axios.post(`${API}/websites`, formData);
        setActiveWebsiteId(response.data.id);
        toast.success("Website created successfully");
      }

      setWebsiteFormOpen(false);
      resetWebsiteForm();
      await fetchWebsites();
    } catch (error) {
      console.error("Error saving website:", error);
      toast.error("Failed to save website");
    }
  };

  const resetWebsiteForm = () => {
    setWebsiteForm({
      name: "",
      domain: "",
      main_language: "en",
      target_country: "",
      business_type: "",
      main_goals: "",
      primary_services: "",
      site_age: ""
    });
    setEditMode(false);
  };

  const handleEditWebsite = () => {
    if (activeWebsite) {
      setWebsiteForm({
        name: activeWebsite.name,
        domain: activeWebsite.domain,
        main_language: activeWebsite.main_language,
        target_country: activeWebsite.target_country,
        business_type: activeWebsite.business_type,
        main_goals: activeWebsite.main_goals,
        primary_services: activeWebsite.primary_services.join(", "),
        site_age: activeWebsite.site_age || ""
      });
      setEditMode(true);
      setWebsiteFormOpen(true);
    }
  };

  const handleRunStageAutopilot = async () => {
    if (!activeWebsiteId) {
      toast.error("Please select a website first");
      return;
    }

    setLoading(true);
    setStageOutput("");

    try {
      const response = await axios.post(`${API}/seo/stage-run`, {
        website_id: activeWebsiteId
      });

      setStageOutput(response.data.output);
      await fetchSnapshots();
      toast.success("Stage autopilot completed!");
    } catch (error) {
      console.error("Error running stage autopilot:", error);
      toast.error("Failed to run stage autopilot");
    } finally {
      setLoading(false);
    }
  };

  const handleOptimizePage = async () => {
    if (!activeWebsiteId) {
      toast.error("Please select a website first");
      return;
    }

    setLoading(true);
    setPageOutput("");

    try {
      const response = await axios.post(`${API}/seo/optimize-page`, {
        website_id: activeWebsiteId,
        ...pageForm
      });

      setPageOutput(response.data.output);
      await fetchSnapshots();
      toast.success("Page optimization completed!");
    } catch (error) {
      console.error("Error optimizing page:", error);
      toast.error("Failed to optimize page");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateReport = async () => {
    if (!activeWebsiteId) {
      toast.error("Please select a website first");
      return;
    }

    setLoading(true);
    setReportOutput("");

    try {
      const response = await axios.post(`${API}/seo/generate-report`, {
        website_id: activeWebsiteId
      });

      setReportOutput(response.data.output);
      await fetchSnapshots();
      toast.success("Report generated successfully!");
    } catch (error) {
      console.error("Error generating report:", error);
      toast.error(error.response?.data?.detail || "Failed to generate report");
    } finally {
      setLoading(false);
    }
  };

  const handleRunProductionMode = async () => {
    if (!activeWebsiteId) {
      toast.error("Please select a website first");
      return;
    }

    setLoading(true);
    setProductionOutput("");

    try {
      const response = await axios.post(`${API}/seo/production-mode`, {
        website_id: activeWebsiteId
      });

      setProductionOutput(response.data.output);
      await fetchSnapshots();
      toast.success("Production package generated successfully!");
    } catch (error) {
      console.error("Error running production mode:", error);
      toast.error("Failed to generate production package");
    } finally {
      setLoading(false);
    }
  };

  const handleApplyProductionPackage = async (snapshotId) => {
    if (!confirm("This will update your website files and commit to GitHub. Are you sure?")) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API}/seo/apply-production-package`, {
        snapshot_id: snapshotId
      });

      const { applied_files, errors, git_status, stage, auto_deploy } = response.data;

      // Show success message
      if (applied_files.length > 0 && errors.length === 0) {
        if (auto_deploy) {
          toast.success(
            `✅ SEO Autopilot Action Complete!\n\n` +
            `Stage ${stage}: ${applied_files.length} files written, committed to GitHub.\n` +
            `Auto-deploy is running via Vercel. Walk away. 🚀`,
            { duration: 8000 }
          );
        } else if (git_status.committed) {
          toast.success(
            `Files updated and committed to GitHub.\n` +
            `Push may require manual action: ${git_status.error || 'Unknown error'}`,
            { duration: 6000 }
          );
        } else {
          toast.success(`Applied ${applied_files.length} file updates successfully!`);
          if (git_status.error) {
            toast.error(`Git error: ${git_status.error}`);
          }
        }
      } else if (errors.length > 0) {
        toast.error(`${errors.length} files failed to update`);
      }
    } catch (error) {
      console.error("Error applying production package:", error);
      toast.error("Failed to apply production package");
    } finally {
      setLoading(false);
    }
  };

  const currentStage = activeWebsite ? stages[activeWebsite.current_stage] : null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-slate-800" />
              <h1 className="text-2xl font-semibold text-slate-900">SEO Autopilot Lab</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Label className="text-sm font-medium text-slate-700">Active Website:</Label>
                <Select value={activeWebsiteId || ""} onValueChange={setActiveWebsiteId}>
                  <SelectTrigger data-testid="website-selector" className="w-48">
                    <SelectValue placeholder="Select website" />
                  </SelectTrigger>
                  <SelectContent>
                    {websites.map(site => (
                      <SelectItem key={site.id} value={site.id}>{site.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                data-testid="edit-website-btn"
                onClick={handleEditWebsite}
                variant="outline"
                size="sm"
                disabled={!activeWebsiteId}
              >
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>

              <Dialog open={websiteFormOpen} onOpenChange={(open) => {
                setWebsiteFormOpen(open);
                if (!open) resetWebsiteForm();
              }}>
                <DialogTrigger asChild>
                  <Button data-testid="add-website-btn" variant="default" size="sm">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Website
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editMode ? "Edit Website Profile" : "Add New Website"}</DialogTitle>
                    <DialogDescription>
                      {editMode ? "Update the website information below." : "Enter the details for your new website."}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Website Name</Label>
                      <Input
                        id="name"
                        value={websiteForm.name}
                        onChange={(e) => handleWebsiteFormChange("name", e.target.value)}
                        placeholder="e.g., TrustMyMessage"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="domain">Domain</Label>
                      <Input
                        id="domain"
                        value={websiteForm.domain}
                        onChange={(e) => handleWebsiteFormChange("domain", e.target.value)}
                        placeholder="e.g., trustmymessage.com"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="language">Main Language</Label>
                        <Input
                          id="language"
                          value={websiteForm.main_language}
                          onChange={(e) => handleWebsiteFormChange("main_language", e.target.value)}
                          placeholder="e.g., en, sv"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="country">Target Country/Market</Label>
                        <Input
                          id="country"
                          value={websiteForm.target_country}
                          onChange={(e) => handleWebsiteFormChange("target_country", e.target.value)}
                          placeholder="e.g., Sweden, Global"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="business_type">Business Type</Label>
                      <Input
                        id="business_type"
                        value={websiteForm.business_type}
                        onChange={(e) => handleWebsiteFormChange("business_type", e.target.value)}
                        placeholder="e.g., SaaS, E-commerce, Service"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="main_goals">Main Goals</Label>
                      <Textarea
                        id="main_goals"
                        value={websiteForm.main_goals}
                        onChange={(e) => handleWebsiteFormChange("main_goals", e.target.value)}
                        placeholder="What are the main objectives? (e.g., get more bookings, increase signups)"
                        rows={3}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="services">Primary Services/Offers (comma-separated)</Label>
                      <Textarea
                        id="services"
                        value={websiteForm.primary_services}
                        onChange={(e) => handleWebsiteFormChange("primary_services", e.target.value)}
                        placeholder="e.g., Service 1, Service 2, Service 3"
                        rows={2}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="site_age">Site Age (Optional)</Label>
                      <Input
                        id="site_age"
                        value={websiteForm.site_age}
                        onChange={(e) => handleWebsiteFormChange("site_age", e.target.value)}
                        placeholder="e.g., Brand new, 3-6 months old, 1+ years"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleSaveWebsite} data-testid="save-website-btn">
                      {editMode ? "Update Website" : "Create Website"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeWebsite && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - SEO Autopilot Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stage Box */}
              <Card data-testid="stage-autopilot-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-slate-700" />
                      <CardTitle>Autopilot Stage</CardTitle>
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                      Stage {activeWebsite.current_stage} of 4
                    </div>
                  </div>
                  <CardDescription>
                    {currentStage && currentStage.name}: {currentStage && currentStage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentStage && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-700">Key tasks for this stage:</h4>
                      <ul className="space-y-2">
                        {currentStage.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-3">
                    <Button
                      data-testid="run-autopilot-btn"
                      onClick={handleRunStageAutopilot}
                      disabled={loading}
                      variant="outline"
                      className="w-full"
                    >
                      {loading ? "Running..." : "Run Autopilot for this Stage"}
                    </Button>

                    <Button
                      data-testid="run-production-mode-btn"
                      onClick={handleRunProductionMode}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Rocket className="w-4 h-4 mr-2" />
                      {loading ? "Generating..." : "Run FULL Autopilot (Production Mode)"}
                    </Button>
                  </div>

                  {stageOutput && (
                    <div className="mt-4">
                      <h4 className="font-medium text-sm text-slate-700 mb-2">Strategic Output:</h4>
                      <ScrollArea className="h-96 w-full rounded-md border bg-slate-50 p-4">
                        <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">{stageOutput}</pre>
                      </ScrollArea>
                    </div>
                  )}

                  {productionOutput && (
                    <div className="mt-4">
                      <h4 className="font-medium text-sm text-slate-700 mb-2">🚀 Production Package (Ready to Deploy):</h4>
                      <ScrollArea className="h-96 w-full rounded-md border bg-blue-50 p-4">
                        <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">{productionOutput}</pre>
                      </ScrollArea>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Page-level Helper Box */}
              <Card data-testid="page-optimization-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-slate-700" />
                    <CardTitle>Page-level Helper</CardTitle>
                  </div>
                  <CardDescription>
                    Optimize a specific page with keywords, titles, and meta descriptions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="page_url">Page URL (Optional)</Label>
                      <Input
                        id="page_url"
                        value={pageForm.page_url}
                        onChange={(e) => setPageForm(prev => ({ ...prev, page_url: e.target.value }))}
                        placeholder="https://example.com/page"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="page_type">Page Type</Label>
                      <Select
                        value={pageForm.page_type}
                        onValueChange={(value) => setPageForm(prev => ({ ...prev, page_type: value }))}
                      >
                        <SelectTrigger id="page_type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Home">Home</SelectItem>
                          <SelectItem value="Service">Service</SelectItem>
                          <SelectItem value="Blog">Blog</SelectItem>
                          <SelectItem value="Landing">Landing</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="page_content">Current Page Content (Optional)</Label>
                      <Textarea
                        id="page_content"
                        value={pageForm.page_content}
                        onChange={(e) => setPageForm(prev => ({ ...prev, page_content: e.target.value }))}
                        placeholder="Paste your current page content here..."
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button
                    data-testid="optimize-page-btn"
                    onClick={handleOptimizePage}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? "Optimizing..." : "Optimize this Page"}
                  </Button>

                  {pageOutput && (
                    <div className="mt-4">
                      <h4 className="font-medium text-sm text-slate-700 mb-2">Output:</h4>
                      <ScrollArea className="h-96 w-full rounded-md border bg-slate-50 p-4">
                        <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">{pageOutput}</pre>
                      </ScrollArea>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Expected Progress Box */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-slate-700" />
                    <CardTitle>Expected Progress</CardTitle>
                  </div>
                  <CardDescription>
                    Estimated timeline based on your site and competition level
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-700">1-3 Months:</p>
                        <p>Start seeing initial traffic if you consistently publish optimized content and fix technical issues</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-700">3-6 Months:</p>
                        <p>Begin ranking for long-tail keywords and see steady organic growth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-700">6-12 Months:</p>
                        <p>Establish authority in your niche with consistent top rankings for target keywords</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 italic mt-4">
                      * These are estimates based on typical SEO timelines. Actual results vary based on competition, content quality, and implementation consistency.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - History/Reports */}
            <div className="space-y-6">
              <Card data-testid="history-panel">
                <CardHeader>
                  <CardTitle>History & Reports</CardTitle>
                  <CardDescription>
                    View past snapshots and generate status reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    data-testid="generate-report-btn"
                    onClick={handleGenerateReport}
                    disabled={loading || snapshots.length === 0}
                    variant="outline"
                    className="w-full mb-4"
                  >
                    {loading ? "Generating..." : "Generate Latest Report"}
                  </Button>

                  {reportOutput && (
                    <div className="mb-4">
                      <ScrollArea className="h-96 w-full rounded-md border bg-slate-50 p-4">
                        <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">{reportOutput}</pre>
                      </ScrollArea>
                    </div>
                  )}

                  <Tabs defaultValue="snapshots">
                    <TabsList className="w-full">
                      <TabsTrigger value="snapshots" className="flex-1">Snapshots</TabsTrigger>
                    </TabsList>
                    <TabsContent value="snapshots">
                      <ScrollArea className="h-[600px] w-full">
                        <div className="space-y-4 pr-4">
                          {snapshots.length === 0 ? (
                            <div className="text-center py-8 text-slate-500 text-sm">
                              No snapshots yet. Run the autopilot or optimize a page to get started!
                            </div>
                          ) : (
                            snapshots.map((snapshot) => (
                              <Card key={snapshot.id} className="border-slate-200">
                                <CardHeader className="pb-3">
                                  <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                      <div className="text-xs font-medium text-slate-500">
                                        {snapshot.snapshot_type}
                                      </div>
                                      <CardTitle className="text-sm">{snapshot.summary}</CardTitle>
                                    </div>
                                  </div>
                                  <div className="text-xs text-slate-500">
                                    {new Date(snapshot.created_at).toLocaleDateString()} at{" "}
                                    {new Date(snapshot.created_at).toLocaleTimeString()}
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  {snapshot.snapshot_type === "Autopilot Production Package" && (
                                    <Button
                                      onClick={() => handleApplyProductionPackage(snapshot.id)}
                                      disabled={loading}
                                      variant="default"
                                      size="sm"
                                      className="w-full mb-3 bg-green-600 hover:bg-green-700"
                                      data-testid={`apply-package-${snapshot.id}`}
                                    >
                                      <CheckCircle2 className="w-4 h-4 mr-2" />
                                      {loading ? "Applying..." : "Apply to Website"}
                                    </Button>
                                  )}
                                  <details className="text-xs">
                                    <summary className="cursor-pointer font-medium text-slate-700 hover:text-slate-900">
                                      View details
                                    </summary>
                                    <ScrollArea className="h-48 mt-2">
                                      <pre className="text-xs text-slate-600 whitespace-pre-wrap font-mono">
                                        {snapshot.full_output}
                                      </pre>
                                    </ScrollArea>
                                  </details>
                                </CardContent>
                              </Card>
                            ))
                          )}
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {!activeWebsite && websites.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">No Websites Yet</h2>
            <p className="text-slate-600 mb-6">Get started by adding your first website to the SEO Autopilot Lab</p>
            <Button onClick={() => setWebsiteFormOpen(true)}>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Your First Website
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
