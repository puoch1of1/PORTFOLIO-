# Medium Articles Integration Guide

## Overview

The Articles section displays your latest Medium articles in a clean, native card-based layout that matches the existing portfolio design. No iframes, no embeds—just pure React components with Framer Motion animations.

## Files Created

- `src/components/ArticleCard.tsx` — Reusable article card component
- `src/sections/Articles.tsx` — Main articles section with RSS feed integration
- Updated `src/data/content.ts` — Article types and mock data
- Updated `src/App.tsx` — Integrated Articles section into main layout

## Configuration

### Step 1: Update Your Medium Username

In `src/data/content.ts`, find this line:

```typescript
export const mediumUsername = "puoch1of1";
```

Replace `"puoch1of1"` with your Medium username (the handle without the `@`).

Example:
```typescript
export const mediumUsername = "yourusername";
```

### Step 2: How It Works

The Articles section uses **two approaches** (in order of preference):

#### 1. **Live RSS Feed (Recommended)**
- Fetches articles directly from your Medium RSS feed using the `rss2json` API
- **No authentication required**
- Automatic updates when you publish new articles
- Gracefully falls back to mock data if the API is unavailable

#### 2. **Mock Data (Fallback)**
- Used for development/testing
- Located in `src/data/content.ts`
- Automatically used if RSS feed fetch fails
- Edit the `mockArticles` array to customize sample articles

## Data Structure

Articles are defined by the `Article` interface:

```typescript
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  pubDate: string;
  readingTime?: string;
  link: string;
  author?: string;
}
```

## Features

### ✅ What's Included

- **Responsive Grid:** 1 column (mobile), 2 columns (tablet+)
- **Article Cards** with:
  - Title (truncated to 2 lines)
  - Excerpt (truncated to 2 lines)
  - Publication date (formatted: "Jan 6, 2025")
  - Reading time estimate
  - "Read on Medium →" link with hover animation
- **Loading State:** "Loading articles…" text while fetching
- **Error Handling:** Graceful fallback to mock articles if fetch fails
- **View All Link:** Direct link to your Medium profile
- **Animations:** Staggered fade-in with Framer Motion
- **Hover Effects:** Border highlight, link color change, arrow animation

### 🎨 Design Consistency

The Articles section matches the existing portfolio:

| Element | Style |
|---------|-------|
| **Background** | `bg-primary-dark` (#0a0a0a) |
| **Card Background** | `bg-primary-charcoal` (#1a1a1a) |
| **Border** | `border-accent-blue/30` with `border-accent-blue/50` hover |
| **Typography** | `font-heading` (Space Grotesk) for titles |
| **Text Color** | `text-secondary-gray` for metadata, `text-accent-blue` for links |
| **Spacing** | Consistent with Projects section (py-16–py-24, px-4–px-8) |
| **Motion** | Fade + rise animation with stagger on container |

## Customization

### Edit Mock Articles

If you want to customize mock article data (for testing or offline mode):

1. Open `src/data/content.ts`
2. Find the `mockArticles` array
3. Update article details as needed

Example:
```typescript
export const mockArticles: Article[] = [
  {
    id: "1",
    title: "My Custom Title",
    excerpt: "This is a custom excerpt...",
    pubDate: "2025-01-06T10:00:00Z",
    readingTime: "5 min read",
    link: "https://medium.com/@username/article-slug",
    author: "Your Name",
  },
  // ... more articles
];
```

### Adjust Display Count

In `src/sections/Articles.tsx`, line ~50, find:

```typescript
.slice(0, 5) // Get only 5 most recent
```

Change `5` to display more or fewer articles. For example, `.slice(0, 3)` shows 3 articles.

### Customize Section Heading & Description

In `src/sections/Articles.tsx`, find:

```tsx
<motion.h2>Writing</motion.h2>
<motion.p>Technical thinking, long-form reasoning, and infrastructure insights</motion.p>
```

Update the text to match your preference:

```tsx
<motion.h2>Articles</motion.h2>
<motion.p>My latest thoughts on technology and systems</motion.p>
```

## How the RSS Feed Works

The integration uses the free **rss2json.com API** to convert Medium's RSS feed into JSON:

1. Your Medium RSS feed: `https://medium.com/feed/@{username}`
2. Converted to JSON: `https://api.rss2json.com/v1/api.json?rss_url={rss_url}`
3. The code parses JSON items and transforms them into Article objects
4. HTML content is stripped, plain text extracted, and reading time estimated

**No API key required.** This is a free public service with reasonable rate limits.

## Fallback Behavior

If the RSS feed fetch fails (network error, API unavailable, etc.):

1. The component logs the error to console
2. The section gracefully displays mock articles instead
3. No error message shown to users (silent fail)
4. The "View all articles" link still works

This ensures your portfolio always displays articles, even if external services are unavailable.

## Troubleshooting

### Articles aren't displaying

1. **Check browser console** for errors
2. **Verify your Medium username** in `content.ts`
3. **Ensure your Medium profile is public** (not private)
4. **Try using mock articles** by temporarily disabling fetch (for testing)

### Reading time estimates seem off

Reading time is estimated assuming ~200 words per minute. Adjust the calculation in `Articles.tsx` if needed:

```typescript
const wordCount = htmlContent.split(/\s+/).length;
const readingMinutes = Math.ceil(wordCount / 200); // Change 200 to your preference
```

### Links opening Medium in iframe

This shouldn't happen. Verify `target="_blank"` and `rel="noopener noreferrer"` are in place on both:
- `ArticleCard.tsx` (the main card link)
- `Articles.tsx` (the "View all articles" link)

## Optional Enhancements

### Add a Writing Badge

In `ArticleCard.tsx`, after the title, add:

```tsx
<span className="px-2 py-1 bg-accent-emerald/20 border border-accent-emerald/40 rounded-full text-xs text-accent-emerald font-medium">
  Writing
</span>
```

### Add Categories/Topics

Modify the `Article` interface to include a `tags` field, then display them in the card.

### Animated "New" Badge

For recent articles, conditionally display a "New" badge.

### Dark Mode Toggle (if applicable)

The current design is dark-only, but you can add a light variant by creating theme-aware styles.

## Production Checklist

- [ ] Update `mediumUsername` in `content.ts`
- [ ] Test RSS feed integration in browser
- [ ] Verify article links open in new tabs
- [ ] Check responsive layout on mobile
- [ ] Test fallback mock data (simulate network error)
- [ ] Verify hover effects work on touch devices
- [ ] Check for any TypeScript errors

## Support

This integration is designed to be maintainable and extensible. The code includes comments explaining:

- Where to change the Medium username
- How RSS→JSON conversion works
- How excerpts are extracted and truncated
- How reading time is estimated
- How animations are staggered

If you want to switch from RSS to another data source (e.g., custom API), simply replace the `fetchArticles` function in `Articles.tsx` while keeping the component structure the same.

---

**Happy writing! 📝**
