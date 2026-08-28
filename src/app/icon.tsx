import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

async function loadSerifFont() {
  const url =
    "https://cdn.jsdelivr.net/fontsource/fonts/cormorant-garamond@5.0.8/latin-600-normal.ttf";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("font fetch failed");
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Icon() {
  const fontData = await loadSerifFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5EEE7",
          borderRadius: "50%",
          border: "3px solid #C9A66B",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#3F312B",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.06em",
            fontFamily: fontData ? "Cormorant" : "Georgia, serif",
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          KS
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Cormorant",
                data: fontData,
                style: "normal" as const,
                weight: 600 as const,
              },
            ],
          }
        : {}),
    },
  );
}
