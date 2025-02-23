import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Log the API response
    console.log("News API Response:", data);

    if (data.status === "error") {
      throw new Error(data.message || "News API error");
    }

    return NextResponse.json(data.articles || []);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch news" },
      { status: 500 }
    );
  }
} 