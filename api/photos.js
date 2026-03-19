// api/photos.js
// ─────────────────────────────────────────────────────────────
// Backend: photo registry for the Mohamed & Nada booklet.
//
// HOW TO ADD MORE PHOTOS:
//   1. Drop your .jpg / .png / .webp file into  public/images/
//   2. Add an entry to the PHOTOS array below
//   3. Push to GitHub → Vercel redeploys automatically
// ─────────────────────────────────────────────────────────────

const PHOTOS = [
  {
    id: 1,
    file: "photo1.jpg",
    caption: "Under the moonlit sky 🌙",
  },
  {
    id: 2,
    file: "photo2.jpg",
    caption: "A night to remember ✨",
  },
  {
    id: 3,
    file: "photo3.jpg",
    caption: "Where the sea meets us 🌊",
  },
  {
    id: 4,
    file: "photo4.jpg",
    caption: "By the Nile ⚓",
  },
  {
    id: 5,
    file: "photo5.jpg",
    caption: "Warm winter evenings 🔥",
  },

  // ── ADD MORE PHOTOS HERE ──────────────────────────────────
  // {
  //   id: 6,
  //   file: "photo6.jpg",
  //   caption: "Your caption here 🎉",
  // },
  // ─────────────────────────────────────────────────────────
];

export default function handler(req, res) {
  // CORS — allow the frontend to call this from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Attach the public URL for each photo
  const baseUrl = `https://${req.headers.host}`;

  const photos = PHOTOS.map((p) => ({
    ...p,
    url: `${baseUrl}/images/${p.file}`,
  }));

  res.status(200).json({ photos });
}
