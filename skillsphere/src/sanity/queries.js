import { groq } from "next-sanity";

export const getCourseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0]{
    _id,
    title,
    description,
    slug,
    image,
    price,
    rating,
    difficulty,
    category,
    syllabus[] {
      week,
      topic,
      description
    },
    faq[] {
      question,
      answer
    }
  }
`;

export const getAllQuery = groq`
*[_type == "course"]
`;

export const getAllLPQuery = groq`
        *[_type == "learningPath"]{
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

export const getLPbySlug = groq`
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

// export const getLPBySlugQuery = groq`
// *[_type == "learningPath" && slug.current == $slug][0]
// `;