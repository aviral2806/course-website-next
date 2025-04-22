import React from 'react'

function Tag({ label }) {
    return (
        <span>
            <span
                className="bg-gray-200
                 text-gray-800 text-sm
                 font-semibold mr-2 px-4 py-1 rounded-xl
                  dark:bg-gray-700 dark:text-gray-400"
            >
                {label}
            </span>
        </span>
    )
}

export default Tag