# Vulla Kalyan - Premium Portfolio

A premium, futuristic, cyberpunk-glassmorphism portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Premium Design**: Cyberpunk aesthetics, glassmorphism, neon glows, and custom typography.
- ✨ **Interactive Animations**: Framer Motion scroll reveals, GSAP timelines, Lenis smooth scrolling, and tsParticles background.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing.
- ♿ **Accessible**: WCAG 2.2 AA compliant with reduced motion support, ARIA labels, and keyboard navigation.
- 🚀 **Performance**: Lazy loading, optimized assets, and clean architecture.
- 📧 **Working Contact Form**: Integrated with EmailJS.
- 🔍 **SEO Ready**: JSON-LD structured data, meta tags, Open Graph, Twitter cards, sitemap, and robots.txt.

## Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion, GSAP ScrollTrigger
- **Additional**: `@tsparticles/react`, `typed.js`, `@studio-freight/lenis`, `@emailjs/browser`

## Setup & Local Development

1. **Clone & Install**
   ```bash
   git clone <your-repo-url>
   cd "kalyan portfolio"
   npm install
   ```

2. **Add Assets**
   - Place your profile photo at: `src/assets/images/profile.jpg`
   - Place your resume PDF at: `public/resume.pdf`

3. **Configure EmailJS**
   - Copy `.env.example` to `.env`
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Add your Service ID, Template ID, and Public Key to the `.env` file:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Customization

- **Colors & Theme**: Edit `tailwind.config.js` and `src/styles/index.css`.
- **Content**: All text, links, and data are stored in `src/data/`.
  - `personalInfo.js`: Name, bio, social links, typing animation strings.
  - `skills.js`: Technical skills and categories.
  - `projects.js`: Featured projects data.
  - `education.js`: Academic history.
  - `certifications.js`: Certificates and credentials.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub.
2. Go to Vercel dashboard and import your repository.
3. Add the `VITE_EMAILJS_*` environment variables in the Vercel project settings.
4. Click Deploy.

### Netlify
1. Push your code to GitHub.
2. Go to Netlify dashboard and import your repository.
3. Add the environment variables under Site settings > Environment variables.
4. Click Deploy.

## License
MIT License
