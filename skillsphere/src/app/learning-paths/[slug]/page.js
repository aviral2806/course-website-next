
import React from 'react'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../../lib/sanity'
import LearningPathPage from './LearningPathPage'
import { getAllLPQuery, getLPBySlugQuery } from '@/sanity/queries'

export async function generateStaticParams() {
    try {
        const learningPaths = await sanityClient.fetch(getAllLPQuery)
        return learningPaths.map((learningPath) => ({
            slug: learningPath.slug.current
        }))
    } catch (e) {
        console.error("Error fetching slugs: ", e)
        return []
    }
}

export const revalidate = 60;

export default async function LearningPage({ params }) {
    const query = `
        *[_type == "learningPath" && slug.current == $slug][0]{
            title,
            slug,
            shortDescription,
            detailedDescription,
            estimatedDuration,
            level,
            tags,
            thumbnail,
            publishedAt,
            courses[] {
            _key,
            note,
            course->{
                _id,
                title,
                slug,
                description,
                image,
                category,
                difficulty,
                price
            }
            }
        }
        `;

    const { slug } = await params
    const learningPath = await sanityClient.fetch(query, { slug })
    console.log(learningPath)

    return (
        <LearningPathPage learningPath={learningPath} />
    )
}
