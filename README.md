# Puoch Mabor Makuei - Portfolio Website

A modern, professional portfolio website showcasing expertise in Cybersecurity, Artificial Intelligence, and Data Science.

## Tech Stack

- **React 18** with **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Vite** for build tooling
- **Lucide React** for icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/     # Reusable components
  sections/       # Page sections
  data/          # Content data
  styles/        # Global styles
  App.tsx        # Main app component
  main.tsx       # Entry point
```

## Customization

All content can be customized in the `src/data/` directory. The design system uses Tailwind CSS with custom colors defined in `tailwind.config.js`.

## Contact Form Setup

The contact form uses Formspree to send emails. To set it up:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `formspreeEndpoint` in `src/data/content.ts` with your Formspree form ID

See `FORMSPREE_SETUP.md` for detailed instructions.

