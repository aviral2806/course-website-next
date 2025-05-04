'use client'
import React from 'react'
import VerticalProgress from '@/components/ui_self/VerticalProgress'
import Image from 'next/image'
import { urlFor } from '../../../../lib/sanity'
import { ButtonWrapper } from '@/components/ui_self/ButtonWrapper'
import { NotebookPen } from 'lucide-react'
import VerticalProgressRef from '@/components/ui_self/VerticalProgressRef'
import { useRef } from 'react'

function LearningPathPage({ learningPath }) {
    const learningPathRef = useRef(null)
    const { courses } = learningPath;
    const totalPrice = courses.reduce((acc, course) => {
        const coursePrice = parseFloat(course.course.price.replace(/[^0-9.-]+/g, ""));
        return acc + coursePrice;
    }, 0);
    const totalFinalPrice = totalPrice * 0.7
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalPrice);
    const formattedFinalPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalFinalPrice);
    console.log(formattedPrice, " formattedPrice")

    return (
        <main className='flex-1 bg-linear-to-t
        bg-[#FFFFF0]/70 dark:bg-transparent
         dark:to-gray-800/50
         dark:from-black'>
            <div className="flex w-full lg:flex-row flex-col items-center lg:items-start justify-around p-4">
                <div className="flex flex-col items-start justify-center m-4 p-8 shadow-xl rounded-xl dark:bg-linear-to-t bg-white dark:bg-gray-900/70 w-3/4 lg:w-1/2">
                    <h1 className="text-4xl font-bold text-center dark:text-white mb-4">{learningPath.title}</h1>
                    <h1 className='text-lg font-bold text-gray-900 dark:text-gray-400 mt-2'>Estimated duration: {learningPath.estimatedDuration}</h1>
                    <p className="mt-4 text-lg text-start dark:text-gray-500 text-gray-700 font-semibold">
                        {learningPath.shortDescription}
                    </p>
                    <p className='text-xl font-semibold mt-6'>Get entire bundle for:
                        <span className='text-3xl line-through ml-2 text-gray-700 dark:text-gray-400'>{formattedPrice}</span>
                        <div className="relative inline ml-2">
                            <span className='rounded-2xl bg-green-600 top-[-13px] right-[-13px] text-[10px] p-1 text-white absolute'>-30%</span>
                            <span className='font-bold text-3xl'> {formattedFinalPrice}</span>
                        </div>
                    </p>
                    <ButtonWrapper handleClick={() => { }} classes="mt-8 w-full text-2xl font-bold">
                        <div className="flex items-center justify-center">
                            <NotebookPen className="mr-2" size={22} />
                            <span>Get bundle</span>
                        </div>

                    </ButtonWrapper>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={learningPath.thumbnail ? urlFor(learningPath.thumbnail).url() : null}
                        alt={learningPath.title}
                        width={500}
                        height={500}
                        className="rounded-lg mb-2 mt-4"
                    />
                </div>

            </div>
            <div className="shadow-xl rounded-xl dark:bg-linear-to-t bg-white dark:bg-gray-900/70 m-4 mx-16 p-8">
                <div className="">
                    <h2 className="text-3xl font-bold my-6">Why take the {learningPath.title}?</h2>
                    {learningPath.detailedDescription.map((desc, index) => (
                        <p key={index} className="mt-4 text-lg text-start dark:text-gray-500 text-gray-700 font-semibold">
                            {desc.children[0].text}
                        </p>
                    ))}
                </div>
                <div
                    className="relative"
                >
                    <h2 className="text-3xl font-bold my-6 mt-14">Courses and learning path</h2>
                    <div className="relative z-10 items-center flex flex-col gap-4" ref={learningPathRef}>
                        {learningPath.courses.map((course, index) => (
                            <div key={index}
                                className="mt-4 text-lg text-start w-full lg:w-8/10 xl:w-6/10 dark:text-gray-500 p-4
                             text-gray-700 font-semibold shadow-xl flex gap-4 rounded-lg justify-around z-50 relative"
                            >
                                <div className="flex-1 flex items-center justify-start">
                                    <Image
                                        src={course.course.image ? urlFor(course.course.image).url() : null}
                                        alt={course.course.title}
                                        width={300}
                                        height={300}
                                        className="rounded-lg mb-2 mt-4"
                                    />
                                </div>

                                <div className="py-4 flex-1">
                                    <p className='text-2xl text-black dark:text-white font-bold'>{course.course.title}</p>
                                    <p>{course.course.difficulty}</p>
                                    <p>{course.course.description}</p>
                                    <p>{course.note}</p>
                                </div>

                            </div>
                        ))}
                        <VerticalProgressRef targetRef={learningPathRef} />
                    </div>
                </div>
            </div>
            {/* <div className="">
                <VerticalProgress />
            </div> */}
        </main>
    )
}

export default LearningPathPage