// Articles Configuration Examples
// Use these snippets to customize your Articles section

// ============================================
// EXAMPLE 1: Change Display Count
// ============================================
// Location: src/sections/Articles.tsx, line ~50
// Default: Shows 5 articles
// Change to show 3 articles:

.slice(0, 3) // Get only 3 most recent


// ============================================
// EXAMPLE 2: Custom Mock Articles
// ============================================
// Location: src/data/content.ts
// Replace mockArticles array with your own:

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "How I Reduced Network Latency by 40%",
    excerpt: "Practical techniques for optimizing network performance in resource-constrained environments. A deep dive into infrastructure monitoring.",
    pubDate: "2025-01-05T10:00:00Z",
    readingTime: "7 min read",
    link: "https://medium.com/@puoch1of1/network-optimization",
    author: "Puoch Mabor Makuei",
  },
  {
    id: "2",
    title: "Machine Learning for Anomaly Detection",
    excerpt: "Using ML models to detect network anomalies in real time. Practical implementation guide with Python examples.",
    pubDate: "2025-01-03T14:30:00Z",
    readingTime: "10 min read",
    link: "https://medium.com/@puoch1of1/ml-anomaly-detection",
    author: "Puoch Mabor Makuei",
  },
];


// ============================================
// EXAMPLE 3: Adjust Reading Time Calculation
// ============================================
// Location: src/sections/Articles.tsx
// Current: Assumes 200 words per minute
// Change to 180 words per minute:

const wordCount = htmlContent.split(/\s+/).length;
const readingMinutes = Math.ceil(wordCount / 180); // Changed from 200 to 180
const readingTime =
  readingMinutes < 1 ? '< 1 min read' : `${readingMinutes} min read`;


// ============================================
// EXAMPLE 4: Change Excerpt Length
// ============================================
// Location: src/sections/Articles.tsx
// Current: ~160 characters
// Change to 120 characters:

const plainTextExcerpt = htmlContent
  .replace(/<[^>]*>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  // ... other replacements ...
  .substring(0, 120) // Changed from 160 to 120
  .concat('...');


// ============================================
// EXAMPLE 5: Add "NEW" Badge for Recent Articles
// ============================================
// Location: src/components/ArticleCard.tsx
// Add this helper to ArticleCard component:

const isNew = (pubDate: string): boolean => {
  const date = new Date(pubDate);
  const now = new Date();
  const daysOld = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
  return daysOld < 7; // Articles published in last 7 days
};

// Then add in JSX after title:
{isNew(pubDate) && (
  <span className="px-2 py-1 bg-accent-emerald/20 border border-accent-emerald/40 rounded-full text-xs text-accent-emerald font-medium whitespace-nowrap">
    New
  </span>
)}


// ============================================
// EXAMPLE 6: Add Article Tags/Categories
// ============================================
// Step 1: Update Article interface in src/data/content.ts:

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  pubDate: string;
  readingTime?: string;
  link: string;
  author?: string;
  tags?: string[]; // Add this line
}

// Step 2: Update ArticleCard in src/components/ArticleCard.tsx:

interface ArticleCardProps {
  title: string;
  excerpt: string;
  pubDate: string;
  readingTime?: string;
  link: string;
  tags?: string[]; // Add this line
  index?: number;
}

// Step 3: Add tag display in JSX:

{tags && tags.length > 0 && (
  <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-2 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded text-xs text-accent-blue font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
)}


// ============================================
// EXAMPLE 7: Disable RSS Feed (Use Mock Only)
// ============================================
// Location: src/sections/Articles.tsx
// Useful for development/testing
// Wrap the fetch logic:

useEffect(() => {
  const fetchArticles = async () => {
    // For development: use mock articles only
    setArticles(mockArticles);
    setLoading(false);
    return;

    // Original RSS fetch code (commented out for now)
    /*
    try {
      // ... fetch logic ...
    } catch (err) {
      // ...
    }
    */
  };

  fetchArticles();
}, []);


// ============================================
// EXAMPLE 8: Custom RSS Feed Source
// ============================================
// Location: src/sections/Articles.tsx
// Use a different RSS source or your own backend API:

const fetchArticles = async () => {
  try {
    // Replace with your own API endpoint
    const response = await fetch('/api/articles'); // Your backend API
    // or fetch from a different RSS source
    // const response = await fetch('https://your-custom-api.com/articles');

    const data = await response.json();
    // ... rest of transformation logic ...
  } catch (err) {
    // ... error handling ...
  }
};


// ============================================
// EXAMPLE 9: Add Filter by Tag
// ============================================
// Add this to src/sections/Articles.tsx:

const [selectedTag, setSelectedTag] = useState<string | null>(null);

const filteredArticles = selectedTag
  ? articles.filter(a => a.tags?.includes(selectedTag))
  : articles;

// Then render tag filter buttons before the grid:
{articles.length > 0 && (
  <div className="flex flex-wrap gap-2 justify-center mb-8">
    <button
      onClick={() => setSelectedTag(null)}
      className={`px-4 py-2 rounded-lg transition ${
        selectedTag === null
          ? 'bg-accent-blue text-white'
          : 'bg-white/10 text-white'
      }`}
    >
      All
    </button>
    {Array.from(new Set(articles.flatMap(a => a.tags || []))).map(tag => (
      <button
        key={tag}
        onClick={() => setSelectedTag(tag)}
        className={`px-4 py-2 rounded-lg transition ${
          selectedTag === tag
            ? 'bg-accent-blue text-white'
            : 'bg-white/10 text-white'
        }`}
      >
        {tag}
      </button>
    ))}
  </div>
)}


// ============================================
// EXAMPLE 10: Pagination (Show More)
// ============================================
// Add to src/sections/Articles.tsx:

const [displayCount, setDisplayCount] = useState(5);

// In JSX, use slice:
{articles.slice(0, displayCount).map((article) => (
  // ... render article ...
))}

// Add "Load More" button:
{displayCount < articles.length && (
  <motion.div className="text-center mt-8">
    <button
      onClick={() => setDisplayCount(prev => prev + 3)}
      className="px-6 py-3 border-2 border-accent-blue/30 rounded-lg text-accent-blue hover:border-accent-blue/50 transition"
    >
      Load More Articles
    </button>
  </motion.div>
)}


// ============================================
// EXAMPLE 11: Search Articles
// ============================================
// Add to src/sections/Articles.tsx:

const [searchTerm, setSearchTerm] = useState('');

const filteredArticles = articles.filter(a =>
  a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  a.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
);

// Add search input in JSX:
<input
  type="text"
  placeholder="Search articles..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full mb-8 px-4 py-2 bg-primary-charcoal border border-white/10 rounded-lg text-white placeholder-secondary-gray"
/>


// ============================================
// EXAMPLE 12: Change Section Header
// ============================================
// Location: src/sections/Articles.tsx
// Current: "Writing"
// Change to:

<motion.h2>Articles</motion.h2>
<motion.p>Latest thoughts on technology, systems, and infrastructure</motion.p>

// Or:

<motion.h2>Insights</motion.h2>
<motion.p>Long-form technical writing and analysis</motion.p>

// Or:

<motion.h2>Blog</motion.h2>
<motion.p>Articles on cybersecurity, AI, and data science</motion.p>
