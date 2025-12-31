# Formspree Setup Guide

Your contact form is now integrated with Formspree. Follow these steps to make it work:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" (you can use your Gmail account)
3. Verify your email address

## Step 2: Create a New Form

1. After logging in, click "New Form"
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Set the email address where you want to receive messages (your Gmail: `lomaspuoch502@gmail.com`)
4. Click "Create Form"

## Step 3: Get Your Form ID

1. After creating the form, you'll see a form endpoint URL like:
   ```
   https://formspree.io/f/xpzgkqyz
   ```
2. Copy the form ID (the part after `/f/`), for example: `xpzgkqyz`

## Step 4: Update Your Code

1. Open `src/data/content.ts`
2. Find the line:
   ```typescript
   export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```typescript
   export const formspreeEndpoint = "https://formspree.io/f/xpzgkqyz";
   ```

## Step 5: Test the Form

1. Save the file and rebuild your site
2. Visit your portfolio website
3. Fill out the contact form
4. Submit it
5. Check your Gmail inbox - you should receive the message!

## Free Tier Limits

Formspree's free tier includes:
- 50 submissions per month
- Email notifications
- Spam protection
- Basic customization

This is perfect for a portfolio website!

## Troubleshooting

- **Form not sending?** Make sure you've replaced `YOUR_FORM_ID` with your actual form ID
- **Not receiving emails?** Check your spam folder and verify your email in Formspree settings
- **Getting errors?** Check the browser console for error messages

## Need Help?

Visit [Formspree Documentation](https://help.formspree.io/) for more information.

