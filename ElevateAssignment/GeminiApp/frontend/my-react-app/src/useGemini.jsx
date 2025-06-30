import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyD7hGsYDFSpUhONIkDXhND_7CJ1KcOWHf8");

export async function getSummary(text) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
    Summarize the following text into 3–5 concise bullet points.
    Return it as a JSON array like:
    [ "Point 1", "Point 2", "Point 3" ]

    TEXT: ${text}
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  let output = await response.text().trim();

  // Remove any code block formatting
  output = output.replace(/```json/g, "").replace(/```/g, "").trim();

  try {
    return JSON.parse(output);
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    return ["Could not parse AI response", output];
  }
}
