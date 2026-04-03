# 🛒 E-Shop: React + Redux Toolkit Shopping Cart

A modern, fast, and responsive E-commerce storefront built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project demonstrates global state management, dynamic API integration, and manual state rehydration using browser storage.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Features

- **Dynamic Product Fetching**: Real-time data integration with the [Fake Store API](https://fakestoreapi.com/).
- **Global State Management**: Centralized cart logic using Redux Toolkit slices.
- **Session Persistence**: Custom implementation of `sessionStorage` to keep cart items safe during page refreshes.
- **Responsive Design**: Mobile-first UI built with Tailwind CSS.
- **Real-time Feedback**: Interactive toast notifications via `react-hot-toast`.
- **Loading States**: Custom CSS spinner for a smooth data-fetching experience.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **State Management**: Redux Toolkit (RTK)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Icons**: React Icons
- **Notifications**: React Hot Toast

## 💾 Session Persistence Logic

One of the key features of this repo is the manual "Hydration" of the Redux store. Instead of using a heavy library, the store is synchronized with the browser's `sessionStorage` manually:

1. **Initialization**: On app load, the store checks `sessionStorage` for existing cart data.
2. **Subscription**: The store subscribes to all changes; whenever the cart is updated, the new state is stringified and saved to the session.

```javascript
// Located in Store.js
store.subscribe(() => {
  saveToSessionStorage(store.getState().cart);
});
```

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/05adi/Shopping-Cart](https://github.com/05adi/Shopping-Cart)
