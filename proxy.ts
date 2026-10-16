import { NextResponse, type NextRequest } from "next/server";

// "/" has no page of its own: send visitors to the language their browser
// prefers, falling back to English for anything other than Portuguese.
function preferredLocale(acceptLanguage: string) {
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((param) => param.trim().startsWith("q="));
      return { tag, q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter(({ tag, q }) => tag && q > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (tag.startsWith("pt")) return "pt";
    if (tag.startsWith("en")) return "en";
  }
  return "en";
}

export function proxy(request: NextRequest) {
  const lang = preferredLocale(request.headers.get("accept-language") ?? "");
  return NextResponse.redirect(new URL(`/${lang}`, request.url));
}

export const config = {
  matcher: ["/"],
};
