# Connection.cv - Premium Domain Landing Page

A production-ready, conversion-optimized landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS v3.4+ for selling the premium domain **Connection.cv**.

## 🚀 Features

- **Next.js 15** with App Router and React 19 Server Components
- **TypeScript 5.x** for type safety
- **Tailwind CSS v3.4+** for responsive, premium design
- **Framer Motion** for smooth animations
- **Fully Responsive** - Flawless on all devices (iPhone SE to 4K)
- **Fluid Typography** - Auto-scaling text with `clamp()` and responsive utilities
- **SEO Optimized** - Dynamic meta tags, OG tags, structured data (JSON-LD)
- **Accessibility** - WCAG AA compliant
- **Performance** - Optimized for Lighthouse ≥95
- **Dark Mode** - Auto-detection and manual toggle support
- **Contact Form** - Server action with API route
- **Sticky CTA** - WhatsApp button that appears on scroll

## 📁 Project Structure

```
connection-cv-landing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   ├── not-found.tsx             # 404 page
│   └── sitemap.ts                # Dynamic sitemap
├── components/
│   ├── Hero.tsx                  # Hero section with fluid typography
│   ├── ValueProposition.tsx      # Value proposition section
│   ├── MarketProof.tsx           # "As Seen On" section
│   ├── DataValidation.tsx        # Market data & comparable sales
│   ├── Provenance.tsx            # Domain history/story
│   ├── UseCases.tsx              # Strategic use cases table
│   ├── TrustProcess.tsx          # Escrow & transaction process
│   ├── FAQ.tsx                   # Frequently asked questions
│   ├── ContactForm.tsx           # Contact form component
│   ├── SocialShare.tsx           # Social sharing buttons
│   ├── Footer.tsx                # Footer with GDPR note
│   └── StickyCTA.tsx             # Sticky WhatsApp button
├── lib/
│   └── utils.ts                  # Domain info utilities
├── public/
│   ├── manifest.json             # PWA manifest
│   └── robots.txt                # SEO robots file
├── .env.example                  # Environment variables template
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd connection-cv-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and update:
   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_DOMAIN_NAME=Connection.cv
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_BASE_URL` = Your production URL (e.g., `https://connection.cv`)
     - `NEXT_PUBLIC_DOMAIN_NAME` = `Connection.cv`
   - Click "Deploy"

3. **Configure Custom Domain** (if applicable)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

## 🎨 Customization

### Change Domain Name

1. Update `.env.local`:
   ```env
   NEXT_PUBLIC_DOMAIN_NAME=YourDomain.com
   ```

2. The page will automatically adapt:
   - Industry inference
   - Tone and messaging
   - Keywords and content
   - All sections

### Modify Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  premium: {
    gold: "#D4AF37",    // Your gold color
    navy: "#1a237e",    // Your navy color
    // ... other colors
  },
}
```

### Update Contact Links

- **WhatsApp**: Update link in `components/Hero.tsx` and `components/StickyCTA.tsx`
- **Email**: Update `mailto:` links throughout components

### Add Email Service

Update `app/api/contact/route.ts` to integrate with:
- Resend
- SendGrid
- AWS SES
- Or any email service provider

Example with Resend:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'imrulo.eth@proton.me',
  subject: `New inquiry for ${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
  html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
});
```

## 📊 Performance

- **Lighthouse Score**: ≥95 (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: <2s
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component with Unsplash/Pexels

## 🔒 Privacy & GDPR

- **No tracking cookies**
- **No analytics** (except Vercel Analytics, which is privacy-friendly)
- **No third-party scripts**
- **Contact form data** handled securely via server action

## 📱 Responsive Design

The page is fully responsive and tested on:
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- iPad (768px)
- Desktop (1920px+)
- 4K displays (3840px+)

**Fluid Typography Rules:**
- Headlines: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Max width: `max-w-[90%] sm:max-w-[80%] md:max-w-[75%]`
- Padding: `px-4 sm:px-6 md:px-8`
- Text wrapping: `break-words` and `overflow-wrap: anywhere`

## 🎯 Conversion Optimization

- **Clear value proposition**
- **Social proof** (market data, comparable sales)
- **Trust signals** (Escrow.com, secure process)
- **Multiple CTAs** (WhatsApp, Email, Contact Form)
- **Sticky CTA** on scroll
- **Scarcity messaging** ("High-interest asset")
- **FAQ section** addressing common objections

## 📝 License

All rights reserved. This is a private project for domain sale purposes.

## 👨‍💻 Developer

Made with ❤️ by **imrulo.eth**

Contact: imrulo.eth@proton.me

---

**Disclaimer**: This is a domain landing page for sale purposes only. No active services are implied.

