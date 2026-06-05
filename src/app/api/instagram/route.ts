import { NextResponse } from "next/server";

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
          media_type: "VIDEO",
          media_url: "/images/ansiedade1.jpg",
          permalink: "https://www.instagram.com/gabrielanunes_psi",
          caption:
            "Ansiedade e os sinais do corpo\nComo o sofrimento emocional se expressa fisicamente em nós.",
          duration: "Reels",
        },
        {
          id: "mock2",
          media_type: "VIDEO",
          media_url: "/images/autoestima2.jpg",
          permalink: "https://www.instagram.com/gabrielanunes_psi",
          caption:
            "Autocrítica e Perfeccionismo\nA busca por ideais muito exigentes e seus impactos na autoestima.",
          duration: "Reels",
        },
        {
          id: "mock3",
          media_type: "VIDEO",
          media_url: "/images/corpo3.jpg",
          permalink: "https://www.instagram.com/gabrielanunes_psi",
          caption:
            "O espaço da psicoterapia\nCompreender padrões repetitivos e construir novas formas de se relacionar.",
          duration: "Reels",
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

    const items = (json.data || [])
      .filter((item: any) => item.media_url)
      .slice(0, 3)
      .map((item: any) => ({
        id: item.id,
        media_type: item.media_type,
        // Para posts em vídeo, o Instagram Basic Display API fornece a thumbnail_url para a capa do vídeo
        media_url:
          item.media_type === "VIDEO" ? item.thumbnail_url || item.media_url : item.media_url,
        permalink: item.permalink,
        caption: item.caption || "",
        duration: item.media_type === "VIDEO" ? "Reels" : "Post",
      }));

    return NextResponse.json({
      success: true,
      data: items,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        data: [],
      },
      { status: 500 }
    );
  }
}
