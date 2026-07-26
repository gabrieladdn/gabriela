import { NextResponse } from "next/server";

interface InstagramGraphItem {
  id: string;
  media_type: string;
  media_url?: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
  timestamp?: string;
}

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  // Se o token não estiver cadastrado, retorna dados mockados de alta qualidade de forma transparente
  if (!token || token.trim() === "") {
    return NextResponse.json({
      success: false,
      message: "Instagram Access Token not configured. Returning fallback mock data.",
      data: [
        {
          id: "mock1",
          media_type: "POST",
          media_url: "/images/insta/insta1.jpeg",
          permalink: "https://www.instagram.com/gabrielanunes_psi",
          duration: "Post",
        },
        {
          id: "mock2",
          media_type: "POST",
          media_url: "/images/insta/insta2.jpeg",
          permalink: "https://www.instagram.com/gabrielanunes_psi",
          duration: "Post",
        },
        {
          id: "mock3",
          media_type: "POST",
          media_url: "/images/insta/insta3.jpeg",
          permalink: "https://www.instagram.com/gabrielanunes_psi",
          duration: "Post",
        },
      ],
    });
  }

  try {
    // Chamada oficial à API do Instagram Basic Display
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}&limit=6`,
      { next: { revalidate: 3600 } } // Cache de 1 hora
    );

    if (!res.ok) {
      throw new Error(`Instagram API responded with status ${res.status}`);
    }

    const json = await res.json();

    const items = ((json.data as InstagramGraphItem[]) || [])
      .filter((item: InstagramGraphItem) => item.media_url)
      .slice(0, 3)
      .map((item: InstagramGraphItem) => ({
        id: item.id,
        media_type: item.media_type,
        // Para posts em vídeo, o Instagram Basic Display API fornece a thumbnail_url para a capa do vídeo
        media_url:
          item.media_type === "VIDEO" ? item.thumbnail_url || item.media_url : item.media_url,
        permalink: item.permalink,
        caption: item.caption ?? "",
        duration: item.media_type === "VIDEO" ? "Reels" : "Post",
      }));

    return NextResponse.json({
      success: true,
      data: items,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        data: [],
      },
      { status: 500 }
    );
  }
}
