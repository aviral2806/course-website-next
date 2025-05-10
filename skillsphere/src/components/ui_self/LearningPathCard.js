'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../../lib/sanity'

const LearningPathCard = ({ path }) => {
    console.log(path, " path")
    const totalPrice = path.courses.reduce((acc, course) => {
        console.log(course)
        try {
            const coursePrice = parseFloat(course.course.price.replace(/[^0-9.-]+/g, ""))
            return acc + coursePrice
        } catch (e) {
            console.error("Error parsing course price: ", e)
            return acc
        }
    }, 0)
    const discountedPrice = totalPrice * 0.7

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalPrice)

    const formattedDiscountedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(discountedPrice)

    return (
        <Link href={`/learning-paths/${path.slug.current}`}>
            <div className="flex flex-col md:flex-row items-center border rounded-2xl shadow-lg p-4 bg-white dark:bg-gray-900/80 w-full hover:scale-101 transition-transform duration-300 ease-in-out">
                <div className="flex-shrink-0">
                    <Image
                        src={path.thumbnail !== null ? urlFor(path.thumbnail).url() : null}
                        alt={path.title}
                        width={200}
                        height={150}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col flex-grow ml-4">

                    <h2 className="text-2xl font-bold dark:text-white">{path.title}</h2>

                    <p className="text-gray-700 dark:text-gray-400 mt-2">{path.shortDescription}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                        Estimated Duration: {path.estimatedDuration}
                    </p>
                    <div className="mt-4">
                        <span className="text-lg line-through text-gray-500 dark:text-gray-400">
                            {formattedPrice}
                        </span>
                        <div className="relative inline ml-2">
                            <span className='rounded-2xl bg-green-600 top-[-8px] right-[-10px] text-[7px] font-semibold p-1 text-white absolute'>-30%</span>
                            <span className='font-bold text-lg'> {formattedDiscountedPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default LearningPathCard