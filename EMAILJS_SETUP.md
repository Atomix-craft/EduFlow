# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email functionality in your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Institution: {{institution}}
Role: {{role}}

Message:
{{message}}

---
This message was sent from your CampusHub contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID** (starts with `template_`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (long string of characters)
3. Copy this key

## Step 5: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder values:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## Step 6: Test the Setup

1. Start your development server:
   ```bash
   bun dev
   ```

2. Go to your contact page and fill out the form
3. Submit the form to test if emails are being sent
4. Check your email inbox for the contact form submission

## Troubleshooting

### Common Issues:

1. **"Invalid service ID" error**: Double-check your service ID in the environment variables
2. **"Template not found" error**: Verify your template ID is correct
3. **"Invalid public key" error**: Make sure your public key is copied correctly
4. **Emails not being sent**: Check your email service provider settings in EmailJS

### Free Plan Limits:

- EmailJS free plan allows 200 emails per month
- Perfect for small to medium websites
- Consider upgrading if you need more emails

## Security Notes

- Never commit your `.env.local` file to version control
- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely on their servers

## Support

If you encounter any issues:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Verify your environment variables are set correctly
3. Test with a simple email first before using the full contact form
