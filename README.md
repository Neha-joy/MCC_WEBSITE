# Munnasah Concrete Carpenter - MCC Group Website

Animated single-page React/Vite website for a UAE manpower company.

## Run locally

1. Install Node.js 18+.
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
```

The deployable website will be generated in the `dist` folder.

## Important before publishing

- Replace sample project/gallery images with your own MCC project photos.
- Replace sample project names with actual project/client details.
- Verify phone/email/contact details in `src/App.jsx`.
- Connect the contact form to your preferred backend, Formspree, EmailJS, or API.
- Replace the MCC text mark with your official logo if available.

## Main stack

- React
- Vite
- Framer Motion
- Lucide React
- Responsive CSS animations

## MCC logo + theme switch
- Official MCC Group logo is stored at `public/assets/mcc-logo.png` (prepared from the supplied PDF logo).
- The header includes a Dark/Light mode switch.
- Dark theme: navy blue + black.
- Light theme: MCC logo blue + white.
- The selected mode is stored in browser `localStorage` and persists after refresh.

## Replace Website Photos
All replaceable website photos are now stored in:

`public/images/`

You can replace any photo without changing the React code. Just keep the same filename. See `public/images/README-IMAGES.txt` for the full image map.

The MCC logo remains in:

`public/assets/mcc-logo.png`

## V5 animated manpower dashboard
A new animated Manpower Strength section has been added. It uses count-up KPIs, SVG ring animations, animated capability bars, floating labels, and a scanning KPI strip. The headline counts use the existing website figures (5000+ workforce, 200+ clients, 300+ projects). Capability percentages are presentation/demo values and should be replaced with verified internal figures before treating them as measured availability.
