'use client'
import React from 'react'
import Image from 'next/image'
import LearningPathList from './LearningPathList'
import { motion } from 'framer-motion'

export const LearningPathLandingPage = ({ learningPaths }) => {
    return (
        <motion.main
            className='w-full flex flex-col pt-16  flex-1 mb-32 dark:bg-linear-to-t bg-[#FFFFF0]/70 dark:bg-transparent
         dark:to-gray-800/50
         dark:from-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full flex lg:flex-row lg:px-6 px-0 flex-col-reverse lg:items-start items-center lg:justify-around justify-between gap-16 lg:gap-4">
                <div className="lg:w-1/2 lg:mx-0 mx-16 flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
                        Upskill with our learning paths, specially curated to help you achieve your goals and excel in your career.
                    </h1>
                    <p className='text-gray-700 text-lg mt-4 font-semibold dark:text-gray-400'>
                        {`Our Learning Paths are thoughtfully curated to provide a structured, outcome-oriented learning experience. Whether you're a beginner looking to break into a new field or an experienced developer aiming to deepen your expertise, each path is designed to guide you step-by-step through essential concepts, hands-on projects, and real-world applications. We've grouped complementary courses together so you can build momentum and see tangible progress as you learn.`}
                    </p>
                    <p className='text-gray-700 text-lg font-semibold dark:text-gray-400'>
                        {`Instead of randomly picking topics, our curated paths help you stay focused and motivated. From full-stack development to cloud computing, UI/UX design to data science — each path is tailored to industry demand and career relevance. With clear objectives, estimated completion time, and bundled pricing, you can stop wondering where to start and start learning with purpose.`}
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/images/parcel-tracking-route-icon-isometric-vector-delivery-track-service-parcel-tracking_96318-68163.jpg"
                        alt="Learning Path Image"
                        className='rounded-4xl shadow-xl'
                        width={500} height={500}
                    />
                </div>
            </div>

            <LearningPathList learningPaths={learningPaths} />
        </motion.main>
    )
}

export default LearningPathLandingPage

