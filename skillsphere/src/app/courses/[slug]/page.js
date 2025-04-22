import { sanityClient } from "../../../../lib/sanity";
import { groq } from "next-sanity";
import { getAllQuery, getCourseBySlugQuery } from "@/sanity/queries";
import CourseDetailPage from "./CourseDetailPage";

// export async function generateStaticParams() {
    
//     try{
//         const courses = await sanityClient.fetch(getAllQuery);
//         console.log("Courses: ", courses)
//         const slugs = courses.map((course) => course.slug);
//         console.log("Slugs: ", slugs)
//         return slugs.map((slug) => ({ slug }));
//     }catch (error) {
//         console.error("Error fetching slugs: ", error);
//         return [];
//     }
// }

export async function generateStaticParams() {
    try {
        const courses = await sanityClient.fetch(getAllQuery);
        return courses.map((course) => ({
            slug: course.slug.current,
        }));
    } catch (error) {
        console.error("Error fetching slugs: ", error);
        return [];
    }
}


export const revalidate = 60; // revalidate every 60 seconds

export default async function CourseDetail({ params }){
    
   
        const {slug} = await params;
        console.log("Slug params: ", slug)
        const course = await sanityClient.fetch(getCourseBySlugQuery, { slug });
        console.log("Course: ", course)
    
	if(!course) {
        return <div className="text-white">Course not found</div>;
    }

    return (
        <CourseDetailPage course={course} />
    )
};

