'use client'
import React from 'react'
import { useEffect } from 'react'

function ScrollProvider({ children }) {
    useEffect(() => {
        // Ensure that the page is scrolled to the target element after a hash change
        const handleScroll = () => {
            const hash = window.location.hash
            if (hash === '#featured-courses') {
                const el = document.getElementById('featured-courses')
                if (el) {
                    // Check if the element is already in view
                    const rect = el.getBoundingClientRect()
                    if (rect.top !== 0) {
                        el.scrollIntoView({ behavior: 'smooth' })
                    }
                }
            }
        }

        // Trigger scroll whenever hash changes
        handleScroll()

        // Listen for changes in location hash
        window.addEventListener('hashchange', handleScroll)

        // Clean up the event listener on unmount
        return () => window.removeEventListener('hashchange', handleScroll)
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default ScrollProvider