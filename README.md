# 🎰 Geo i18n Game -- Frontend Test Application

A modern frontend test application built with **React 18, TypeScript,
Webpack 5, MUI v7, and Styled Components**.

This project demonstrates mid-level frontend engineering skills
including custom tooling, architecture decisions, performance
optimization, and a fully custom internationalization system without
external routing libraries.

---

## 🚀 Overview

This is a production-ready Single Page Application with:

- Custom Webpack configuration (no CRA / Vite)
- Fully custom i18n implementation
- Language-based URL switching (`/en`, `/ka`, `/ru`, etc.\`)
- Responsive layout (desktop & mobile)
- Clean modular architecture
- Strict TypeScript setup
- ESLint + Prettier configuration
- Optimized production build

---

## 🧠 Tech Stack

- React 18
- TypeScript
- Webpack 5
- Material UI v7
- Styled Components
- Babel
- ESLint
- Prettier

---

## 🌍 Internationalization

The application includes a custom-built i18n system:

- No external libraries (no react-router, no i18next)
- URL-based language detection
- Dynamic path rewriting on language change
- LocalStorage persistence
- `<html lang="">` synchronization
- Dictionary-based translations

Supported routes example:

    /en
    /ka
    /ru
    /de
    /it

---

## 📁 Project Structure

    src/
     ├── app/
     ├── assets/
     ├── features/
     │    ├── main/
     │    └── game/
     ├── layout/
     │    └── footer/
     ├── shared/
     │    ├── ui/
     │    └── i18n/
     ├── theme/
     ├── types/

The structure is modular and scalable for larger applications.

---

## 🛠 Getting Started

### Install dependencies

npm install

### Run development server

`npm run dev`

App runs on: http://localhost:3000

### Build for production

`npm run build`

Production files will be generated in: /dist

### Type checking

`npm run typecheck
`

### Lint project

`npm run lint`

### Use prettier

`npm run format`

---

## 🏗 Production Notes

- Webpack configured manually
- Content-hashed bundles
- Optimized asset loading
- SPA routing support
- Ready for static deployment (e.g. Vercel)

---

## 🎯 Purpose

This project was created as a technical assessment for a Middle Frontend
Developer position.

It demonstrates:

- Strong understanding of bundlers and build systems
- Clean scalable architecture
- Performance-aware development
- Custom problem-solving without heavy libraries
- Solid TypeScript usage

---

## 👨‍💻 Author

Nika Beridze\
Frontend Developer\
Focused on performance, architecture, and clean scalable solutions.
