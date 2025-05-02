import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
export default function CartCard({ course, onRemove }) {
    const router = useRouter();
    const handleCourseClick = () => {
        router.push(`/courses/${course.slug.current}`);
    };
    const handleRemoveClick = (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up to the card
        onRemove(course._id);
    };
    return (
        <div
            className="course-card bg-white dark:bg-gray-700/20 border hover:cursor-pointer flex flex-col min-h-42 relative w-8/10 justify-between rounded-md p-4 shadow-md"
            onClick={handleCourseClick}
        >
            <button
                onClick={handleRemoveClick}
                className="text-gray-700 hover:cursor-pointer absolute top-4 right-4 hover:text-red-800 hover:scale-102 transition duration-200"
            >
                <Trash2
                    size={18}

                />
            </button>
            <div className="pr-5">
                <h2 className="text-lg font-bold">{course.title}</h2>
                <p className="text-sm text-gray-600">{course.description}</p>
            </div>

            <p className="text-2xl font-bold">{course.price}</p>
        </div>
    );
}