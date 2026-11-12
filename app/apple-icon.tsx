import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const spade =
  "M12 1.5c-1.6 2.6-4.3 4.8-6.6 6.9C3.6 10 2.5 11.8 2.5 13.8c0 2.8 2.2 4.9 4.9 4.9 1.5 0 2.8-.6 3.6-1.6-.3 2.2-1.2 3.9-2.8 5.4h7.6c-1.6-1.5-2.5-3.2-2.8-5.4.8 1 2.1 1.6 3.6 1.6 2.7 0 4.9-2.1 4.9-4.9 0-2-1.1-3.8-2.9-5.4C16.3 6.3 13.6 4.1 12 1.5Z";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#1f3bea" }}>
      <svg width="120" height="120" viewBox="0 0 24 24" role="img" aria-label="Spade">
        <path fill="#ff5470" transform="translate(1.2 1.2)" d={spade} />
        <path fill="#ffffff" d={spade} />
      </svg>
    </div>,
    size,
  );
}
