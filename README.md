# Munnasah Concrete Carpenter - MCC Group Website

React + Vite single-page corporate website with animated construction visuals, manpower statistics, staff gallery, dark/light theme, UAE coverage, and a scroll-controlled building animation.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel settings:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Source structure

```text
src/
  App.jsx
  main.jsx
  styles.css
  components/
    About.jsx
    BuildingScroll.jsx
    Contact.jsx
    Counter.jsx
    Coverage.jsx
    Footer.jsx
    Gallery.jsx
    Hero.jsx
    ManpowerDashboard.jsx
    Navbar.jsx
    Projects.jsx
    SectionTitle.jsx
    Services.jsx
    Team.jsx
    WhyUs.jsx
  data/
    siteData.js
  hooks/
    useTheme.js
```

`App.jsx` now only assembles the sections. Edit each section independently in `src/components/`.

## Replace photos
All replaceable photos are in `public/images/`. Keep the filenames when replacing them.
See `public/images/README-IMAGES.txt`.

## Important
`gallery-07.jpg`, `gallery-08.jpg`, and `gallery-09.jpg` are placeholders in this ZIP because the actual local staff files were not available in the uploaded project copy. Replace them with your real IT Manager, PRO and Accounts Manager photos.
