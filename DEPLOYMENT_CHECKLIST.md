# Cloudflare Pages Deployment Checklist

## Pre-Deployment Setup

### 1. Local Configuration

- [ ] Run `npm install` to install all dependencies including Wrangler
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in your Formstack credentials:
  - [ ] `FORMSTACK_API_URL` (usually `https://www.formstack.com/api/v2`)
  - [ ] `FORMSTACK_ACCESS_TOKEN` (get from Formstack account settings)
  - [ ] `FORMSTACK_FORM_ID` (from your Formstack form)
- [ ] Run `npm run build` to verify static export works
- [ ] Check that `out/` directory is created with all static files

### 2. Cloudflare Account Setup

- [ ] Create Cloudflare account at https://dash.cloudflare.com
- [ ] Update `wrangler.toml` with your Cloudflare account ID
  - Find in Cloudflare dashboard → Workers & Pages
- [ ] Connect your domain or use `.workers.dev` subdomain
- [ ] Note down your Cloudflare API token for authentication

### 3. Formstack Configuration

- [ ] Verify Formstack form ID in `wrangler.toml`
- [ ] Test form submission locally with `npm run dev`
- [ ] Verify field IDs match those in `functions/submit-form.ts`

### 4. Repository Setup

- [ ] Commit all changes to Git
- [ ] Push to GitHub/GitLab/Bitbucket
- [ ] Repository should be public or with appropriate access

## Deployment Steps

### Method 1: Via Cloudflare Dashboard (Recommended for Beginners)

1. **Connect Repository**
   - [ ] Go to https://dash.cloudflare.com/
   - [ ] Click Workers & Pages → Pages → Connect to Git
   - [ ] Authorize with your Git provider
   - [ ] Select the `clubserve` repository

2. **Configure Build Settings**
   - [ ] Set production branch: `main` (or your default branch)
   - [ ] Build command: `npm run build`
   - [ ] Build output directory: `out`
   - [ ] Node.js version: `20.x` (or latest LTS)

3. **Set Environment Variables**
   - [ ] Click Settings → Environment variables
   - [ ] Add for Production:
     - `FORMSTACK_API_URL` = `https://www.formstack.com/api/v2`
     - `FORMSTACK_ACCESS_TOKEN` = your token
     - `FORMSTACK_FORM_ID` = your form ID
   - [ ] Save and deploy

4. **Test Deployment**
   - [ ] Wait for build to complete (shows ✅)
   - [ ] Click on the generated URL to view your site
   - [ ] Test form submission with a test entry
   - [ ] Verify Formstack received the submission

### Method 2: Via Wrangler CLI (For Advanced Users)

```bash
# Install Wrangler globally (optional)
npm install -g wrangler

# Authenticate with Cloudflare
wrangler auth

# Update wrangler.toml with your account ID and domain

# Deploy
npm run deploy

# For production
npm run deploy:prod
```

## Post-Deployment Verification

- [ ] Site loads at your Cloudflare Pages URL
- [ ] All images load correctly
- [ ] Navigation and pages work
- [ ] Form submission works:
  - [ ] Fill form and submit
  - [ ] No console errors
  - [ ] Success message appears
  - [ ] Entry appears in Formstack dashboard
- [ ] Mobile responsive design works
- [ ] Performance: Check Lighthouse score

## Troubleshooting

### Build Fails

**Error: "Cannot export pages"**

- Check for dynamic routes or `unstable_noStore()`
- Ensure no server-side data fetching outside components
- Run `npm run build` locally to see full error

### Form Not Submitting

**Error in browser console**

- Check network tab: POST request to `/api/submit-form`
- Verify Formstack credentials in Cloudflare dashboard
- Check Worker logs: Cloudflare dashboard → Workers & Pages

### Images Not Loading

- Verify images are in `public/` directory
- Check image paths in components (should be relative)
- Formstack integration uses already-tested paths

### Deploy to Specific Domain

- [ ] Add your domain to Cloudflare account
- [ ] In Pages settings, add custom domain
- [ ] Update DNS records if needed (Cloudflare guides automatically)

## Maintenance

- [ ] Monitor Formstack submissions regularly
- [ ] Keep Next.js and dependencies updated
- [ ] Review Cloudflare Analytics for traffic
- [ ] Set up email notifications for deployment failures
- [ ] Backup Formstack data periodically

## Support Resources

- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Formstack API: https://developers.formstack.com/
- Wrangler CLI: https://developers.cloudflare.com/workers/wrangler/

---

**Questions?** Check `CLOUDFLARE_DEPLOYMENT.md` for detailed documentation.
