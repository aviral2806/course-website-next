export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Course Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number'
    },
    {
      name: 'syllabus',
      title: 'Syllabus',
      type: 'array',
      of: [{ type: 'syllabusItem' }]
    },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [{ type: 'faqItem' }]
    }
  ]
}
