# Noah Spear - Personal Landing Page

A modern, responsive personal landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Setup Instructions

### 1. Add Your Profile Photo

Download your LinkedIn profile photo and save it as `profile.jpg` in the `public/` directory.

### 2. Update Your Information

Edit `app/page.tsx` to customize:
- Your biography text
- Your LinkedIn URL (currently set to `https://www.linkedin.com/in/noahspear`)
- Your X (Twitter) URL (currently set to `https://x.com/noahspear`)
- Your contact email address for the email button (which copies the address to the clipboard) by editing the `CONTACT_EMAIL` constant in `app/page.tsx` (currently `noah@noahspear.com`)
- Your contact email address for the email button by editing the `CONTACT_EMAIL` constant in `app/page.tsx` (currently `noah@noahspear.com`)

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your landing page.

## Features

- Responsive design that looks great on all devices
- Dark mode support
- Optimized images with Next.js Image component
- Modern UI with Tailwind CSS
- Social media links with hover effects

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.
