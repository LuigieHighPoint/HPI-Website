# High Point Investments LLC — Next.js Website

Live site: [highpointinvest.com](https://highpointinvest.com)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended — Free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign up free
3. Click "Add New Project" → import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Add your custom domain `highpointinvest.com` in Vercel's domain settings

## Connect Formspree (Form → Email)

1. Go to [formspree.io](https://formspree.io) and sign up free
2. Create a new form with email: `luigie@highpointinvest.com`
3. Copy your Form ID (e.g. `xpwzabcd`)
4. In `components/Hero.js`, replace `YOUR_FORM_ID` with your actual ID:
   ```js
   const res = await fetch('https://formspree.io/f/xpwzabcd', {
   ```

## Project Structure

```
highpointinvest/
├── pages/
│   ├── _app.js          # App wrapper with global styles + language provider
│   ├── _document.js     # HTML head, meta tags, fonts
│   └── index.js         # Main page
├── components/
│   ├── LangContext.js   # EN/ES language state (React Context)
│   ├── Navbar.js        # Top nav + language toggle
│   ├── Hero.js          # Hero section + lead capture form
│   ├── HowItWorks.js    # 4-step process
│   ├── Compare.js       # Comparison table
│   ├── Benefits.js      # 6 benefit cards
│   ├── Meet.js          # Luigie bio section
│   ├── Testimonials.js  # 3 testimonial cards
│   ├── FAQ.js           # FAQ cards
│   ├── Areas.js         # Service area tags
│   └── CTAFooter.js     # CTA banner + footer
├── styles/
│   └── globals.css      # All styles
├── public/
│   ├── logo-white.png   # White HPI logo (nav + footer)
│   ├── logo.png         # Color HPI logo (favicon)
│   └── luigie.jpeg      # Luigie's photo
├── translations.js      # All EN + ES text content
├── package.json
└── next.config.js
```
