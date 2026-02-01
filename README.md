# 🚀 Portfolio

A modern, customizable portfolio template built with **Next.js 15**, **React 19**, and **TypeScript**. Features a sleek design with smooth animations, dark mode support, and easy customization through configuration files.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)

## ✨ Features

### 🎨 Design & UX

- **Smooth Animations**: Powered by Lenis for buttery smooth scrolling
- **Dark Mode**: Built-in theme switching with `next-themes`
- **Responsive Design**: Fully responsive across all devices
- **Font Size Controls**: Accessibility-first with adjustable font sizes
- **Modern UI**: Using shadcn/ui components and Radix UI primitives

### 📝 Content Management

- **MDX-Powered Blog**: Write blog posts in MDX with full React component support
- **Project Showcase**: Dedicated project pages with detailed case studies
- **Work Experience**: Display your professional journey
- **Dynamic Content**: Powered by `@content-collections` for type-safe content

### 🛠️ Developer Experience

- **TypeScript**: Fully typed for better DX and fewer bugs
- **Configuration-Driven**: Easy customization through config files
- **Component-Based**: Modular and reusable components
- **Linting & Formatting**: ESLint and Prettier configured out of the box

### 🚀 Performance & Analytics

- **PostHog Integration**: Track user behavior and analytics
- **Rate Limiting**: Built-in rate limiting with Upstash Redis
- **Image Optimization**: Automatic image optimization with Next.js
- **Fast Builds**: Optimized build process with Turbopack support

### 💬 Interactive Features

- **Contact Form**: Discord webhook integration for messages
- **AI Chat**: Gemini AI-powered chat assistant
- **GitHub Activity**: Display your GitHub contribution calendar
- **Cal.com Integration**: Embedded booking calendar

