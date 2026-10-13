# 🛍️ SkyMart — E-Commerce Web Application

SkyMart is a modern e-commerce web application built using React.js and Tailwind CSS. It provides a responsive shopping interface with authentication, product browsing, and cart-related functionality.

The project follows a component-based architecture and uses React Context API to manage shared application state. React Router is used to organize navigation and manage access to protected routes.

## ✨ Features

- **User Authentication:** Login and registration functionality.
- **Protected Routes:** Restrict access to selected pages based on authentication state.
- **Product Browsing:** Display products through a user-friendly shopping interface.
- **Shopping Cart:** Manage shopping cart items, where implemented.
- **Global State Management:** Share authentication and theme-related state using React Context API.
- **Reusable Components:** Build the interface using reusable React components.
- **Client-Side Routing:** Navigate between pages using React Router.
- **Responsive UI:** Support different screen sizes using Tailwind CSS.
- **Organized Codebase:** Separate components, pages, layouts, contexts, and routing logic.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling and responsive design |
| React Router | Navigation and route management |
| React Context API | Sharing global application state |
| React Hooks | Managing state and component lifecycle |
| Vite | Development server and build tooling, if configured |

## 📁 Project Structure

```text
SkyMart/
├── public/
│
├── src/
│   ├── AboutComponents/
│   │   ├── OurTeam.jsx
│   │   └── Review.jsx
│   │
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ContextApi.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── HomeComponents/
│   │
│   ├── layouts/
│   │
│   ├── pages/
│   │
│   ├── routes/
│   │   ├── AuthRoutes.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── PublicRoutes.jsx
│   │
│   ├── ShopComponents/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
└── README.md
```

*Note: This structure is based on the current project folder view. Some folders may contain additional files not shown above.*

## 📂 Folder and File Explanation

### `public/`

Contains static files that can be served directly by the application, such as public images and other assets.

### `src/assets/`

Stores assets imported into React components, such as product images, logos, and other visual resources.

### `src/components/`

Contains common, reusable UI components that can be shared across multiple pages.

### `src/AboutComponents/`

Contains components related to the About section.

- `OurTeam.jsx` — Displays team-related information.
- `Review.jsx` — Displays customer reviews or testimonials.

### `src/HomeComponents/`

Contains components used to build the home page, such as hero sections, banners, or featured content.

### `src/ShopComponents/`

Contains components related to the shopping experience, such as product cards, product listings, and cart UI, depending on the implementation.

### `src/pages/`

Contains page-level components that represent different application screens, such as Home, Login, Register, About, or Shop.

### `src/layouts/`

Contains shared page layouts. A layout can provide common elements such as a navbar, footer, or page wrapper for multiple routes.

### `src/context/`

Contains React Context providers and related state-management logic.

- `AuthContext.jsx` — Manages authentication-related state and functionality.
- `ContextApi.jsx` — Contains additional shared context logic, according to its implementation.
- `ThemeContext.jsx` — Manages theme-related state, such as light and dark modes, if implemented.

### `src/routes/`

Contains route configuration and route-access logic.

- `AuthRoutes.jsx` — Organizes authentication-related routes.
- `ProtectedRoute.jsx` — Checks authentication before allowing access to protected pages.
- `PublicRoutes.jsx` — Organizes public routes and any public-route access rules.

### `App.jsx`

Acts as the main application component, where the overall application structure and routing setup may be connected.

### `main.jsx`

Serves as the React entry point. It typically mounts the application into the HTML document and wraps it with required providers, such as Context providers or a router.

### `index.css`

Contains global styles and Tailwind CSS directives or imports.

## 🧠 Key Implementation Concepts

### 1. React Context API

Context API allows components to access shared data without passing props through every level of the component tree.

For example, authentication state can be shared between the navbar, login page, and protected routes.

**Why use it?**

- Reduces unnecessary prop drilling.
- Makes shared state easier to access.
- Helps organize application-wide state.

### 2. Protected Routes

Protected routes prevent unauthenticated users from accessing pages that require login.

The `ProtectedRoute.jsx` component can check the authentication state and either render the requested page or redirect the user to the login page.

### 3. Public and Authentication Routes

The routing files help keep navigation logic organized.

- Public routes provide access to pages that do not require login.
- Authentication routes handle login and registration screens.
- Protected routes check whether the user is authorized to access a page.

The exact behavior depends on how these components are implemented.

### 4. Reusable Components

Instead of repeating the same UI code across multiple pages, reusable components can be created and imported wherever needed.

This improves code readability, maintainability, and consistency.

### 5. Theme Context

A theme context can manage the selected theme centrally, allowing multiple components to respond to theme changes without maintaining separate theme states.

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### Installation

**Step 1: Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**Step 2: Navigate to the project folder**

```bash
cd <YOUR_PROJECT_FOLDER>
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Start the development server**

```bash
npm run dev
```

**Step 5: Open the local application**

Open the URL displayed in the terminal. For a typical Vite project, it is:

```text
http://localhost:5173
```

## 🏗️ Production Build

To create an optimized production build, run:

```bash
npm run build
```

To test the production build locally, run:

```bash
npm run preview
```

These commands assume the project uses the standard Vite scripts.

## 🎯 Learning Outcomes

Through this project, I practiced:

- Building responsive interfaces with React and Tailwind CSS.
- Organizing a React application using components and pages.
- Managing shared state using React Context API.
- Structuring public, authentication, and protected routes.
- Creating reusable UI components.
- Understanding the separation of routing, layout, and state-management logic.

## 🔮 Future Improvements

- Add advanced product search and filtering.
- Improve cart persistence and checkout functionality.
- Integrate backend APIs and database storage where required.
- Add order history and user profile management.
- Improve loading, error, and empty states.
- Add automated tests for important application flows.

## 👨‍💻 Author

**Kishan Singh**

- GitHub: [iamkishan07](https://github.com/iamkishan07)
- LinkedIn: [Kishan Singh](https://www.linkedin.com/in/kishan-singh-a7959b263/)

---

Built with React.js and Tailwind CSS.
