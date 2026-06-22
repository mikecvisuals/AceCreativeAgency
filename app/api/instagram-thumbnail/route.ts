export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) return Response.json({ error: "No URL" }, { status: 400 });

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        "Accept": "text/html",
        "Accept-Language": "nl-NL,nl;q=0.9",
      },
      next: { revalidate: 86400 },
    });
    const html = await res.text();
    const match = html.match(/og:image" content="([^"]+)"/);
    const thumbnail = match ? match[1].replace(/&amp;/g, "&") : null;
    return Response.json({ thumbnail_url: thumbnail });
  } catch {
    return Response.json({ thumbnail_url: null });
  }
}
