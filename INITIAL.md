## FEATURE:

[This website is designed for a luxury fashion brand that wants to make a bold impression online. The primary goals are to:

Showcase collections or campaigns through a visually-driven portfolio section

Convey brand values and story using a scrolling narrative layout

Present services or offerings in a refined, high-end layout

Engage visitors with animations, cinematic visuals, and a premium tone

It’s built to feel like a digital experience—more than just a site. Think of it as a sleek runway meets interactive storytelling, tailored to attract fashion-forward audiences, media, and potential collaborators.
🎬 SMRT Web Design Starter — Project Brief Output
🔹 Visual Style & Tone
Chosen Style: Cinematic Luxury
Mood: High-end, dramatic, and immersive
Vibe: Moody black/gold color palette with elegant typography

🔹 Layout Selection
Preferred Layouts:

Bento grid for feature display

Full-screen split for services

Scrolling narrative (scrollytelling) for storytelling impact

🔹 Color Scheme Guidance
Color Palette:

Deep black (#0D0D0D), Rich Gold (#FFD700), Soft Gray (#A9A9A9), White accents (#FFFFFF)

Creates a luxurious and premium aesthetic

🔹 Typography Style
Tone: Cinematic & Editorial
Fonts:

Headings: Playfair Display (Bold Serif)

Body: Inter (Sans-serif)

🔹 Animation Intensity & Style
Animation Level: Cinematic
Style Preferences:

Staggered text reveals

Smooth fade-ins

Subtle parallax effects

Scroll-triggered transitions

🔹 Optional Features
✅ Splash screen with logo animation

✅ Parallax effects throughout hero and portfolio

✅ Dark mode default

✅ Sticky transparent header with scroll transition

✅ Target industry: High-end fashion brand

✅ UI/UX expectation: Cinematic feel with bento layouts, advanced hover effects, and scroll-based storytelling

⚙️ Tech Stack
React + Next.js (App Router)

TailwindCSS

Framer Motion (for animations)

Turbopack for performance

Node.js for server-side logic

Lottie for the splash animation

✨ Design System & Components
Header: Transparent & sticky with floating logo
Hero: Fullscreen video background with delayed CTA
Portfolio: Masonry layout with hover previews and category filter
Testimonials: Card-based layout with animated quotes
Services: Iconic grid with subtle animation sequences
About: Split layout with team visuals + brand values
Contact: Animated booking form with floating visuals
Footer: Global presence, hover-animated social links

✅ Developer Notes
Checklist Highlights:

Used "use client" only where needed

Ensured no SSR hydration mismatch

Verified anchor links and IDs

Applied consistent spacing using margin utilities

Managed z-index for overlapping elements

Ensured accessibility (contrast, ARIA labels, reduced motion support)

All images optimized using next/image

Smooth scroll enabled via Tailwind plugin

Lighthouse score optimized

Vercel-ready deployment with lazy-loading visuals

]

## EXAMPLES:

[Several images of websites for luxury brands.]

## DOCUMENTATION:

[🧠 OVERVIEW:
 * This template provides a flexible system for building modern, dynamic websites and web apps using Cursor.
 * Inspired by the Killer Websites architecture but extended to fit a variety of tones, industries, and use cases
 * from cinematic portfolios to clean SaaS dashboards.
 */

// 🧱 TECH STACK & CORE SETUP
{
  framework: "Next.js (App Router) or framework of choice",
  language: "TypeScript",
  styling: "TailwindCSS (PostCSS setup preferred)",
  animations: ["Framer Motion", "CSS transitions", "Lottie (optional)", "GSAP (optional)", "Three.js (optional)", "WebGL (optional)", "no animations"],
  deployment: "Vercel or preferred platform",
  emailService: "Resend, Postmark, or SMTP (fallback)",
  faviconPath: "/public/favicon.png",
  metaImagePath: "/public/meta-default.png",
  environmentVariables: [
    "RESEND_API_KEY",
    "RESEND_FROM",
    "RESEND_TO",
    "RESEND_DOMAIN_FALLBACK",
    "CMS_API_KEY (optional)",
    "CUSTOM_ANALYTICS_ID (optional)"
  ]
}

// ⚙️ ERROR & SOLUTIONS LOG TEMPLATE (expand as needed)
const errorLog = [
  { issue: "Hydration mismatch (SSR vs client state)", fix: "Ensure no random values or browser APIs used in SSR" },
  { issue: "Client-side hook in server component", fix: "Add 'use client' to file or refactor logic to proper boundary" },
  { issue: "Tailwind build issues", fix: "Use postcss + tailwind.config.js with proper ESM export" },
  { issue: "Port 3000 in use", fix: "Next.js auto-switches to 3001; ensure no conflicts" },
  { issue: "Multiple lockfiles detected", fix: "Delete nested or redundant package-lock.json/yarn.lock files" },
  { issue: "Gmail App Password confusion", fix: "Use Resend or clarify app password flow for Gmail" },
  { issue: "Form POST 500 error", fix: "Ensure fields match expected keys in backend/API handler" },
  { issue: "Slow file operations", fix: "Avoid network drives; run project locally" },
  { issue: "Missing anchor targets for smooth scroll", fix: "Match all <a href='#'> with actual id="" sections" }
];

// 🧩 STRUCTURAL CONVENTIONS
const sections = [
  "Header (transparent, sticky, or solid - user selects)",
  "Hero (video, bento, minimal text, image - based on style)",
  "Features / Services (icon grid, animations optional)",
  "Portfolio / Gallery (hover scroll, masonry, carousel, filterable)",
  "Testimonials (cards, quote effects, avatars, video clips)",
  "About (team bios, company values, timeline, visuals)",
  "Pricing / Plans (comparison tables or toggle UI)",
  "Contact Form (basic, advanced with calendar, or integrated booking)",
  "Blog or Content Feed (optional)",
  "Footer (always present, animated links optional)"
];

// ✨ LAYOUT OPTIONS
const layouts = [
  "Bento Grid",
  "Masonry",
  "Z-pattern",
  "Split-screen",
  "Scrollytelling",
  "Card Stack",
  "Horizontal Scroll",
  "Editorial/Magazine",
  "Canvas/WebGL Canvas"
];

// 🎨 DESIGN SYSTEM PROMPTS
const prompts = [
  "🔹 What visual style & tone should this project express? (e.g., minimalist, luxury, spooky, cyberpunk)",
  "🔹 Which layout style fits your brand best? (choose from layout options above)",
  "🔹 Preferred color palette or mood board inspiration?",
  "🔹 Typography preference: serif, sans, brutalist, cinematic, playful, editorial?",
  "🔹 Animation level: None, Minimal, Medium, Cinematic?",
  "🔹 Scroll behavior: Normal, Parallax, Scroll-triggered reveals, Canvas effects?",
  "🔹 Dark mode, light mode, or both?",
  "🔹 Target audience or industry?",
  "🔹 Any must-have components or interaction expectations?"
];

// 🧪 DEPLOYMENT & DEV TIPS
const deploymentTips = [
  "Use small commits to isolate changes",
  "Watch console + Vercel logs for dynamic routes or contact errors",
  "Use vercel.json for custom routing or rewrites",
  "Ensure favicon/meta image uses updated path & clears cache",
  "Store env variables in both .env.local and Vercel dashboard",
  "Test in incognito to avoid local storage conflicts",
  "Use Tailwind plugins or clamp() for fluid responsive text",
  "Set scroll-behavior: smooth for anchor transitions"
];

// ✅ UNIVERSAL LESSONS LEARNED
const keyLearnings = {
  projectSetup: "Standardizing folder layout saves 10+ hrs per project",
  typescript: "Strong typing prevents common animation + layout bugs",
  design: "Consistent use of spacing, z-index, and clamp() delivers predictable results",
  animation: "Use motion.div + custom variants to create reusable effects",
  email: "Resend offers easiest onboarding for transactional emails vs Gmail SMTP",
  scrollUX: "Scroll mismatches break UX — test anchor linking across pages",
  CMSintegration: "Dynamic rendering needs shape validation to avoid hydration errors"
};
]

## OTHER CONSIDERATIONS:

[Common Issues
    AESM vs CommonJS conflicts
→ Forgot export default in tailwind.config.js led to build errors.

Incorrect component boundaries
→ React hooks in server components without "use client" threw runtime errors.

Favicon not updating
→ Cursor/Vercel cached old favicon.ico even after replacement.

Form field mismatch
→ Frontend fields didn’t align with backend expectations — caused silent 500s.

Unused imports or types
→ Cursor sometimes left unused variables after regen, causing TypeScript errors.

Port conflicts not reported clearly
→ Auto-switched from 3000 to 3001 without clear logging — caused confusion.

Resend setup not fully scaffolded
→ Cursor didn’t prompt for fallback domain or clarify Gmail app password flow.

Scroll behavior issues
→ Anchor links sometimes missed IDs or scroll-behavior: smooth wasn’t set globally.

InView animations glitching
→ Cursor used useInView without debounce or margin adjustments — caused disappearing elements.

Cookie modals overlapping content
→ No layout shift planning — modals overlapped CTAs/content on mobile.
Multiple package-lock.json files
→ Nested lockfiles caused dependency resolution issues and random build failures.

Wrong splash screen logic
→ Cursor would render splash animations without gating main content — led to flash-of-unstyled-content (FOUC).

Globals.css misplacement
→ Cursor sometimes injected Tailwind directives into the wrong file or duplicated them.

Static asset path errors
→ Cursor misreferenced image paths like /images/hero.png instead of /public/images/hero.png.

No vercel.json suggestion
→ Never prompted to include vercel.json for rewrites or edge functions — broke routing in some cases.

Client-side only utilities in shared modules
→ Code with window, localStorage, or document got copied into shared utils → broke SSR.

Animation overkill by default
→ Cursor overused Framer Motion for everything — bloated bundle size and caused layout jitter.

Scroll-triggered animations without cleanup
→ useEffect or scroll listeners leaked without teardown — caused memory spikes on long pages.

Z-index stacking issues
→ Cursor stacked elements without z-index planning → modals hidden behind navs or hero overlays.

Meta tags missing or incomplete
→ Didn’t auto-generate og:image, og:title, or twitter:card — led to poor link previews.
]
