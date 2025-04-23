'use client'
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../../../lib/sanity"
import { BsCartCheck } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";
import { ButtonWrapper } from "./ButtonWrapper";
import useCartStore from "@/store/CartStore";


export const Card = ({ course }) => {
    const { cart, addToCart, removeFromCart } = useCartStore()
    const handleClick = () => {
        console.log(course)
        const inCart = cart.find((item) => item._id === course._id)
        if (inCart) {
            removeFromCart(course.id)
        } else {
            addToCart(course)
        }
        console.log(cart)
    }
    return (

        <div
            key={course.id}
            className="dark:bg-gray-800/30 bg-white rounded-2xl shadow-md p-4 gap-1 flex flex-col hover:shadow-l hover:scale-105 transition h-full"
        >
            <h2 className="text-xl dark:text-white font-bold mb-2">{course.title}</h2>
            <div className="w-full h-6/10 overflow-hidden">
                <Image
                    src={course.image ? urlFor(course.image).url() : null}
                    alt={course.title}
                    width={300}
                    height={300}
                    className="rounded-lg mb-2 object-cover w-full h-48"
                />
            </div>
            <p className="text-sm text-gray-500">{course.category} • {course.difficulty}</p>
            <p className=" text-gray-700 text-sm">{course.description}</p>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="dark:text-white font-bold text-2xl">{course.price}</p>
                <ButtonWrapper variant="light" classes="flex items-center justify-center gap-2 w-40 text-sm !px-2 !py-2 dark:!border-0" handleClick={handleClick}>
                    {cart.find((item) => item._id === course._id) ?
                        <BsCartX className="text-lg font-bold" />
                        :
                        <BsCartCheck className="text-lg font-bold" />
                    }
                    {cart.find((item) => item._id === course._id) ?
                        "Remove from cart"
                        :
                        "Add to cart"}
                </ButtonWrapper>
                {/* <BsCartCheck className="text-lg font-bold" />
                    Add to cart
                </ButtonWrapper> */}
            </div>

        </div>
    )
}
