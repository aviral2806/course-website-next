'use client'
import { useEffect, useRef, useState } from 'react'

const VerticalProgressRef = ({ targetRef }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const target = targetRef.current
            if (!target) return

            const rect = target.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const totalHeight = rect.height
            const visibleFromTop = Math.min(Math.max(windowHeight - rect.top, 0), totalHeight)
            const percentVisible = Math.min((visibleFromTop / (totalHeight)) * 100, 100)

            setProgress(percentVisible - 8)
            console.log(percentVisible, ' percentVisible')
            console.log(progress, ' progress')
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // run once initially
        return () => window.removeEventListener('scroll', handleScroll)
    }, [targetRef])

    return (
        <div className="absolute xl:left-75 lg:left-40 left-12 top-0 my-32 h-[85%] w-1 bg-gray-400 -z-0">
            <div
                style={{
                    height: `${progress}%`
                }}
                className="w-1 bg-[#EC5E95] transition-all duration-500 ease-in-out"
            />
        </div>
    )
}

export default VerticalProgressRef
