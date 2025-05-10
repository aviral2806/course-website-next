'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import LearningPathCard from '../ui_self/LearningPathCard'

const LearningPathList = ({ learningPaths }) => {
    const [query, setQuery] = useState('')

    // Filter learning paths based on the search query
    const filteredLearningPaths = learningPaths.filter(path => {
        const q = query.toLowerCase()
        return (
            path.title?.toLowerCase().includes(q) ||
            path.slug?.toLowerCase().includes(q) ||
            path.shortDescription?.toLowerCase().includes(q)
        )
    })

    return (
        <AnimatePresence>
            <motion.div
                className="p-6 bg-[#FFFFF0]/70 dark:bg-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                exit={{ opacity: 0 }}
                id="featured-learning-paths"
            >
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-3xl dark:text-white font-bold">Featured Learning Paths</h1>
                    <div className="w-3/10 flex justify-end">
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="floating_outlined"
                                className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none 
                                dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <label
                                htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#FFFFF0]
                                 dark:bg-black px-2 ml-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                                 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                            >
                                Search
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {filteredLearningPaths.map(path => (
                        <LearningPathCard key={path.slug.current} path={path} />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default LearningPathList