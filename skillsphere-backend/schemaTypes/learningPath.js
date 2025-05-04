export default {
    name: 'learningPath',
    title: 'Learning Path',
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
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text'
        },
        {
            name: 'detailedDescription',
            title: 'Detailed Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'estimatedDuration',
            title: 'Estimated Duration',
            type: 'string'
        },
        {
            name: 'level',
            title: 'Skill Level',
            type: 'string',
            options: {
                list: ['Beginner', 'Intermediate', 'Advanced']
            }
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime'
        },
        {
            name: 'courses',
            title: 'Courses in Order',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'course',
                            title: 'Course',
                            type: 'reference',
                            to: [{ type: 'course' }]
                        },
                        {
                            name: 'note',
                            title: 'Optional Note',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
}
