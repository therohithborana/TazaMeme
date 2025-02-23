"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");
        
        const response = await fetch("/api/news");
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message || "Failed to load news. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleCreateMeme = (title) => {
    router.push(`/meme?prompt=${encodeURIComponent(title)}`);
  };

  if (loading) {
    return <div className="text-center">Loading news...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (news.length === 0) {
    return <div className="text-center">No news available at the moment.</div>;
  }

  return (
    <div className="space-y-4">
      {news.map((article, index) => (
        <div key={index} className="p-4 bg-white rounded shadow">
          <h3 className="font-bold">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{article.description}</p>
          <button
            onClick={() => handleCreateMeme(article.title)}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Meme
          </button>
        </div>
      ))}
    </div>
  );
} 