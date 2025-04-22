// components/course/SyllabusSection.jsx
'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Check } from "lucide-react"

export default function SyllabusSection({ syllabus }) {
    return (
        <section className="dark:text-white mt-10 dark:bg-gray-700/20 bg-white p-4 shadow-2xl rounded-xl hover:scale-101 transition lg:ml-4 bg-blur">
            <h2 className="text-3xl font-bold mb-2">Syllabus</h2>
            {syllabus.map((item, index) => (
                <Accordion key={index} type="single" collapsible className="w-full mt-4">
                    <AccordionItem value="item-1" className="bg-gray-400/10 hover:bg-gray-700/10 hover:dark:bg-gray-700/20 dark:bg-gray-600/10 rounded">
                        <AccordionTrigger className=" gap-2 text-lg font-bold hover:no-underline dark:text-white text-gray-800 p-5 transition-all duration-300 ease-in-out">
                            {item.week}
                        </AccordionTrigger>
                        <AccordionContent className="dark:text-gray-400 text-gray-800 flex flex-col text-base pt-1 pb-4 pl-5">
                            <span className="dark:text-gray-300 text-black text-base font-semibold">{item.topic}</span>
                            {item.description}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))
            }
        </section>
    )
}
