'use client'

import { create } from "zustand";
import { persist } from "zustand/middleware"

const useCartStore = create(
    persist(
        (set) => ({
            courseCart: [],
            learningPathCart: [],
            allCourseInCart: [],
            addToCart: (course) =>
                set((state) => {
                    const inCart = state.allCourseInCart.find((item) => item === course._id)
                    if (inCart) return state
                    return { courseCart: [...state.courseCart, course], allCourseInCart: [...state.allCourseInCart, course._id] }
                }),
            addLearningPathToCart: (learningPath) =>
                set((state) => {
                    const inCart = state.learningPathCart.find((item) => item.slug.current === learningPath.slug.current)
                    if (inCart) return state
                    learningPath.courses.map((course) => {
                        !state.allCourseInCart.find((item) => item === course.course._id) ?
                            set((state) => ({ allCourseInCart: [...state.allCourseInCart, course.course._id] })) : set((state) => ({ courseCart: courseCart.filter((item) => item._id !== course.course._id) }))
                    })
                    return { learningPathCart: [...state.learningPathCart, learningPath], }
                }),

            removeFromCart: (courseId) =>
                set((state) => {
                    return { courseCart: state.courseCart.filter((item) => item._id !== courseId) }
                }),
            clearCart: () => set({ courseCart: [], allCourseInCart: [], learningPathCart: [] }),
        }),
        {
            name: "cart-storage"
        }
    )
)

export default useCartStore