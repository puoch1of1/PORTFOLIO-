# Articles Section - Visual & Technical Reference

## Section Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  bg-primary-dark (#0a0a0a)                                 │
│  py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8             │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ max-w-6xl mx-auto                                   │   │
│  │                                                     │   │
│  │ ┌───────────────────────────────────────────────┐   │   │
│  │ │ Writing                                       │   │   │
│  │ │ text-3xl sm:text-4xl md:text-5xl             │   │   │
│  │ │ font-heading font-bold mb-3 sm:mb-4          │   │   │
│  │ └───────────────────────────────────────────────┘   │   │
│  │                                                     │   │
│  │ ┌───────────────────────────────────────────────┐   │   │
│  │ │ Technical thinking, long-form reasoning, and  │   │   │
│  │ │ infrastructure insights                       │   │   │
│  │ │ text-sm sm:text-base text-secondary-gray      │   │   │
│  │ │ max-w-2xl mx-auto mb-12 sm:mb-16             │   │   │
│  │ └───────────────────────────────────────────────┘   │   │
│  │                                                     │   │
│  │ ┌──────────────────┐  ┌──────────────────┐       │   │
│  │ │  Article Card    │  │  Article Card    │       │   │
│  │ │  (md:col-span-1) │  │  (md:col-span-1) │       │   │
│  │ └──────────────────┘  └──────────────────┘       │   │
│  │ gap-6 md:gap-8                                     │   │
│  │ ┌──────────────────┐  ┌──────────────────┐       │   │
│  │ │  Article Card    │  │  Article Card    │       │   │
│  │ │  (md:col-span-1) │  │  (md:col-span-1) │       │   │
│  │ └──────────────────┘  └──────────────────┘       │   │
│  │                                                     │   │
│  │ ┌─────────────────────────────────────────────┐   │   │
│  │ │ ┌────────────────────────────────────────┐  │   │   │
│  │ │ │ View all articles →                    │  │   │   │
│  │ │ └────────────────────────────────────────┘  │   │   │
│  │ └─────────────────────────────────────────────┘   │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Article Card Component

### Structure

```
┌──────────────────────────────────────────────┐
│ bg-primary-charcoal (#1a1a1a)                │
│ border-2 border-accent-blue/30               │
│ rounded-lg p-4 sm:p-6                        │
│ hover:border-accent-blue/50                  │
│ transition-all duration-300                  │
│                                              │
│ ┌────────────────────────────────────────┐   │
│ │ Building Secure Infrastructure...      │   │
│ │ text-lg sm:text-xl font-heading        │   │
│ │ font-bold text-white line-clamp-2      │   │
│ │ hover:text-accent-blue transition      │   │
│ └────────────────────────────────────────┘   │
│ mb-2                                         │
│                                              │
│ ┌────────────────────────────────────────┐   │
│ │ Exploring practical approaches to      │   │
│ │ cybersecurity when resources are       │   │
│ │ text-sm sm:text-base text-secondary-  │   │
│ │ gray line-clamp-2 leading-relaxed      │   │
│ └────────────────────────────────────────┘   │
│ mb-4                                         │
│                                              │
│ ┌────────────────────────────────────────┐   │
│ │ Jan 6, 2025  ·  8 min read            │   │
│ │ text-xs text-secondary-gray            │   │
│ │ border-b border-white/10 pb-4          │   │
│ └────────────────────────────────────────┘   │
│ mb-4                                         │
│                                              │
│ ┌────────────────────────────────────────┐   │
│ │ Read on Medium →                       │   │
│ │ text-accent-blue font-medium text-sm   │   │
│ │ group-hover:gap-3 transition           │   │
│ │ arrow: group-hover:translate-x-1       │   │
│ └────────────────────────────────────────┘   │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Color Palette

| Color | Tailwind Class | Hex | Usage |
|-------|----------------|-----|-------|
| Dark Background | `bg-primary-dark` | #0a0a0a | Section background |
| Charcoal | `bg-primary-charcoal` | #1a1a1a | Card background |
| Blue | `accent-blue` | #3b82f6 | Links, active states, borders |
| Gray | `secondary-gray` | #6b7280 | Metadata, descriptions |
| White | `text-white` | #ffffff | Titles, high contrast |

---

## Typography

| Element | Tailwind Classes | Properties |
|---------|-----------------|-----------|
| Section Title | `text-3xl sm:text-4xl md:text-5xl font-heading font-bold` | Space Grotesk, Bold |
| Section Subtitle | `text-sm sm:text-base text-secondary-gray` | Inter, Gray |
| Card Title | `text-lg sm:text-xl font-heading font-bold text-white` | Space Grotesk, Bold |
| Card Excerpt | `text-sm sm:text-base text-secondary-gray` | Inter, Gray |
| Metadata | `text-xs text-secondary-gray` | Inter, Small, Gray |
| CTA Text | `text-sm font-medium text-accent-blue` | Inter, Blue |

---

## Spacing System

| Breakpoint | Horizontal | Vertical |
|------------|-----------|----------|
| Mobile | `px-4` | `py-16` |
| Tablet | `sm:px-6` | `sm:py-20` |
| Desktop | `lg:px-8` | `md:py-24` |

**Card Padding:**
- Mobile: `p-4`
- Tablet+: `sm:p-6`

**Grid Gap:**
- Mobile: `gap-6`
- Desktop: `md:gap-8`

---

## Responsive Grid

```
Mobile (< 640px):
┌─────────────────┐
│  Card 1         │
├─────────────────┤
│  Card 2         │
├─────────────────┤
│  Card 3         │
└─────────────────┘

