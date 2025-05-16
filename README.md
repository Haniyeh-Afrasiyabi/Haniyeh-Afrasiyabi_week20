# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛍️ Admin Panel for Online Store

A responsive admin panel to manage an online store.

---

## 🚀 Technologies Used

- **React.js** - Core UI library
- **React Router Dom** - Routing and page navigation
- **React Hook Form** - Form management
- **Yup** - Form validation
- **Axios** - API communication
- **React Toastify** - Toast notifications for success/error
- **Lodash.debounce** - Optimized input handling in search
- **CSS Modules** - Component-scoped styling

---

## 📦 Project Structure

- `components/` - UI components like forms, modals, tables
- `services/` - API request functions
- `schema/` - Yup schemas for form validation
- `constants/` - Dynamic form input configurations

---

## 🔐 Authentication

- Register/Login functionality
- JWT token stored in localStorage
- ProtectedRoute for dashboard access

---

## ✅ Features

### 🔐 Authentication:

- User sign-up with strong validation (username and password)
- Login and token storage
- Automatic redirection to dashboard upon successful login

### 🛒 Product Management:

- Full product listing in responsive table
- Add new product with validated form
- Edit existing products
- Delete product with modal confirmation

### 📦 UI/UX:

- Real-time formatting of numbers in forms (e.g., `90,000`)
- Display price in text format (e.g., `90 thousand Toman`)
- Dynamic form fields based on `constants`

### 🔍 Search:

- Live search across name, price, quantity, and ID fields
- Debounced input using `lodash.debounce`

### 📄 Pagination:

- Show 5 products per page
- Navigate between pages with number buttons and next/prev

---

## ✨ Key Highlights

➕ Add new products
✏️ Edit product details  
🔍 Advanced search across multiple fields  
🗑️ Delete products with modal confirmation  
📝 Forms powered by React Hook Form  
✅ Yup-based input validation  
🔐 Token storage and access control  
♻️ State management with Context API + useReducer  
🎨 Reusable and modular UI components

---

## 💡 Getting Started

```bash
npm install
npm run dev
```
