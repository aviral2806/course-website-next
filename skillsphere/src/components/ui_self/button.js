'use client'

export default function Button({ children, variant = 'light', onClick, bold = false, classes = '' }) {
    const baseClasses = `px-4 py-3 rounded-lg ${bold ? "font-bold" : "font-semibold"} border transition-colors duration-300 hover:cursor-pointer`

    const variants = {
        light: `bg-[#EC5E95] text-white border-2 border-white hover:bg-white hover:text-[#EC5E95] hover:border-[#EC5E95]`,
        dark: `bg-black text-[#EC5E95] border-[#EC5E95] border-2 hover:scale-102 ease-in duration-150 transition-transform transform-gpu will-change-transform`
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${classes}`}>
            {children}
        </button>
    )
}
