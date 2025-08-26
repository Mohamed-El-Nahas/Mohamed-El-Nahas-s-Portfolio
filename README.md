# Mohamed El-Nahas Portfolio

A personal **Portfolio Website** built with **React.js** to showcase my projects, skills, and contact information.  
This project is fully responsive, modern, and integrated with **Sanity CMS** to manage content dynamically.

---

## 🚀 Features
- Responsive and modern UI design.
- Dynamic content (Projects, Skills, Testimonials) fetched from **Sanity CMS**.
- Smooth animations with **Framer Motion**.
- Contact form integrated with Sanity (messages are stored in the backend).
- Organized code structure with reusable components.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, SCSS (Sass)
- **Animations:** Framer Motion
- **Content Management:** Sanity.io
- **Build Tool:** Vite / CRA (depending on setup)
- **Version Control:** Git & GitHub

---

## 📂 Project Structure
```
src/
 ├── assets/        # Images and static assets
 ├── components/    # Reusable UI components (Navbar, etc.)
 ├── container/     # Main sections (About, Work, Skills, Footer, etc.)
 ├── constants/     # Static data & constants
 ├── wrapper/       # Higher Order Components (layout, animations)
 ├── App.js         # Root component
 └── client.js      # Sanity client configuration
```

---

## ⚡ How It Works
1. **Frontend** is built with React.js.  
2. **Sanity CMS** acts as the backend:
   - React fetches data (Projects, Skills, Testimonials) using queries.
   - Contact form submissions are stored as new documents in Sanity.
3. **Framer Motion** handles animations for smoother user experience.
4. **SCSS** is used for clean and modular styling.

---

Run the project locally:
```bash
npm start
```

Build for production:
```bash
npm run build
```
