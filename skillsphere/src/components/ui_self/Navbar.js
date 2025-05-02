'use client'
import useCartStore from "@/store/CartStore";
import { ShoppingCart } from "lucide-react";
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Menu, User, Moon, Sun } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuthUser } from '@/hooks/useAuthUser'
import { supabaseClient } from '../../../lib/supabaseclient'


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const { user, loading } = useAuthUser()

    const { cart } = useCartStore()

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark", true)
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("dark", false)
        }
    }, [darkMode])


    return (
        <motion.nav
            className="w-full flex items-center justify-between px-6 py-4 bg-[#FFFFF0]/70 dark:bg-gray-800/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}

        >
            <Link href="/" className="text-2xl dark:text-white font-bold tracking-tight">
                SkillSphere
            </Link>

            <div className="hidden md:flex items-center dark:text-gray-300 font-bold gap-6">
                <Link href="/#featured-courses" className="text-sm hover:underline" scroll={false}>
                    Courses
                </Link>
                <Link href="/about" className="text-sm hover:underline">
                    About
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                    Contact
                </Link>
                <div
                    className=""
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ?
                        <Sun
                            size={18}
                            strokeWidth={3}
                        />
                        :
                        <Moon
                            size={18}
                            strokeWidth={3}
                        />
                    }
                </div>
                <Link href="/cart">
                    <div className="relative">
                        <span className="rounded-md right-[-5px] top-[-6px] py-[2px] px-[4px] bg-red-500 absolute text-[8px] text-white">{cart.length}</span>
                        <ShoppingCart size={18} strokeWidth={3} />
                    </div>
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer font-bold">
                            <User size={18} strokeWidth={3} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className={`dark:bg-black bg-white dark:text-white p-2 border-gray-700 border-1`}>
                        <DropdownMenuItem className="px-2 hover:bg-black">Profile</DropdownMenuItem>
                        {loading && `loading...`}
                        {!loading && user ? (
                            <DropdownMenuItem className="px-2" onClick={() => supabaseClient.auth.signOut()}>
                                Log out
                            </DropdownMenuItem>
                        ) : (
                            <Link href="/login">
                                <DropdownMenuItem className="px-2">
                                    Login
                                </DropdownMenuItem>
                            </Link>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="md:hidden dark:text-white flex items-center justify-center">
                <div
                    className=""
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ?
                        <Sun
                            size={18}
                            strokeWidth={3}
                        />
                        :
                        <Moon
                            size={18}
                            strokeWidth={3}
                        />
                    }
                </div>
                <Link href="/cart">
                    <div className="relative ml-2">
                        <span className="rounded-md right-[-5px] top-[-6px] py-[2px] px-[4px] bg-red-500 absolute text-[8px] text-white">{cart.length}</span>
                        <ShoppingCart size={18} strokeWidth={3} />
                    </div>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex justify-start gap-2 items-center w-min cursor-pointer ml-2">
                            <User size={17} className="mr-2" strokeWidth={3} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" className={`bg-black text-white p-2 border-gray-700 border-1 ml-4`}>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Sheet>
                    <SheetTrigger asChild>
                        <Menu className="w-5 h-5 cursor-pointer" strokeWidth={3} />
                    </SheetTrigger>
                    <SheetContent side="left" className={`dark:bg-black dark:text-white p-4 border-gray-700 border-1`}>
                        <div className="flex flex-col gap-4 mt-8 pl-4">
                            <Link href="/#featured-courses" scroll={false}>Courses</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>

                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.nav>
    )
}
