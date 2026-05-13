# ClubServe - Marketing Website

A modern, responsive, and SEO-friendly marketing website for ClubServe, built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Redis** caching integration
- **Formstack API** for form submissions
- **SEO optimized** with meta tags, sitemap, robots.txt
- **Responsive design** for all devices
- **Performance optimized** with lazy loading and code splitting

## Tech Stack

- Framework: Next.js 16
- Language: TypeScript
- Styling: TailwindCSS
- Caching: Redis (ioredis)
- Forms: Formstack API
- Fonts: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Redis server (for caching)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create `.env.local` file:

   ```env
   REDIS_URL=redis://localhost:6379
   FORMSTACK_API_URL=https://www.formstack.com/api/v2
   FORMSTACK_ACCESS_TOKEN=your_formstack_access_token
   FORMSTACK_FORM_ID=your_form_id
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── api/
│   └── submit-form/          # Form submission API
├── components/               # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── SportsMarquee.tsx
│   └── Footer.tsx
├── globals.css               # Global styles
├── layout.tsx                # Root layout
├── page.tsx                  # Home page
├── robots.ts                 # Robots.txt
└── sitemap.ts                # Sitemap
lib/
├── redis.ts                  # Redis client
└── formstack.ts              # Formstack API client
public/                       # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## SEO Features

- Server-side rendering
- Semantic HTML
- Meta tags and Open Graph
- Sitemap and robots.txt
- Optimized images with Next.js Image

## Performance

- Redis caching for API responses
- Lazy loading of images
- Code splitting
- Optimized fonts and assets

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting platform.

For Vercel:

```bash
npm install -g vercel
vercel
```

## Environment Variables

| Variable               | Description            | Required |
| ---------------------- | ---------------------- | -------- |
| REDIS_URL              | Redis connection URL   | Yes      |
| FORMSTACK_API_URL      | Formstack API base URL | Yes      |
| FORMSTACK_ACCESS_TOKEN | Formstack access token | Yes      |
| FORMSTACK_FORM_ID      | Formstack form ID      | Yes      |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

© 2026 ClubServe, a service provided by Oqulo. All rights reserved.
