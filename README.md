# AfriPashion Ltd — Website

A multi-page React site for AfriPashion Ltd (Fashion Home), Choggu Yelpasi, Tamale.

## Pages
- `/` — Home
- `/collections` — The Kaftan & The Mandarin Jacket
- `/craft` — Brand story
- `/process` — Consultation → Fabric → Cut & Stitch → Fitting
- `/contact` — Phone, email, location, book a fitting

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy to Netlify, Vercel,
GitHub Pages, or any static host.

## Structure

```
src/
  components/   Header, Footer, Monogram, StitchLine, GarmentArt
  pages/        Home, Collections, Craft, Process, Contact
  App.jsx       Routes
  main.jsx      Entry point + React Router
```

## Editing content

- Colors and fonts: `tailwind.config.js`
- Phone / email / address: search each page file for the current values
  and replace them
