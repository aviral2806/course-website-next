'use client'
import { motion } from "framer-motion"
import { ButtonWrapper } from "./ui_self/ButtonWrapper"
import { useRouter } from "next/navigation"

export const Hero = () => {
    const router = useRouter()
    return (
        <motion.div className="
        w-full
        h-80
        flex
        items-center
        justify-center
        flex-col 
        bg-linear-to-t
        bg-[#FFFFF0]/70 dark:bg-transparent
         dark:to-gray-800/50
         dark:from-black
        gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <motion.h1
                className="text-4xl dark:text-white font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Welcome to SkillSphere
            </motion.h1>
            <motion.p
                className="text-lg flex items-center justify-center w-8/10 text-center dark:text-gray-500 text-gray-700 font-semibold whitespace-pre-line"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Your one-stop platform for learning and mastering new skills. <br />
                Explore our wide range of courses designed to help you grow.
            </motion.p>
            <motion.div
                className="flex items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                <a href="#featured-courses">
                    <ButtonWrapper variant="light" handleClick={() => { }}>
                        Explore Courses
                    </ButtonWrapper>
                </a>

                <ButtonWrapper variant="dark" handleClick={() => router.push("/learning-paths")}>
                    View learning paths
                </ButtonWrapper>
            </motion.div>
        </motion.div>
    )
}
