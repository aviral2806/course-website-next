import { Hero } from '@/components/Hero'
import CourseList from '@/components/page/CourseList'
import { sanityClient } from '../../lib/sanity'
import { groq } from 'next-sanity'
import { getAllQuery } from '@/sanity/queries'
import ScrollProvider from '@/components/ScrollProvider'

export default async function Home() {
  const courses = await sanityClient.fetch(getAllQuery)

  return (
    <main className="flex-1 h-[150vh]">
      <ScrollProvider>
        <Hero />
        <CourseList courses={courses} />
      </ScrollProvider>

    </main>
  )
}

export const revalidate = 60