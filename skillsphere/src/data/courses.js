const courses = [
    {
        id: 1,
        title: "React for Beginners",
        slug: "react-for-beginners",
        description: "Learn the basics of React, components, and hooks. This course covers how to create interactive UIs using React, manage state with hooks, and understand the core concepts of React.",
        image: "/images/download.jpg",
        category: "Frontend",
        difficulty: "Beginner",
        price: "$49",
        rating: 4.5,
        syllabus: [
            "Introduction to React",
            "Creating Components",
            "JSX Syntax",
            "State and Props",
            "Handling Events",
            "Using useState Hook",
            "Using useEffect Hook",
            "Conditional Rendering",
            "Forms in React",
            "React Router Basics"
        ],
        faq: [
            {
                question: "What do I need to know before taking this course?",
                answer: "A basic understanding of HTML, CSS, and JavaScript is recommended, but not required."
            },
            {
                question: "Will I be able to build real-world applications?",
                answer: "Yes, this course will guide you through building simple applications, and you will gain enough knowledge to build more advanced projects."
            },
            {
                question: "Do I need any tools to start learning React?",
                answer: "You only need a text editor (like VS Code) and a modern browser like Chrome. We'll guide you through setting up the development environment."
            },
            {
                question: "What version of React is this course using?",
                answer: "This course uses the latest stable version of React, including the latest hooks and features."
            },
            {
                question: "How long will it take to complete this course?",
                answer: "The course can be completed in approximately 3-4 weeks, depending on how much time you can dedicate."
            },
            {
                question: "Do you offer a certificate after completion?",
                answer: "Yes, you'll receive a certificate upon completing the course and passing the final project."
            }
        ]
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        slug: "advanced-javascript",
        description: "Deep dive into closures, prototypal inheritance, async programming, and more advanced concepts of JavaScript. Perfect for developers who want to master JavaScript.",
        image: "/images/download1.jpeg",
        category: "Programming",
        difficulty: "Advanced",
        price: "$99",
        rating: 4,
        syllabus: [
            "JavaScript Closures",
            "Prototypal Inheritance",
            "Asynchronous JavaScript (Promises, async/await)",
            "Event Loop and Callbacks",
            "Design Patterns in JavaScript",
            "JavaScript Modules",
            "Deep Dive into ES6+ Features",
            "Memory Management and Optimization",
            "Error Handling in JavaScript",
            "Testing and Debugging JavaScript"
        ],
        faq: [
            {
                question: "Is this course for beginners?",
                answer: "No, this course is intended for developers who already have a basic understanding of JavaScript and want to learn advanced concepts."
            },
            {
                question: "Do I need to know ES6 features before starting?",
                answer: "It's not mandatory, but having a basic knowledge of ES6 features like arrow functions and promises will help you get the most out of the course."
            },
            {
                question: "How will this course improve my JavaScript skills?",
                answer: "You will understand the deeper concepts and advanced techniques, enabling you to write cleaner, more efficient, and more maintainable JavaScript code."
            },
            {
                question: "Do I need to install any tools to follow along?",
                answer: "You will need a modern JavaScript environment (like Node.js) to run code examples and experiments. We will guide you on setting it up."
            },
            {
                question: "Will this course cover frameworks like React or Angular?",
                answer: "No, this course focuses purely on JavaScript fundamentals. However, the skills you learn can be applied to any JavaScript framework."
            }
        ]
    },
    {
        id: 3,
        title: "Tailwind CSS Mastery",
        slug: "tailwind-css-mastery",
        description: "Build beautiful UIs using Tailwind utility classes. Learn how to create responsive designs, customize Tailwind, and integrate it with frameworks like React and Vue.",
        image: "/images/download3.jpeg",
        category: "Design",
        difficulty: "Intermediate",
        price: "$59",
        rating: 3.5,
        syllabus: [
            "Introduction to Tailwind CSS",
            "Utility-first CSS Concept",
            "Responsive Design with Tailwind",
            "Customizing Tailwind Configuration",
            "Creating Layouts with Tailwind",
            "Building a Simple Project with Tailwind",
            "Using Tailwind with React and Vue",
            "Advanced Styling Techniques in Tailwind",
            "Design Systems and Tailwind",
            "Tailwind CSS Best Practices"
        ],
        faq: [
            {
                question: "Do I need to know CSS before taking this course?",
                answer: "Having a basic understanding of CSS is helpful, but not necessary. We cover all the essentials while using Tailwind."
            },
            {
                question: "Can I use Tailwind CSS with other frameworks like React or Vue?",
                answer: "Yes! Tailwind is highly compatible with modern frameworks like React, Vue, and even with plain HTML."
            },
            {
                question: "Is this course suitable for beginners?",
                answer: "This course is targeted at intermediate learners who already have some experience with CSS and want to improve their design skills with Tailwind."
            },
            {
                question: "How is Tailwind different from other CSS frameworks like Bootstrap?",
                answer: "Tailwind is a utility-first CSS framework, meaning you apply utility classes directly to elements. It gives you more control and flexibility compared to traditional frameworks like Bootstrap."
            },
            {
                question: "Do I need a build process for using Tailwind CSS?",
                answer: "While you can use Tailwind without a build process, we recommend using PostCSS or Webpack for more advanced features and better performance in production."
            }
        ]
    }
]

export default courses;
