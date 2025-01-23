---
title: "My Journey Building My First Personal Website 2"
description: "At last im able to develop my personal site"
pubDate: "23 Jan 2025"
updatedDate: "23 Jan 2025"
tags: ["Astro", "React"]
---

Creating my first personal website was an exciting and fulfilling experience. I combined several modern web technologies to craft a site that reflects my skills and creativity. In this blog, I’ll walk you through the process, the tech stack I used, and the challenges I overcame.

## The Tech Stack

Here’s the set of tools and technologies I chose for my project:

1. **Astro**: A modern framework for building static and server-side rendered websites.
2. **React**: For building interactive and reusable UI components.
3. **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
4. **TypeScript**: To add type safety and improve code quality.
5. **Framer Motion**: For adding smooth animations and transitions.
6. **i18n (Internationalization)**: To support both Bengali and English languages.

## Key Features

### 1. Dark and Light Modes

One of the must-have features for a modern website is support for dark and light themes. I implemented this feature to provide users with a visually comfortable experience regardless of their preference.

### 2. Multi-Language Support

Being a Bengali speaker, I wanted my site to be accessible in both Bengali and English. Using i18n, I created a seamless language-switching experience.

### 3. Smooth Animations

Framer Motion was a perfect choice for adding interactive and eye-catching animations. From page transitions to button hover effects, these animations brought my site to life.

## Step-by-Step Development

### 1. Setting Up Astro with React

Astro’s flexibility allows you to use React components seamlessly. I initialized the project using the Astro CLI and configured it to work with React.

```bash
npm create astro@latest my-website
cd my-website
npm install
```

### 2. Styling with Tailwind CSS

Tailwind CSS is perfect for quickly styling components. I integrated it into the project by installing the necessary dependencies and configuring the `tailwind.config.js` file.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

I also ensured that Tailwind worked well with Astro by adding the appropriate plugins.

### 3. Adding TypeScript

To make the codebase more robust and maintainable, I added TypeScript support. Astro has built-in TypeScript support, so I just updated the configuration files and started writing `.tsx` files.

### 4. Implementing Dark and Light Modes

Using Tailwind’s built-in dark mode support, I created a toggle button that switches between themes. I stored the user’s preference in `localStorage` to persist their choice.

```typescript
function ThemeToggle() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'light'
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}
```

### 5. Adding i18n for Bengali and English

I used a library called `react-i18next` to manage translations. I structured the translations into JSON files for easy management.

```json
// en.json
{
  "welcome": "Welcome to my website!"
}

// bn.json
{
  "welcome": "আমার ওয়েবসাইটে স্বাগতমেধন!"
}
```

Switching between languages was as simple as adding a language toggle and updating the i18n configuration.

### 6. Enhancing with Framer Motion

To add animations, I utilized Framer Motion’s `motion` components. For example, I animated page transitions with the following code:

```typescript
import { motion } from 'framer-motion';

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

## Challenges and Lessons Learned

- **Astro’s Learning Curve**: Getting used to Astro’s file-based routing and partial hydration features took some time.
- **Handling RTL for Bengali**: Bengali required careful attention to text alignment and font selection to ensure readability.
- **Animations**: While Framer Motion is powerful, tuning the animations to feel smooth yet unobtrusive was challenging.

## Conclusion

Building my personal website with Astro, React, Tailwind CSS, TypeScript, Framer Motion, and i18n was a rewarding journey. I’m thrilled with the outcome and proud to have created a multilingual, theme-switching, animated website that represents my skills. If you’re considering building a similar project, I highly recommend this stack for its flexibility and modern capabilities.

You can check out the live website [here](#) and explore the source code on [GitHub](#). I hope my journey inspires you to start your own project!
