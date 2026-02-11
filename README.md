# RB Enterprises Website (React + TypeScript + Vite)

Premium multi-page enterprise website scaffold for:

- **RB Enterprises** (hardware + bulk orders)
- **RB Interiors** (interior services + portfolio)

## Tech Stack

- Vite
- React 18
- TypeScript
- React Router
- Tailwind CSS

## Project Structure

```txt
src/
  components/
    site/
  pages/
  routes/
  data/
  styles/
  utils/
```

## Primary Routes

- `/` Home
- `/about` About
- `/rb-enterprises` RB Enterprises (Hardware)
- `/rb-interiors` RB Interiors (Services + Portfolio preview)
- `/portfolio` Portfolio (filtered gallery)
- `/services` Services detail page
- `/studio` Studio / brand story
- `/contact` Contact + enquiry form

## Enquiry Flow

The contact form is implemented as a client-side serverless flow:

1. Opens WhatsApp prefilled message to `+91 9999999999`
2. Triggers a `mailto:` draft to `test@gmail.com`

Fields included:

- Name
- Phone
- Email
- Project Type
- Budget
- Inquiry Type
- Message

Lead flow note (“site visit first”) is included in messaging and UI.

## Getting Started

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Vercel Deployment

This Vite app is ready for Vercel:

1. Import the repository in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## Placeholder Assets

Portfolio currently uses Unsplash placeholders. Replace URLs in:

- `src/data/siteContent.ts`

Also replace testimonial, team, and brand placeholder text in relevant page files when final content is available.