## 📦 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **TypeScript**: Type-safe development
- **Content**: [Content Collections](https://www.content-collections.dev/) for MDX
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Analytics**: [PostHog](https://posthog.com/)
- **Database**: [Upstash Redis](https://upstash.com/)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Lenis smooth scrolling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abdullah-dev0/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using bun
   bun install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # PostHog Analytics (optional)
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

   # Lanyard API (for Discord presence - optional)
   LANYARD_USER_ID=your_discord_user_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization Guide

This portfolio is designed to be easily customizable through configuration files. No need to dig through component code!

### 1. Personal Information & Hero Section

Edit `src/config/Hero.tsx`:

```typescript
export const heroConfig = {
  name: 'Your Name',
  title: 'Your Title',
  avatar: '/assets/your-avatar.png',

  skills: [
    {
      name: 'Your Skill',
      href: 'https://skill-website.com',
      component: 'SkillComponent',
    },
    // Add more skills
  ],

  description: {
    template: 'Your custom description with {skills:0}, {skills:1}...',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Button Text',
      href: '/path',
      icon: 'IconName',
    },
  ],
};

export const socialLinks = [
  {
    name: 'Platform',
    href: 'https://your-profile-url',
    icon: <YourIcon />,
  },
  // Add more social links
];
```

### 2. About Section

Edit `src/config/About.tsx`:

```typescript
export const about = {
  name: 'Your Name',
  description: `Your bio and introduction...`,
};

export const mySkills = [
  <TechnologyIcon key="tech" />,
  // Add your technology icons
];
```

### 3. Work Experience

Edit `src/config/Experience.tsx`:

```typescript
export const experiences: Experience[] = [
  {
    company: 'Company Name',
    position: 'Your Position',
    location: 'Location',
    image: '/company/logo.png',
    description: [
      'Achievement 1',
      'Achievement 2',
    ],
    startDate: 'Month Year',
    endDate: 'Month Year',
    isCurrent: false,
    technologies: [
      {
        name: 'Tech Name',
        href: 'https://tech-url.com',
        icon: <TechIcon />,
      },
    ],
    website: 'https://company-website.com',
  },
];
```

### 4. Projects

Add your projects as MDX files in `content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
image: "/project/image.png"
link: "https://project-url.com"
technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
github: "https://github.com/username/repo"
live: "https://live-url.com"
timeline: "2024"
role: "Your Role"
status: "completed"
featured: true
isPublished: true
isWorking: true
---

# Project Title

Your project content in MDX...
```

### 5. Blog Posts

Add blog posts as MDX files in `content/blogs/`:

```mdx
---
title: "Blog Post Title"
description: "Post description"
image: "/blog/cover.png"
tags: ["React", "TypeScript", "Tutorial"]
date: "2024-01-01"
isPublished: true
---

# Your Blog Content

Write your blog post content here...
```

### 6. Gears/Setup

Edit `src/config/Gears.tsx`:

```typescript
export const devices = [
  {
    name: 'Device Name',
    icon: <Icon className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Extension Name', href: 'url' },
];

export const software = [
  { name: 'Software Name', href: 'url' },
];
```

### 7. Contact Form

Edit `src/config/Contact.tsx`:

```typescript
export const contactConfig = {
  title: "Contact",
  description: "Your contact page description",
  form: {
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "your.email@example.com",
      message: "Tell me about your project...",
    },
    submitButton: "Send Message",
    successMessage: "Thanks! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
};
```

### 8. SEO & Metadata

Edit `src/config/Meta.tsx`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Portfolio",
  description: "Your description",
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  ogImage: "/meta/opengraph-image.png",
  author: {
    name: "Your Name",
    twitter: "@yourusername",
    github: "yourusername",
    linkedin: "yourusername",
    email: "your.email@example.com",
  },
  keywords: ["portfolio", "developer", "your keywords"],
};
```

### 9. Resume

Update `src/config/Resume.ts` to point to your resume PDF:

```typescript
export const resumeUrl = "/path/to/your-resume.pdf";
```

## 🖼️ Adding Assets

### Images

Place your images in the `public` directory:

- `/public/assets/` - Personal assets (avatar, logos)
- `/public/company/` - Company logos
- `/public/project/` - Project images
- `/public/blog/` - Blog cover images
- `/public/meta/` - OG images for SEO

### Technology Icons

Add custom technology icons in `src/components/technologies/`. Follow the existing pattern:

```typescript
const YourTech = () => {
  return (
    <svg>
      {/* Your SVG icon */}
    </svg>
  );
};

export default YourTech;
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This is a standard Next.js app and can be deployed to:

- Netlify
- Railway
- AWS Amplify
- Any platform supporting Node.js

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🔧 Environment Variables

| Variable                   | Required | Description                             |
| -------------------------- | -------- | --------------------------------------- |
| `NEXT_PUBLIC_URL`          | ✅       | Your site URL                           |
| `DISCORD_WEBHOOK_URL`      | ✅       | Discord webhook for contact form        |
| `GEMINI_API_KEY`           | ✅       | Google Gemini API key for AI chat       |
| `KV_REST_API_URL`          | ✅       | Upstash Redis URL for rate limiting     |
| `KV_REST_API_TOKEN`        | ✅       | Upstash Redis token                     |
| `NEXT_PUBLIC_POSTHOG_KEY`  | ❌       | PostHog analytics key (optional)        |
| `NEXT_PUBLIC_POSTHOG_HOST` | ❌       | PostHog host URL (optional)             |
| `LANYARD_USER_ID`          | ❌       | Discord user ID for presence (optional) |

### Getting API Keys

- **Discord Webhook**: [Create a webhook in your Discord server](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
- **Gemini API**: [Get API key from Google AI Studio](https://makersuite.google.com/app/apikey)
- **Upstash Redis**: [Create free database at Upstash](https://upstash.com/)
- **PostHog**: [Sign up for free at PostHog](https://posthog.com/)

## 📂 Project Structure

```
portfolio/
├── content/                 # Content files
│   ├── blogs/              # Blog posts (MDX)
│   └── projects/           # Project case studies (MDX)
├── public/                 # Static assets
│   ├── assets/            # General assets
│   ├── company/           # Company logos
│   ├── project/           # Project images
│   └── meta/              # OG images
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── api/          # API routes
│   │   ├── blog/         # Blog pages
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Project pages
│   │   └── ...
│   ├── components/        # React components
│   │   ├── blog/         # Blog components
│   │   ├── common/       # Shared components
│   │   ├── landing/      # Landing page sections
│   │   ├── projects/     # Project components
│   │   └── technologies/ # Tech icons
│   ├── config/           # Configuration files ⭐
│   │   ├── Hero.tsx      # Hero section config
│   │   ├── About.tsx     # About section config
│   │   ├── Experience.tsx # Work experience config
│   │   ├── Contact.tsx   # Contact form config
│   │   ├── Gears.tsx     # Setup/gears config
│   │   └── Meta.tsx      # SEO metadata config
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
└── content-collections.ts # Content schema
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help, feel free to:

- Open an [issue on GitHub](https://github.com/Abdullah-dev0/portfolio/issues)
- Reach out on [Twitter/X](https://x.com/Abdul_ah14)
- Contact via email: abdulah14200@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Smooth scrolling by [Lenis](https://lenis.studiofreight.com/)

---

**Made with ❤️ by [Abdullah](https://github.com/Abdullah-dev0)**

⭐ Star this repo if you find it helpful!
