export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    // Handle OPTIONS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST
    if (request.method !== "POST") {
      return new Response("Only POST allowed", { 
        status: 405,
        headers: corsHeaders 
      });
    }

    try {
      // Parse incoming request
      const { text, imageBase64 } = await request.json();

      // Validate input
      if (!text && !imageBase64) {
        return new Response(JSON.stringify({
          error: "Missing required field: either 'text' or 'imageBase64' must be provided"
        }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      // === OpenAI Vision Request (Corrected) ===
      const safeImage =
        imageBase64 && imageBase64.length > 20000
          ? imageBase64.slice(0, 20000) + "...[truncated]"
          : imageBase64;

      const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.TrustMyMsg}`,  // Your OpenAI API key stored in Worker secrets
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are TrustMyMsg — an AI scam and fraud detection engine. Always respond with STRICT JSON ONLY:\n\n{\n  \"moneyRequest\": boolean,\n  \"loveBombing\": boolean,\n  \"urgency\": boolean,\n  \"avoidance\": boolean,\n  \"inconsistencies\": [\"array of notes\"],\n  \"commonPhrasesCount\": number,\n  \"redFlags\": [\"descriptions\"],\n  \"explanation\": \"short text\",\n  \"recommendation\": \"short text\"\n}"
            },
            {
              role: "user",
              content: [
                ...(text ? [{ type: "text", text: `Analyze this message text for fraud risk:\n${text}` }] : []),
                safeImage
                  ? {
                      type: "image_url",
                      image_url: {
                        url: safeImage
                      }
                    }
                  : null
              ].filter(Boolean)
            }
          ]
        })
      });

      if (!aiRes.ok) {
        const errorText = await aiRes.text();
        return new Response(JSON.stringify({
          error: `OpenAI API error: ${aiRes.status} - ${errorText}`
        }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      const aiData = await aiRes.json();

      // Return the full OpenAI response (frontend will unwrap it)
      return new Response(JSON.stringify(aiData), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });

    } catch (err) {
      return new Response(JSON.stringify({
        error: `Worker error: ${err.message}`
      }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }
};
