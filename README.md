# Clothing AI Frontend

React + Vite + Tailwind frontend for the Clothing AI Business Management System.

## Setup

npm install
npm run dev

bash
Copy code

## Environment Variables

Create `.env`:

VITE_API_URL=http://localhost:8000

makefile
Copy code

## Deployment (GitHub Pages)

Install:

npm install gh-pages --save-dev

pgsql
Copy code

Add to package.json:

"homepage": "https://YOUR_USERNAME.github.io/clothing-frontend",
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"deploy": "gh-pages -d dist"
}

makefile
Copy code

Deploy:

npm run build
npm run deploy

Copy code
