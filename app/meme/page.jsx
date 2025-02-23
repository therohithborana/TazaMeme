"use client";

import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { useSearchParams } from "next/navigation";

export default function MemePage() {
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt");
  const [memeImage, setMemeImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const generateMeme = async () => {
      try {
        setLoading(true);
        setError("");

        // Generate meme text and keywords
        const textResponse = await fetch("/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        });
        const { text: memeText, keywords } = await textResponse.json();

        // Get relevant image from Unsplash using keywords
        const imageResponse = await fetch(
          `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
            keywords
          )}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
        );
        const imageData = await imageResponse.json();

        // Generate meme image
        const memeResponse = await fetch("/api/meme-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageUrl: imageData.urls.regular,
            text: memeText,
          }),
        });
        const memeData = await memeResponse.json();
        setMemeImage(memeData.url);
      } catch (error) {
        console.error("Error generating meme:", error);
        setError("Failed to generate meme. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (prompt) {
      generateMeme();
    }
  }, [prompt]);

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your Meme</h2>
        {loading && <div className="text-center">Generating your meme...</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {memeImage && (
          <img
            src={memeImage}
            alt="Generated Meme"
            className="w-full rounded-lg shadow mb-4"
          />
        )}
      </div>
    </MainLayout>
  );
} 