# ClubServe - Marketing Website

A modern, responsive, and SEO-friendly marketing website for ClubServe, built with Next.js, TypeScript, and TailwindCSS. Features a lead capture modal with international phone number input and Formstack API integration.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **TailwindCSS v4** for styling with custom container max-width
- **SCSS** for component-specific styling
- **Formstack API** for secure form submissions
- **International Phone Input** with intl-tel-input library (Philippines default)
- **Modal Lead Form** with body scroll lock and marquee pause
- **SEO optimized** with meta tags, sitemap, robots.txt
- **Responsive design** for all devices
- **Performance optimized** with lazy loading and code splitting

## Tech Stack

- Framework: Next.js 16
- Language: TypeScript
- Styling: TailwindCSS v4 + SCSS
- Forms: Formstack API v2
- Phone Input: intl-tel-input
- Fonts: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create `.env.local` file:

   ```env
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
│   └── submit-form/          # Form submission API with rate limiting
├── components/               # Reusable UI components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx              # Hero section with CTA button
│   ├── LeadForm.tsx          # Modal lead form with intl-tel-input
│   ├── Modal.tsx             # Reusable modal component
│   └── SportsMarquee.tsx     # Animated sports marquee
├── globals.scss              # Global SCSS with Tailwind imports
├── layout.tsx                # Root layout
├── page.tsx                  # Home page with modal state management
├── robots.ts                 # Robots.txt
├── sitemap.ts                # Sitemap
└── scss/
    ├── _index.scss
    ├── base/
    │   └── _base.scss
    ├── components/
    │   ├── _footer.scss
    │   ├── _header.scss
    │   ├── _hero.scss
    │   ├── _lead-form.scss    # Lead form styling
    │   ├── _layout.scss
    │   └── _sports-marquee.scss
    └── layout/
        └── _index.scss
lib/
├── formstack.ts              # Optimized Formstack API client
public/
├── intlTelInputUtils.js      # intl-tel-input utils script
└── ...                       # Other static assets
```

## Key Components

### Lead Form Modal

- Triggered from Hero CTA button
- International phone input with Philippines as default country
- Form validation and submission to Formstack API
- Rate limited to prevent spam (60-second cooldown)
- Pauses sports marquee and locks body scroll when open

### Formstack Integration

- Secure API submission using Formstack v2 API
- Field ID-based payload for accurate data mapping
- Error handling and logging
- Optimized with FormData for efficient appending

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

- Lazy loading of images
- Code splitting
- Optimized form submission with rate limiting
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
