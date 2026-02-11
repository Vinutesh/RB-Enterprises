

# Vertica Studio — Architecture Firm Website

A premium, dark-themed multi-page portfolio website for your architecture firm, inspired by the Vertica Framer template. Includes a working contact form that stores inquiries and sends email notifications.

---

## Page 1: Home Page
- **Navigation bar** — Logo on the left, links (Our Projects, Our Studio, What We Do, Let's Talk CTA button) on the right
- **Hero section** — Large heading "Crafting Iconic Spaces With Purpose" with a full-width architectural image below
- **About snippet** — Brief studio description with a "What We Do" link
- **Featured Projects grid** — 4 project cards (image + title + category tag), linking to individual project pages
- **Our Story section** — Heading + image of the team with a "Read Our Story" link
- **Services overview** — 4 service cards (Urban Planning, Residential, Commercial, Landmarks) with descriptions
- **Testimonial section** — Client quote with attribution
- **CTA footer** — "Transform Your Vision Into Reality" with a "Let's Talk" button

## Page 2: Our Projects
- Hero heading "The Work That Defines Us"
- Full list of projects displayed as large image cards with project name and category label
- Each card links to an individual project detail page

## Page 3: Individual Project Pages
- Project hero image (full-width)
- Project name, category, and detailed description
- Image gallery showcasing the project

## Page 4: Our Studio
- Hero heading "The Vision That Drives Us"
- Studio description and philosophy text
- Team/workspace imagery
- Key values or principles section

## Page 5: What We Do (Services)
- Hero section
- Detailed breakdown of 4 services (Urban Planning, Residential, Commercial, Landmarks) with descriptions and imagery

## Page 6: Let's Talk (Contact)
- Contact form with fields: Name, Email, Phone, Project Type, Message
- Form submissions are **stored in a database** so you can review inquiries
- **Email notification** sent to you when someone submits the form (using Resend)

---

## Design & Style
- **Dark theme** — Near-black backgrounds with cream/off-white text
- **Typography** — Bold uppercase headings, clean sans-serif body text
- **Monospace label tags** — Small category labels in parentheses like `( COMMERCIAL )`
- **Smooth hover effects** on project cards and navigation
- **Fully responsive** — Mobile-friendly layout with hamburger menu
- **High-quality placeholder images** for architecture projects (you can swap them for your own)

## Backend (Lovable Cloud + Supabase)
- **Contact submissions table** to store form inquiries
- **Edge function** to send email notifications via Resend when a form is submitted
- You'll need to provide a **Resend API key** for email notifications

