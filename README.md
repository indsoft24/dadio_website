# HeyyPal Landing Page

A Vue.js 3 landing site for [HeyyPal](https://heyypal.com/) — a next-generation platform that connects users with verified experts (doctors, lawyers, therapists, mentors, and more) via instant app-to-app calling.

## Tech Stack

- **Vue 3** (Composition API)
- **Vue Router** (SEO-friendly routes)
- **Vite** (build tool)

## SEO-Friendly URLs

| Page        | URL            |
|------------|----------------|
| Home       | `/`            |
| About Us   | `/about-us`    |
| Terms of Use | `/terms-of-use` |
| Contact Us | `/contact-us`  |

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run dev server**
   ```bash
   npm run dev
   ```
   Open the URL shown (e.g. http://localhost:5173).

3. **Build for production**
   ```bash
   npm run build
   ```
   Output is in the `dist/` folder.

## Images

Place all HeyyPal images in `public/images/` so they are served at `/images/...`. The project expects:

- `heyypal_wallpaper.jpeg` — hero background
- WhatsApp expert photos (filenames as used in `src/data/experts.js`)

If you added images in the project root, they have been copied into `public/images/` during setup.

## Project Structure

- `src/views/` — Home, About, Terms, Contact pages
- `src/components/` — AppHeader, AppFooter
- `src/data/experts.js` — expert list and image paths
- `public/images/` — static images

---

© DTW Squad Pvt. Ltd.
