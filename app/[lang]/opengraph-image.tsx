import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale, locales } from "@/lib/i18n";
import { services, site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const spade =
  "M12 1.5c-1.6 2.6-4.3 4.8-6.6 6.9C3.6 10 2.5 11.8 2.5 13.8c0 2.8 2.2 4.9 4.9 4.9 1.5 0 2.8-.6 3.6-1.6-.3 2.2-1.2 3.9-2.8 5.4h7.6c-1.6-1.5-2.5-3.2-2.8-5.4.8 1 2.1 1.6 3.6 1.6 2.7 0 4.9-2.1 4.9-4.9 0-2-1.1-3.8-2.9-5.4C16.3 6.3 13.6 4.1 12 1.5Z";

// Satori needs a static font file, so ask Google Fonts for a subset of the glyphs we draw.
async function loadFont(family: string, axes: string, text: string): Promise<ArrayBuffer | null> {
  "use cache";
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}:${axes}&text=${encodeURIComponent(text)}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : "fr");
  const role = dict.hero.role.replace(/\.$/, "");
  const ranks = services.map((service) => service.rank);

  const [display, body] = await Promise.all([loadFont("Anybody", "wdth,wght@150,900", `${site.name}${ranks.join("")}`), loadFont("Figtree", "wght@600", role)]);
  const fonts = [...(display ? [{ name: "Anybody", data: display, weight: 900 as const }] : []), ...(body ? [{ name: "Figtree", data: body, weight: 600 as const }] : [])];

  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "56px 64px", background: "#1f3bea", color: "#ffffff" }}>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "Anybody", fontSize: 96, lineHeight: 0.9 }}>
        <span>Julien</span>
        <span>Bonvarlet</span>
      </div>
      <div style={{ display: "flex", marginTop: 24, fontFamily: "Figtree", fontSize: 36 }}>{role}</div>
      <div style={{ display: "flex", marginTop: "auto", marginLeft: 330, marginBottom: -60 }}>
        {ranks.map((rank, i) => (
          <div
            key={rank}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 150,
              height: 210,
              marginLeft: i === 0 ? 0 : -30,
              padding: 12,
              background: "#ffffff",
              color: "#10123a",
              border: "3px solid #10123a",
              borderRadius: 14,
              boxShadow: "6px 6px 0 #10123a",
              transform: `rotate(${(i - 2) * 6}deg) translateY(${Math.abs(i - 2) * 12}px)`,
            }}
          >
            <span style={{ fontFamily: "Anybody", fontSize: 30 }}>{rank}</span>
            <svg width="70" height="70" viewBox="0 0 24 24" style={{ alignSelf: "center", marginBottom: 40 }} role="img" aria-label="Spade">
              <path fill="#ff5470" transform="translate(1.2 1.2)" d={spade} />
              <path fill="#10123a" d={spade} />
            </svg>
          </div>
        ))}
      </div>
    </div>,
    { ...size, fonts },
  );
}
