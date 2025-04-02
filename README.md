# Next.js with ShadCN Project

## 🚀 Overview
This is a Next.js project using **ShadCN** and **Tailwind CSS** for styling. The project is designed with a **dark theme by default** and follows modern UI/UX principles.

## 🛠️ Tech Stack
- **Next.js** (React framework for SSR and SSG)
- **ShadCN** (Component library based on Radix UI)
- **Tailwind CSS** (Utility-first CSS framework)

## 📂 Project Structure
```
📦 my-nextjs-project
├── 📂 app/        # Main application pages & layout
├── 📂 components/ # Reusable UI components
├── 📂 styles/     # Global styles and Tailwind config
├── 📜 next.config.js  # Next.js configuration
├── 📜 tailwind.config.js  # Tailwind configuration
├── 📜 package.json  # Dependencies and scripts
└── 📜 README.md  # Project documentation
```

## 🖥️ Installation & Setup
To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/JaiMishra25/gridShadCN.git
   cd my-app

   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The app will be running at **http://localhost:3000**.

## 🌑 Default Dark Mode
This project is configured to use a **dark theme by default**. Styles are defined in `global.css` using CSS variables for both light and dark themes.

## 🚀 Deployment
### **GitHub Pages (Static Export)**
1. Update `next.config.js`:
   ```js
   module.exports = {
     output: "export",
     images: { unoptimized: true },
     basePath: "/your-repo",
   };
   ```
2. Export the project:
   ```sh
   npm run build && npm run export
   ```
3. Deploy `out/` folder to `gh-pages` branch.

### **Vercel (Recommended)**
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```
3. Follow the on-screen steps, and your site will be live!

## 📜 License
This project is licensed under the **MIT License**.

## 📞 Support
For any questions or support, feel free to open an issue or reach out to me!

