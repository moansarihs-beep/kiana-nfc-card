import { ImageResponse } from "next/og";
import { cormorantFontFamily, loadCormorantFont } from "@/lib/loadCormorantFont";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const font = await loadCormorantFont();

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
          borderRadius: 40,
          border: "6px solid #C9A66B",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#3F312B",
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontFamily: cormorantFontFamily,
            lineHeight: 1,
            marginTop: 4,
          }}
        >
          KS
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [font],
    },
  );
}
