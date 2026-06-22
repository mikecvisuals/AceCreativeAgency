export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) return Response.json({ error: "No URL" }, { status: 400 });

  try {
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
      { headers: { "User-Agent": "Mozilla/5.0" }, next: { revalidate: 86400 } }
    );
    const data = await res.json();
    return Response.json({ thumbnail_url: data.thumbnail_url ?? null });
  } catch {
    return Response.json({ thumbnail_url: null });
  }
}
