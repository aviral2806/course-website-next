'use client'
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { supabaseClient } from '../../../lib/supabaseclient'
import Link from 'next/link'
import { motion } from 'framer-motion'

function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            console.log(error)
        } else {
            console.log(data)
            router.push("/")
        }
    }

    return (
        <motion.main
            className='w-full flex items-center justify-center flex-1 mb-32 dark:bg-linear-to-t dark:bg-transparent bg-[#FFFFF0]/70
         dark:to-gray-800/50
         dark:from-black'
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                y: { duration: 0.6, ease: 'easeIn' },
                opacity: { duration: 0.8, delay: 0.2, ease: 'easeIn' },
            }}
        >
            <div className="rounded-2xl flex items-start justify-center gap-4 flex-col bg-white dark:bg-[#10161F] shadow-2xl w-4/10 py-8 px-4">
                <h2 className='text-2xl font-bold'>Login to SkillSphere!</h2>
                <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className="relative w-full">
                        <input
                            type="email"
                            id="floating_outlined"
                            className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border-gray-400 rounded-lg border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="absolute 
                        text-sm text-gray-500 dark:text-gray-400 duration-300 
                        transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white    
                         dark:bg-[#10161F] px-2 peer-focus:px-2 peer-focus:text-blue-600
                          peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                          peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
                          rtl:peer-focus:left-auto start-1"
                        >
                            Email id</label>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="password"
                            id="floating_outlined"
                            className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border-gray-400 rounded-lg border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="absolute 
                        text-sm text-gray-500 dark:text-gray-400 duration-300 
                        transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white
                         dark:bg-[#10161F] px-2 peer-focus:px-2 peer-focus:text-blue-600
                          peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                          peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
                          rtl:peer-focus:left-auto start-1"
                        >
                            Password</label>
                    </div>
                    <button className='bg-black text-white border-white hover:bg-white hover:text-black hover:border-black w-full px-4 py-3 rounded-lg font-bold border transition-colors duration-300 hover:cursor-pointer'>
                        Log In
                    </button>
                </form>

                <div className="w-full text-xs text-blue-500 flex justify-center">
                    <p>or <Link href={"/signup"}><span className='underline'>Sign in</span></Link> instead</p>
                </div>
            </div>
        </motion.main>
    )
}

export default LoginPage