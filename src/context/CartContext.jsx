import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Add: if exists, increase quantity; else push with quantity=1
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // Decrease one; remove if hits 0
  const removeFromCart = (id) => {
    setCart(prev =>
      prev
        .map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
        .filter(p => p.quantity > 0)
    )
  }

  // Remove item entirely
  const deleteFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  // For navbar badge
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart, totalQty }}>
      {children}
    </CartContext.Provider>
  )
}