# Tyloo Portfolio Website

![Portfolio Preview](/public/preview.jpg)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases my professional experience, projects, and skills as a Senior Software Engineer.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional interface using Shadcn UI components
- **Dark/Light Mode**: Theme switching with system preference detection
- **Sections**:
  - Hero section with animated grid pattern
  - About section with profile information
  - Experience timeline showcasing professional journey
  - Projects showcase with live demos and GitHub links
- **SEO Optimized**: Meta tags and Open Graph images for better sharing

## Technologies

- **Framework**: [Next.js](https://nextjs.org/) (v15.3)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) with Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: CSS animations with Tailwind
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Development Tools**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v8 or higher recommended)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/tyloo/tyloo.fr.git
   cd tyloo.fr
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Start the development server
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Project Structure

- `/app`: Next.js app directory with pages and layouts
- `/components`: React components organized by feature
  - `/ui`: Reusable UI components from Shadcn UI
- `/lib`: Utility functions and data files
- `/public`: Static assets like images and resume
- `/hooks`: Custom React hooks

## Customization

To customize this portfolio for your own use:

1. Update personal information in `/lib` directory files
2. Replace images in `/public` directory
3. Modify component content in `/components` directory
4. Update metadata in `/app/layout.tsx`

## License

This project is open source and available under the MIT License.

## Contact

Julien 'Tyloo' Bonvarlet
- LinkedIn: [linkedin.com/in/julien-bonvarlet](https://linkedin.com/in/julien-bonvarlet/)
- GitHub: [github.com/tyloo](https://github.com/tyloo)