import type { APIRoute } from "astro";
import insta1 from "@/assets/images/insta/insta1.jpeg";
import insta2 from "@/assets/images/insta/insta2.jpeg";
import insta3 from "@/assets/images/insta/insta3.jpeg";

export const prerender = false;

interface InstagramGraphItem {
  id: string;
  media_type: string;
  media_url?: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
  timestamp?: string;
}

export const GET: APIRoute = async () => {
  // Prefer runtime process.env lookup first so Vite does not inline an empty build-time string
  const runtimeToken = process.env["INSTAGRAM_ACCESS_TOKEN"]?.trim() ?? "";
  const buildEnvValue = import.meta.env.INSTAGRAM_ACCESS_TOKEN;
  const buildToken = typeof buildEnvValue === "string" ? buildEnvValue.trim() : "";
  const token = runtimeToken || buildToken;

  if (!token) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Instagram Access Token not configured. Returning fallback mock data.",
        data: [
          {
            id: "mock1",
            media_type: "POST",
            media_url: insta1.src,
            permalink: "https://www.instagram.com/gabrielanunes_psi",
            duration: "Post",
          },
          {
            id: "mock2",
            media_type: "POST",
            media_url: insta2.src,
            permalink: "https://www.instagram.com/gabrielanunes_psi",
            duration: "Post",
          },
          {
            id: "mock3",
            media_type: "POST",
            media_url: insta3.src,
            permalink: "https://www.instagram.com/gabrielanunes_psi",
            duration: "Post",
          },
        ],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}&limit=6`
    );

    if (!res.ok) {
      throw new Error(`Instagram API responded with status ${res.status}`);
    }

    const json = (await res.json()) as { data?: InstagramGraphItem[] };

    const items = (json.data || [])
      .filter((item) => item.media_url)
      .slice(0, 3)
      .map((item) => ({
        id: item.id,
        media_type: item.media_type,
        media_url:
          item.media_type === "VIDEO" ? item.thumbnail_url || item.media_url : item.media_url,
        permalink: item.permalink,
        caption: item.caption ?? "",
        duration: item.media_type === "VIDEO" ? "Reels" : "Post",
      }));

    return new Response(
      JSON.stringify({
        success: true,
        data: items,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
        data: [],
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
