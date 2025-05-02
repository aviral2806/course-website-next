// page to show courses in cart added by user
'use client'
import { ButtonWrapper } from '@/components/ui_self/ButtonWrapper';
import useCartStore from '@/store/CartStore';
import CartCard from './CartCard';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCartStore();

    return (
        <motion.main
            className="flex-1 w-full flex flex-col dark:bg-linear-to-t bg-[#FFFFF0]/70 dark:bg-transparent
                 dark:to-gray-800/50
                 dark:from-black  p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <div className="cart-page rounded-2xl bg-white dark:bg-gray-900/70 shadow-xl p-8 m-4 h-full">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                {cart.length === 0 ? (
                    <p className='text-xl font-semibold mt-6'>Your cart is empty. Go to <Link href={'/#featured-courses'} className='underline font-bold'>courses</Link> to explore and shop!</p>
                ) : (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-6 py-10">
                            {cart.map((course) => (
                                <CartCard
                                    key={course._id}
                                    course={course}
                                    onRemove={removeFromCart}
                                />
                            ))}
                        </div>
                        <ButtonWrapper variant='dark' handleClick={clearCart} className="mt-4">
                            <div className="flex items-center justify-center gap">
                                <Trash2 size={18} className="mr-2" />
                                Clear Cart
                            </div>
                        </ButtonWrapper>
                    </div>
                )}
            </div>
        </motion.main>
    );
}
