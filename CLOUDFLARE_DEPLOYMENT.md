# Cloudflare Pages Deployment Setup

This codebase is configured as a **static Next.js site** for deployment on **Cloudflare Pages**. Form submissions are handled via Cloudflare Workers.

## Configuration Files

- **next.config.ts** - Configured with `output: "export"` for static export
- **wrangler.toml** - Cloudflare Workers configuration for form handling
- **functions/submit-form.ts** - Cloudflare Worker function that proxies form submissions to Formstack

## Prerequisites

1. **Cloudflare Account** - Sign up at [cloudflare.com](https://cloudflare.com)
2. **Formstack Account** - For form management at [formstack.com](https://formstack.com)
3. **Wrangler CLI** - Already added to package.json devDependencies

## Environment Variables

Create a `.env.local` file for local development:

```env
FORMSTACK_API_URL=https://www.formstack.com/api/v2
FORMSTACK_ACCESS_TOKEN=your_formstack_access_token
FORMSTACK_FORM_ID=your_formstack_form_id
```

For production deployment, set these in your Cloudflare dashboard:

- Go to Workers & Pages → Settings → Environment variables
- Add the same environment variables above

## Build & Deploy

### Local Development

```bash
npm install
npm run dev
```

### Build Static Site

```bash
npm run build
```

This generates the static site in the `out/` directory.

### Deploy to Cloudflare Pages

#### Option 1: Direct Deployment (Recommended)

1. Connect your Git repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `out`
4. Deploy

#### Option 2: Manual Deployment with Wrangler

```bash
npm install -g wrangler
wrangler auth

# Deploy Worker function and static site
npm run deploy
```

For production:

```bash
npm run deploy:prod
```

## Key Features

✅ **Static Export** - Fast, cached globally by Cloudflare  
✅ **Form Handling** - Cloudflare Worker proxies submissions to Formstack  
✅ **CORS Support** - Worker handles cross-origin requests  
✅ **Environment Management** - Separate dev and production configurations  
✅ **No Cold Starts** - Static assets serve instantly

## Local Development Notes

- The API route at `app/api/submit-form/route.ts` works in development mode
- When deployed to Cloudflare Pages, the static export won't include API routes
- The Cloudflare Worker (`functions/submit-form.ts`) handles API requests in production

## Troubleshooting

**Build fails with "output: export"?**

- Ensure no dynamic routes or server-side data fetching
- Check for `unstable_noStore()` or ISR (Incremental Static Regeneration)

**Form submissions not working?**

- Verify Formstack credentials in environment variables
- Check browser console for CORS errors
- Inspect Cloudflare Worker logs in dashboard

**Images not loading?**

- next.config.ts has `unoptimized: true` for static export
- Ensure images are in public folder
- Use relative paths or absolute URLs

## File Structure

```
├── app/
│   ├── api/              # API routes (local dev only)
│   ├── components/       # React components
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── scss/             # Stylesheets
├── functions/
│   └── submit-form.ts    # Cloudflare Worker
├── lib/
│   └── formstack.ts      # Formstack API integration
├── public/               # Static assets
├── next.config.ts        # Next.js config (export mode)
├── tsconfig.json         # TypeScript config
└── wrangler.toml         # Cloudflare Workers config
```

## Next Steps

1. Update `wrangler.toml` with your Cloudflare account ID
2. Set environment variables in `.env.local` and Cloudflare dashboard
3. Run `npm install` to add Wrangler CLI
4. Deploy to Cloudflare Pages following Option 1 or 2 above
