# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# MacBook Pro Landing Page Clone

A modern **MacBook Pro landing page clone** built with **React, Three.js, and GSAP**. The project focuses on recreating Apple's premium product presentation with interactive 3D models, smooth animations, and responsive UI.

## Preview

A visually immersive MacBook Pro product page featuring:

* Interactive 3D MacBook Pro models
* Smooth scroll-based animations
* GSAP-powered transitions and effects
* Responsive design
* Product highlights and specifications
* Apple-inspired typography and layout
* Interactive UI elements

## Tech Stack

* **React** — UI development
* **Three.js** — 3D rendering
* **React Three Fiber** — Three.js integration with React
* **GSAP** — Animations and scroll-based effects
* **Vite** — Development and build tool
* **CSS** — Styling and responsive layouts

## Features

### 3D Product Viewer

Interactive MacBook Pro models rendered using Three.js and React Three Fiber.

### GSAP Animations

Smooth animations and transitions are created using GSAP to provide a polished product-page experience.

### Responsive Design

The landing page adapts to different screen sizes, including desktop, tablet, and mobile layouts.

### Product Sections

The page includes multiple sections showcasing the MacBook Pro design, features, performance, and highlights.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/macbook-pro-clone.git
cd macbook-pro-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

## Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```text
macbook-pro-clone/
├── public/
│   ├── assets/
│   └── models/
├── src/
│   ├── components/
│   ├── sections/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 3D Assets

The project uses 3D assets rendered through Three.js. Place required `.glb` / `.gltf` models and other assets inside the appropriate `public` directory.

## Environment Variables

If the project uses external services such as EmailJS, create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not commit your `.env` file to GitHub.

Add it to `.gitignore`:

```text
.env
.env.*
```

## Learning Goals

This project was built to practice:

* React component architecture
* Three.js and 3D web development
* React Three Fiber
* GSAP animations
* Scroll-triggered animations
* Responsive web design
* Modern landing-page development

## Disclaimer

This is a **fan-made educational project** created for learning and portfolio purposes. It is not affiliated with or endorsed by Apple Inc.

## License

This project is intended for educational and personal portfolio use.
