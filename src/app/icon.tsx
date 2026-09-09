import { ImageResponse } from "next/og";
import { cormorantFontFamily, loadCormorantFont } from "@/lib/loadCormorantFont";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 8,
          border: "1.5px solid #C9A66B",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#3F312B",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontFamily: cormorantFontFamily,
            lineHeight: 1,
            marginTop: 1,
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
