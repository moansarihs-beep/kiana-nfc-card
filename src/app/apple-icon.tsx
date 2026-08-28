import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
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
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            fontFamily: "Georgia, 'Times New Roman', serif",
            lineHeight: 1,
          }}
        >
          KS
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
