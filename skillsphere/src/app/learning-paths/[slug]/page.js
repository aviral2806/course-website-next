
import React from 'react'
import VerticalProgress from '@/components/ui_self/VerticalProgress'

async function page({ params }) {
    const slug = await params.slug
    return (
        <main className='flex-1'>
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFFF0]/70 to-transparent dark:to-gray-800/50 dark:from-black">
                <h1 className="text-4xl font-bold text-center dark:text-white">This the learning paths for {slug}</h1>
                <p className="mt-4 text-lg text-center dark:text-gray-500">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                </p>
                <p className="mt-4 text-lg text-center dark:text-gray-500">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                </p>
                <p className="mt-4 text-lg text-center dark:text-gray-500">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                </p>
                <p className="mt-4 text-lg text-center dark:text-gray-500">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                </p>
                <p className="mt-4 text-lg text-center dark:text-gray-500">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                </p>
                <p className="mt-4 text-lg text-center dark:text-gray-500">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                </p>

            </div>
            <div className="">
                <VerticalProgress />
            </div>
        </main>
    )
}

export default page