Tablet (640px - 1024px):
┌──────────────┐  ┌──────────────┐
│  Card 1      │  │  Card 2      │
├──────────────┤  ├──────────────┤
│  Card 3      │  │  Card 4      │
├──────────────┤  ├──────────────┤
│  Card 5      │  │              │
└──────────────┘  └──────────────┘

Desktop (> 1024px):
┌──────────────┐  ┌──────────────┐
│  Card 1      │  │  Card 2      │
├──────────────┤  ├──────────────┤
│  Card 3      │  │  Card 4      │
├──────────────┤  ├──────────────┤
│  Card 5      │  │              │
└──────────────┘  └──────────────┘

max-w-6xl: 64rem / 1024px
```

---

## Animations & Transitions

### Framer Motion Variants

**Container:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms stagger between items
    },
  },
};
```

**Individual Items (Cards):**
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },     // Start: transparent, 30px down
  visible: { opacity: 1, y: 0 },     // End: visible, normal position
};
```

**Section Headings:**
```
initial={{ opacity: 0, y: 20 }}      // Start: transparent, 20px down
whileInView={{ opacity: 1, y: 0 }}   // End: visible, normal position
viewport={{ once: true }}             // Animate only once on scroll
```

### Hover Effects

**Card Border:**
```
default:  border-accent-blue/30
hover:    border-accent-blue/50
```

**Card Title:**
```
default:  text-white
hover:    text-accent-blue
```

**Card Arrow:**
```
default:  translate-x-0
hover:    translate-x-1 (4px right)
```

**View All Button:**
```
default:  border-accent-blue/30 bg-transparent
hover:    border-accent-blue/50 bg-accent-blue/5
```

**All Transitions:** `duration-300` (smooth 300ms easing)

---

## States

### Loading State

```
┌────────────────────────────────────┐
│ Loading articles…                  │
│ text-secondary-gray                │
│ py-12 (center)                     │
└────────────────────────────────────┘
```

### Error State

```
┌────────────────────────────────────┐
│ Failed to fetch articles from...   │
│ text-secondary-gray                │
│                                    │
│ Using recent writing samples       │
│ text-xs text-secondary-gray        │
└────────────────────────────────────┘
```

### Empty State

```
┌────────────────────────────────────┐
│ No articles available at the       │
│ moment.                            │
│ text-secondary-gray                │
└────────────────────────────────────┘
```

---

## Component Props

### ArticleCard

```typescript
interface ArticleCardProps {
  title: string;           // Article title
  excerpt: string;         // Article excerpt (plain text)
  pubDate: string;         // ISO date string
  readingTime?: string;    // Optional: "8 min read"
  link: string;           // Medium article URL
  index?: number;         // Optional: for animation stagger
}
```

### Data Structure

```typescript
interface Article {
  id: string;             // Unique identifier
  title: string;          // Article title
  excerpt: string;        // Plain text excerpt (~160 chars)
  pubDate: string;        // ISO date string
  readingTime?: string;   // "X min read" or "< 1 min read"
  link: string;           // Medium article URL
  author?: string;        // Author name
}
```

---

## Accessibility

✅ **Semantic HTML:**
- `<section>` for container
- `<h2>` for section heading
- `<a>` for links with proper attributes
- `target="_blank" rel="noopener noreferrer"` for external links

✅ **Color Contrast:**
- Text on background: White on dark (#0a0a0a) ✅
- Links: Blue on dark (#3b82f6) ✅
- Metadata: Gray on dark (#6b7280) ✅

✅ **Responsive:**
- Mobile-first approach
- Touch-friendly tap targets
- Readable on all screen sizes

---

## Performance

- **No images loaded** (except Medium links)
- **Lightweight:** Single API call per page load
- **Cached:** Mock articles available instantly as fallback
- **Lazy loading:** Viewport-based animation triggers
- **Stagger:** Smooth, performant animations (0.1s per card)

---

## Integration Points

### Where It Lives
- **Position:** Between `<Projects />` and `<Affiliations />` in `App.tsx`
- **ID Anchor:** `id="articles"` (linkable as `#articles`)
- **Full Width:** Extends edge-to-edge with proper padding

### How It Connects
- **Content Source:** `src/data/content.ts` (Article type, mockArticles, mediumUsername)
- **Components Used:**
  - React hooks (useState, useEffect)
  - Framer Motion (motion.h2, motion.p, motion.div, motion.a)
  - Lucide icons (ArrowRight)

---

## Browser Support

✅ All modern browsers (Chrome, Firefox, Safari, Edge)  
✅ CSS Grid support (>95% of users)  
✅ Framer Motion support (>95% of users)  
✅ CSS custom properties (>95% of users)  
✅ Fetch API (>95% of users)  

Fallback to mock articles if RSS API is unavailable.

---

## Mobile Optimization

| Breakpoint | Width | Cards | Padding |
|-----------|-------|-------|---------|
| xs | 0-640px | 1 col | px-4 |
| sm | 640px-768px | 1 col | px-6 |
| md | 768px-1024px | 2 col | px-6 |
| lg | 1024px+ | 2 col | px-8 |

**Line Clamping:**
- Titles: 2 lines max
- Excerpts: 2 lines max
- Automatic "..." overflow

---

This is a reference for maintaining, debugging, or extending the Articles section. All values are exact—use them as the source of truth. 📐
