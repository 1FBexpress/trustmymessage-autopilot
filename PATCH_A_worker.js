export default {
  async fetch(request) {
    // ✅ Always allow CORS
    if (request.method === "OPTIONS") {
      return new Response("OK", {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Only POST allowed" }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        explanation: "⚠️ This is a fake result for testing mode.",
        recommendation: "Install PATCH B to enable real AI scanning.",
        redFlags: ["Test Flag: Example risk indicator"],
        moneyRequest: false,
        loveBombing: false,
        urgency: false,
        avoidance: false,
        inconsistencies: ["Test Inconsistency"],
        commonPhrasesCount: 2
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
