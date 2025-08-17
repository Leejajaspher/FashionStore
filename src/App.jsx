import React from 'react'
import Navbar from './components/Navbar.jsx'
import ProductsPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import HomePage from './pages/HomePage.jsx';
import { Routes, Route, Navigate } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full p-4">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="py-6 text-center bg-black text-sm text-yellow-500">
        © {new Date().getFullYear()} Spot Light
      </footer>
    </div>
  )
}


