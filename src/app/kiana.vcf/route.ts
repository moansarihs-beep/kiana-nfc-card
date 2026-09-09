import { buildContactPhoto } from "@/lib/buildContactPhoto";

function escapeVCard(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export async function GET() {
  const photo = await buildContactPhoto();

  const card = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Shams;Kiana;;;",
    "FN:Kiana Shams",
    `TITLE:${escapeVCard("Transformation & Lifestyle Coach")}`,
    "ORG:Kiana Shams",
    "TEL;TYPE=CELL,VOICE:+96899446852",
    "EMAIL;TYPE=INTERNET:shamskiana@gmail.com",
    "URL;TYPE=Website:https://kianashams.fit",
    "URL;TYPE=Instagram:https://www.instagram.com/coach__kianaa/",
    "URL;TYPE=WhatsApp:https://wa.me/96899446852",
    "X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/coach__kianaa",
    `NOTE:${escapeVCard("Instagram: @coach__kianaa")}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${photo.toString("base64")}`,
    "END:VCARD",
  ].join("\r\n");

  return new Response(`${card}\r\n`, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="Kiana-Shams.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
