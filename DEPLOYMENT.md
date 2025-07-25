# Deployment Guide

## GitHub Setup

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `covenant-capital-agency`
   - Description: "Modern landing page for Covenant Capital Consulting - Intelligent Business Automation"
   - Set to Public
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/covenant-capital-agency.git
   git branch -M main
   git push -u origin main
   ```

## Vercel Deployment

### Option 1: Deploy with Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. **Connect to Vercel:**
   - Go to https://vercel.com
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your `covenant-capital-agency` repository

2. **Configure deployment:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Environment Variables (if needed):**
   - None required for this project

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at: `https://covenant-capital-agency.vercel.app`

## Custom Domain (Optional)

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Continuous Deployment

Once connected, every push to the `main` branch will automatically deploy to Vercel.

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000