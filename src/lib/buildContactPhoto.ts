import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

/** Match Portrait.tsx: cover + center top + scale(1.18) translate(-2%, 6%) */
const ZOOM = 1.18;
const SHIFT_X = -0.02;
const SHIFT_Y = 0.06;
const OUTPUT_SIZE = 720;

export async function buildContactPhoto() {
  const source = await readFile(path.join(process.cwd(), "public", "kiana.jpg"));
  const image = sharp(source);
  const { width = 0, height = 0 } = await image.metadata();

  if (!width || !height) {
    return source;
  }

  const side = Math.min(width, height);
  const coverLeft = Math.floor((width - side) / 2);
  const coverTop = 0;

  const visible = Math.max(1, Math.floor(side / ZOOM));
  const coverCx = coverLeft + side / 2;
  const coverCy = coverTop + side / 2;

  // Image moves with translate; the crop window sees the opposite direction.
  let left = Math.round(coverCx - SHIFT_X * side - visible / 2);
  let top = Math.round(coverCy - SHIFT_Y * side - visible / 2);

  left = Math.max(0, Math.min(width - visible, left));
  top = Math.max(0, Math.min(height - visible, top));

  return image
    .extract({ left, top, width: visible, height: visible })
    .resize(OUTPUT_SIZE, OUTPUT_SIZE, { fit: "fill" })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
}
