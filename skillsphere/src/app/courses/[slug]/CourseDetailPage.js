'use client'
import Image from "next/image";
import courses from "@/data/courses";
import Tag from "@/components/ui_self/Tag";
import RatingStar from "@/components/ui_self/RatingStar";
import React from 'react'
import Button from "@/components/ui_self/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { NotebookPen, ShoppingBasket } from "lucide-react";
import { urlFor } from "../../../../lib/sanity";

function CourseDetailPage({ course }) {

    if (!course) {
        return <div className="text-white">Course not found</div>
    }

    const SyllabusLazy = dynamic(() => import('@/components/ui_self/SyllabusSection'), {
        ssr: false,
        loading: () => <div className="text-white">Loading...</div>
    })

    const FAQLazy = dynamic(() => import('@/components/ui_self/FAQSection'), {
        ssr: false,
        loading: () => <div className="text-white">Loading...</div>
    })

    console.log(course)
    return (
        <motion.main
            className="flex-1 w-full flex flex-col dark:bg-linear-to-t bg-[#FFFFF0]/70 dark:bg-transparent
         dark:to-gray-800/50
         dark:from-black  p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <div className="flex lg:flex-row flex-col">
                <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center p-4">
                    <Image
                        src={course.image ? urlFor(course.image).url() : null}
                        alt={course.title}
                        width={500}
                        height={500}
                        className="rounded-lg mb-2 size-full"
                    />
                </div>
                <div className="w-full lg:w-1/2 dark:text-white h-full flex items-start justify-start p-8 flex-col gap-4">
                    <h1 className="text-4xl font-bold my-2">{course.title}</h1>
                    <h1 className="text-xl text-gray-800 dark:text-gray-300/80" >{course.description}</h1>
                    <div className="flex">
                        <Tag label={course.category} />
                        <Tag label={course.difficulty} />
                    </div>
                    <RatingStar rating={course.rating} />
                    <p className="dark:text-white mt-3 font-bold text-5xl">{course.price}</p>
                    <div className="flex gap-4 mt-4">
                        <Button variant="light" bold={true}>
                            <div className="flex gap-3 items-center">
                                <NotebookPen size={22} />
                                Enroll Now
                            </div>
                        </Button>
                        <Button variant="dark" bold={true}>
                            <div className="flex gap-3 items-center">
                                <ShoppingBasket size={24} />
                                Add to wishlist
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            <SyllabusLazy syllabus={course.syllabus} />
            <FAQLazy faq={course.faq} />
        </motion.main>
    )
}

export default CourseDetailPage