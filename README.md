# TazaMeme - AI-Powered News Meme Generator 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

TazaMeme is a fun experimental project that combines multiple APIs and NLP techniques to create humorous memes from current news headlines. Built with Next.js, it demonstrates integration with Google's Gemini AI, NewsAPI, Cloudinary, and Unsplash.

## Purpose 🎯
- Experiment with cutting-edge AI/NLP capabilities through Gemini API
- Explore creative API integrations (News → AI → Image → Meme)
- Create an automated meme generation pipeline
- Demonstrate real-world API usage patterns

## Key Features ✨
- 📰 Real-time news aggregation from NewsAPI
- 🤖 AI-powered meme text generation using Google Gemini
- 🖼️ Dynamic image manipulation with Cloudinary
- 🔍 Smart image search integration with Unsplash
- ⚡ Next.js 14 App Router implementation
- 🎨 Responsive UI with Tailwind CSS

## Tech Stack 💻
| Component               | Technology                          |
|-------------------------|-------------------------------------|
| Framework               | Next.js 14                         |
| AI/NLP                  | Google Gemini API                  |
| News Source             | NewsAPI                            |
| Image Manipulation      | Cloudinary                         |
| Stock Images            | Unsplash API                       |
| Styling                 | Tailwind CSS                       |
| Deployment              | Vercel                             |

## Getting Started 🛠️

1. Clone the repository
```bash
git clone https://github.com/your-username/tazameme.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (create `.env.local` file)
```env
GEMINI_API_KEY=your_gemini_key
NEWS_API_KEY=your_newsapi_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloud_key
CLOUDINARY_API_SECRET=your_cloud_secret
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_key
```

4. Run the development server
```bash
npm run dev
```

## Environment Variables 📝
| Variable Name                     | Description                          |
|-----------------------------------|--------------------------------------|
| `GEMINI_API_KEY`                  | Google Gemini API key               |
| `NEWS_API_KEY`                    | NewsAPI.org access key              |
| `CLOUDINARY_CLOUD_NAME`          | Cloudinary cloud name               |
| `CLOUDINARY_API_KEY`             | Cloudinary API key                  |
| `CLOUDINARY_API_SECRET`          | Cloudinary API secret               |
| `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`| Unsplash API access key             |

## How It Works 🔄
1. Fetches latest news headlines from NewsAPI
2. Uses Gemini AI to generate humorous meme captions
3. Finds relevant images via Unsplash using AI-extracted keywords
4. Generates meme images with Cloudinary's text overlay API
5. Presents final memes in a clean, responsive UI

## API Routes 🛣️
- `/api/news` - Fetch current news headlines
- `/api/gemini` - Generate meme text & keywords
- `/api/meme-image` - Create meme image with Cloudinary

## Contributing 🤝
Contributions are welcome! Please open an issue first to discuss what you'd like to change.

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏
- NewsAPI.org for news aggregation
- Google Gemini for AI capabilities
- Cloudinary for image manipulation
- Unsplash for stock photos
- Vercel for deployment
