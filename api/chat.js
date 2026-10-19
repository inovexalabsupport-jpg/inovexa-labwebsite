export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const message = request.body?.message?.trim();

  if (!message) {
    return response.status(400).json({ error: "Message is required" });
  }

  const apiResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are Inovexa AI, a friendly assistant for Inovexa Lab. Answer this question clearly: ${message}`,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await apiResponse.json();
  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Please contact Inovexa Lab directly.";

  return response.status(200).json({ reply });
}
