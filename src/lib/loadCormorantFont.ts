const CORMORANT_FAMILY = "Cormorant Garamond";
const CORMORANT_WEIGHT = 600;

export async function loadCormorantFont() {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@${CORMORANT_WEIGHT}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((response) => response.text());

  const match = css.match(/src: url\((.+)\) format\('(?:opentype|truetype)'\)/);

  if (!match?.[1]) {
    throw new Error("Failed to load Cormorant Garamond for favicon");
  }

  const data = await fetch(match[1]).then((response) => response.arrayBuffer());

  return {
    name: CORMORANT_FAMILY,
    data,
    style: "normal" as const,
    weight: CORMORANT_WEIGHT as 600,
  };
}

export const cormorantFontFamily = CORMORANT_FAMILY;
