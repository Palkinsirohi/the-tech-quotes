# My App

This is a Next.js web application built with React 19 and Tailwind CSS. It includes various pages organized under the `src/app` directory, reusable components, and static assets.

## Project Structure

```
.
├── .gitignore                 # Git ignore rules
├── eslint.config.mjs          # ESLint configuration
├── jsconfig.json              # JavaScript configuration for module resolution
├── next.config.mjs            # Next.js configuration
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Exact versions of installed packages
├── postcss.config.mjs         # PostCSS configuration for Tailwind CSS
├── README.md                  # This file
├── public/                    # Public static assets served at the root
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── images/                # Many image files used in the app
│       ├── 1CRM.png
│       ├── 2-plan.png
│       ├── ... (many images)
│       └── sap.png
├── src/
│   ├── app/                   # Next.js app directory with pages and nested routes
│   │   ├── favicon.ico
│   │   ├── globals.css        # Global styles
│   │   ├── layout.jsx         # Root layout component
│   │   ├── page.jsx           # Root page component
│   │   ├── About-Us/          # About Us section with nested pages
│   │   ├── blog/              # Blog section with categories and posts
│   │   └── Software-reviews/  # Software reviews section with categories
│   ├── assets/                # Static assets like logos
│   │   └── logo.svg
│   └── components/            # Reusable React components
│       ├── Footer.jsx
│       └── Navbar.jsx
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`  
  Runs the app in development mode with hot reloading.

- `npm run build`  
  Builds the app for production.

- `npm run start`  
  Starts the production server.

- `npm run lint`  
  Runs ESLint to check for code quality issues.

## Dependencies

- Next.js 15.3.4
- React 19.0.0
- Tailwind CSS 4
- Framer Motion for animations
- Lucide React and React Icons for icons

## License

This project is private.
