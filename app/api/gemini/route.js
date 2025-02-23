import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  const { prompt } = await request.json();

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Generate meme text
    const memeResult = await model.generateContent(`
      Create a funny meme caption about: ${prompt}
      Keep it short and humorous, maximum 2 sentences.
    `);
    const memeResponse = await memeResult.response;
    const memeText = memeResponse.text();

    // Extract keywords for image search
    const keywordResult = await model.generateContent(`
      Extract 3-5 relevant keywords from this text for image search: ${memeText}
      Return only the keywords separated by commas.
    `);
    const keywordResponse = await keywordResult.response;
    const keywords = keywordResponse.text();

    return Response.json({ text: memeText, keywords });
  } catch (error) {
    return Response.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
} 