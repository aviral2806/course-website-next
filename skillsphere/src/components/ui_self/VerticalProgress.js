'use client'
import { useEffect, useRef, useState } from 'react'

const VerticalProgress = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            console.log(scrollTop, ' scrollTop')
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            console.log(document.documentElement.scrollHeight, ' scrollHeight')
            console.log(window.innerHeight, ' clientHeight')
            const scrolled = Math.min((scrollTop / docHeight) * 100, 100) // cap at 100
            console.log(scrolled, ' scrolled')
            setProgress(scrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed left-10 top-0 my-32 h-6/10 w-1 bg-gray-300 z-50">
            <div
                style={{ height: `${progress}%` }}
                className="w-1 bg-black transition-all duration-200 ease-in-out"
            />
        </div>
    )
}

export default VerticalProgress
