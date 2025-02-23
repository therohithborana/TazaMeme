import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(request) {
  const { imageUrl, text } = await request.json();

  try {
    const result = await cloudinary.uploader.upload(imageUrl, {
      transformation: [
        { width: 600, height: 400, crop: "fill" },
        {
          overlay: {
            font_family: "Arial",
            font_size: 40,
            font_weight: "bold",
            text: encodeURIComponent(text),
          },
          color: "#FFFFFF",
          gravity: "north",
          y: 20,
          background: "black",
          opacity: 50,
          effect: "colorize:50",
        },
      ],
    });

    return Response.json({ url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary error:", error);
    return Response.json({ error: "Failed to generate meme" }, { status: 500 });
  }
} 