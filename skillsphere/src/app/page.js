import { Hero } from '@/components/Hero'
import CourseList from '@/components/page/CourseList'
import { sanityClient } from '../../lib/sanity'
import { groq } from 'next-sanity'
import { getAllQuery } from '@/sanity/queries'

export default async function Home() {
  const courses = await sanityClient.fetch(getAllQuery)
  
  return (
    <main className="flex-1">
      <Hero />
      <CourseList courses={courses}/>
    </main>
  )
}

export const revalidate = 60