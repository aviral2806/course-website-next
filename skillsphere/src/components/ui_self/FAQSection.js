// components/course/FAQSection.jsx
'use client'
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export default function FAQSection({ faq }) {
    const ref = useRef(null)
    const inView = useInView(ref, {
        once: true,
        threshold: 0.1,
    })
    return (
        <section
            className="dark:text-white mt-10 dark:bg-gray-700/20 bg-white p-4 rounded-xl shadow-2xl hover:scale-101 transition lg:ml-4 bg-blur"
            ref={ref}
        >
            {inView && (
                <div className="">
                    <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                    <ul className="list-disc list-inside text-xl space-y-2 mt-8">
                        {faq.map((item, index) => (
                            <Accordion key={index} type="single" collapsible className="w-full mt-4">
                                <AccordionItem value="item-1" className="bg-gray-400/10 dark:bg-gray-600/10 hover:dark:bg-gray-700/20 hover:bg-gray-700/10  rounded">
                                    <AccordionTrigger className=" gap-2 text-lg font-bold hover:no-underline dark:text-white p-5 transition-all duration-300 ease-in-out">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="dark:text-gray-400 flex flex-col text-base pt-2 pb-4 pl-6">
                                        <span className="dark:text-gray-300 text-base font-semibold">{item.answer}</span>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </ul>
                </div>
            )}

        </section >
    )
}
