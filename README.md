# Apology Letter 🌸

A beautiful, modern apology webpage built with Next.js and Tailwind CSS. Features soft animations, flower emojis, and a heartfelt message designed to convey sincerity and emotion.

## Features

- 🌸 Beautiful flower-themed design with floating animations
- 💙 Soft blue color palette for a calming effect
- 📱 Fully responsive and mobile-friendly
- ✨ Smooth animations and transitions
- 🎨 Modern design with rounded corners and soft shadows
- 🌺 Animated flower emojis and floating petals effect

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Dancing Script, Merriweather, and Quicksand fonts
- **React 18** - Modern React with hooks

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the page.

## Project Structure

```
├── pages/
│   ├── _app.js          # App wrapper with global styles
│   └── index.jsx        # Main apology page
├── styles/
│   └── globals.css      # Global styles with Tailwind
├── public/
│   └── favicon.svg      # Custom flower favicon
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── next.config.js       # Next.js configuration
```

## Customization

The message content, colors, and animations can be easily customized by editing:

- **Message text**: Update the content in `pages/index.jsx`
- **Colors**: Modify the `blue-soft` theme in `tailwind.config.js`
- **Animations**: Adjust animation timings and styles in the Tailwind config
- **Fonts**: Change font imports in the `Head` component

## Deployment

This project can be deployed to any hosting platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS**
- **Heroku**

## License

MIT License - feel free to use this for your own heartfelt apologies! 💙
