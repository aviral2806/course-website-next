'use client'

import { create } from "zustand";
import { persist } from "zustand/middleware"

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (course) =>
                set((state) => {
                    const inCart = state.cart.find((item) => item._id === course._id)
                    if (inCart) return state
                    return { cart: [...state.cart, course] }
                }),

            removeFromCart: (courseId) =>
                set((state) => {
                    return { cart: state.cart.filter((item) => item._id !== courseId) }
                }),
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: "cart-storage"
        }
    )
)

export default useCartStore