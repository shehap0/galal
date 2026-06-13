# ☕ Galal Coffee - Brand Experience (Prototype)

> **Note:** This project is a functional prototype and design concept created to showcase the story and expansion of Galal Coffee. It is not the official website of the brand.

## 📖 The Story
This prototype celebrates the journey of **Mohamed Galal**, a self-made entrepreneur who started his coffee journey in **Port Said** with a single mobile coffee car. Today, Galal Coffee has transformed into an Egyptian icon, expanding from the Canal region to the heart of Cairo, Damietta, and Ismailia.

This website captures that "Bousaidi" grit and elevates it into a premium, modern digital experience.

## 🛠️ Tech Stack
This project is built with a modern "AI-First" development workflow, focusing on speed and type-safety:

*   **Framework:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Runtime/Package Manager:** [Bun](https://bun.sh/) (Fastest JS all-in-one tool)
*   **Routing:** [TanStack Router](https://tanstack.com/router/latest) (Type-safe file-based routing)
*   **Development Platform:** [Lovable](https://lovable.dev/) (AI-powered full-stack development)
*   **Styling:** Tailwind CSS (Modern, utility-first CSS)

## ✨ Key Features
*   **The Journey Timeline:** An interactive "Our Story" section tracing the brand from 2015 (The Car) to today (National Expansion).
*   **Talabat-Synced Menu:** Real product listings extracted from official menu data, including Signature Iced Coffees, Hot Classics, and Waffles.
*   **Location Finder:** Integrated Google Maps logic to help users find the nearest Galal branch.
*   **Premium Visuals:** High-performance background video loops and localized imagery reflecting the brand's Port Saidi roots.
*   **Mobile-First Design:** Fully responsive layout optimized for coffee lovers on the go.

## 📂 Project Structure
```text
├── .lovable/          # Lovable AI configuration
├── public/            # Static assets (videos/icons)
├── src/
│   ├── assets/        # Global styles and images
│   ├── components/    # Reusable UI components (Buttons, Cards, Hero)
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   ├── routes/        # TanStack file-based routing
│   ├── server.ts      # Server-side entry point
│   └── start.ts       # Application bootstrap logic
├── vite.config.ts     # Vite configuration
└── bun.lock           # Bun dependency lockfile
```

## 🚀 Getting Started

### Prerequisites
Ensure you have **Bun** installed on your machine.
```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/galal-coffee-prototype.git
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun dev
   ```

## 📜 Disclaimer
All brand assets, including the "Crown" logo and product names, are property of **Galal Coffee / Mohamed Galal**. This project was developed as a design case study to demonstrate modern web development techniques and local brand storytelling.