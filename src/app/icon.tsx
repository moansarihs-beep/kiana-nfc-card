import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default async function Icon() {
  const fontData = await readFile(
    join(process.cwd(), "src/app/fonts/CormorantGaramond-SemiBold.ttf"),
  );

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
        }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#F5EEE7",
            borderRadius: 9999,
            border: "3px solid #C9A66B",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#3F312B",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.08em",
              fontFamily: "Cormorant",
              lineHeight: 1,
              marginTop: -2,
            }}
          >
            KS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant",
          data: fontData,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
