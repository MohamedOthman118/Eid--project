# Mohamed & Nada — Eid Booklet

A private digital love booklet, deployable on Vercel in minutes.

---

## Project Structure

```
project/
├── public/
│   ├── index.html        ← Frontend (all pages, styles, JS)
│   └── images/
│       ├── photo1.jpg
│       ├── photo2.jpg
│       ├── photo3.jpg
│       ├── photo4.jpg
│       └── photo5.jpg    ← Add more photos here
├── api/
│   └── photos.js         ← Backend: returns photo list as JSON
├── vercel.json           ← Routing config
└── README.md
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
cd your-project-folder
vercel
```
Follow the prompts. Done — you get a live URL instantly.

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo → **Deploy**

---

## Adding More Photos

1. **Drop your image** into `public/images/` (JPG, PNG, or WebP)
2. **Register it** in `api/photos.js` — add an entry to the `PHOTOS` array:

```js
{
  id: 6,
  file: "photo6.jpg",
  caption: "Your caption here 🎉",
},
```

3. **Push to GitHub** → Vercel redeploys automatically (takes ~30 seconds)

---

## Password

The unlock password is set in `public/index.html` at the top of the `<script>` block:

```js
const CORRECT = '27/01/2021';
const ANN_DATE = new Date(2021, 0, 27);
```

Change these to update the password and anniversary counter date.
