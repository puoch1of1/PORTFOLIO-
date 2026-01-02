# GitHub Pages Deployment Setup

Your portfolio is now configured for automatic deployment to GitHub Pages!

## ✅ What's Been Done

1. ✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
2. ✅ Vite configuration updated for GitHub Pages
3. ✅ CNAME file will be automatically copied to dist folder
4. ✅ Build process configured

## 🚀 Enable GitHub Pages (One-Time Setup)

Follow these steps to enable GitHub Pages:

### Step 1: Go to Repository Settings

1. Go to your GitHub repository: https://github.com/puoch1of1/PORTFOLIO-
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar

### Step 2: Configure GitHub Pages

1. Under **Source**, select **GitHub Actions**
2. Save the settings

### Step 3: Wait for First Deployment

1. The GitHub Actions workflow will automatically run
2. You can check the progress in the **Actions** tab
3. Once complete, your site will be live at:
   - **Custom Domain**: https://puochmabormakuei.com (if DNS is configured)
   - **GitHub Pages URL**: https://puoch1of1.github.io/PORTFOLIO-/

## 🔄 Automatic Deployment

Every time you push to the `main` branch:
1. GitHub Actions automatically builds your site
2. Deploys it to GitHub Pages
3. Your site updates within 1-2 minutes

## 📝 Custom Domain Setup

Since you have a `CNAME` file with `puochmabormakuei.com`:

1. In GitHub Pages settings, add your custom domain: `puochmabormakuei.com`
2. Configure your DNS:
   - Add a CNAME record pointing to: `puoch1of1.github.io`
   - Or add A records for GitHub Pages IPs (if using apex domain)

## 🐛 Troubleshooting

### Build Fails
- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes

### Site Not Updating
- Wait 1-2 minutes after pushing
- Check Actions tab to see if deployment completed
- Clear browser cache

### Custom Domain Not Working
- Verify DNS settings are correct
- Wait up to 24 hours for DNS propagation
- Check GitHub Pages settings show your domain

## 📊 Monitor Deployments

- View deployment status: Repository → **Actions** tab
- View site: Your custom domain or GitHub Pages URL
- Check build logs: Click on any workflow run in Actions

## ✨ Next Steps

1. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
2. Wait for first deployment to complete
3. Visit your live site!
4. Test the contact form

Your portfolio will automatically update every time you push changes to GitHub!

