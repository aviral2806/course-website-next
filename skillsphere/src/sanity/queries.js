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
*[_type == "course"]{
  _id,
  title,
  slug,
  description,
  category,
  price,
  rating,
  difficulty,
  image,
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