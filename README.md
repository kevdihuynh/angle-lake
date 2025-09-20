# Angle Lake Manor - Luxury Lakeside Living

A modern, responsive website for Angle Lake Manor, a luxury waterfront community. Built with React, TypeScript, and Vite.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, elegant design with smooth animations and transitions
- **TypeScript**: Full type safety and better development experience
- **Component-Based**: Modular React components for easy maintenance
- **Performance**: Optimized with Vite for fast development and builds

## Sections

- **Hero Section**: Eye-catching landing area with call-to-action buttons
- **Features**: Highlighting key amenities and benefits
- **Properties**: Showcase of available luxury homes
- **Call-to-Action**: Encouraging visitors to take action
- **Footer**: Contact information and additional links

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Or with Content Manager enabled:
   ```bash
   npm run dev:cms
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server (Content Manager hidden)
- `npm run dev:cms` - Start development server with Content Manager enabled
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Content Management

This website includes a Content Management System (CMS) that allows non-developers to update website content without touching code. The CMS is only available during development:

- **Development with CMS**: Run `npm run dev:cms` to enable the Content Manager interface
- **Development without CMS**: Run `npm run dev` for normal development
- **Production**: The CMS is never available in production builds

See `CONTENT_MANAGEMENT_GUIDE.md` for detailed instructions on using the CMS.

## Design System

### Colors
- Primary Blue: #1e40af
- Secondary Gold: #f59e0b
- Accent Teal: #0d9488
- Neutral grays for text and backgrounds

### Typography
- Font Family: Inter (with system font fallbacks)
- Responsive font sizes
- Clear hierarchy with proper contrast

### Components
- Reusable button styles
- Card components for properties and features
- Responsive navigation
- Mobile-first design approach

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── Properties.tsx  # Properties showcase
│   ├── CTA.tsx         # Call-to-action section
│   ├── Footer.tsx      # Footer component
│   └── HomePage.tsx    # Main page component
├── styles/             # CSS styles
│   ├── index.css       # Global styles and variables
│   └── App.css         # App-specific styles
├── assets/             # Images and other assets
├── App.tsx             # Main App component
└── main.tsx            # Application entry point
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to Angle Lake Manor.
