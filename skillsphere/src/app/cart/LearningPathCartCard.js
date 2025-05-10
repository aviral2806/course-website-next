import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LearningPathCartCard({ learningPath, onRemove }) {
    const router = useRouter();

    // Navigate to the learning path details page
    const handleLearningPathClick = () => {
        router.push(`/learning-paths/${learningPath.slug}`);
    };

    // Handle removing the learning path from the cart
    const handleRemoveClick = (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up to the card
        onRemove(learningPath._id);
    };

    // Calculate total and discounted prices
    const totalPrice = learningPath.courses.reduce((acc, course) => {
        const coursePrice = parseFloat(course.course.price.replace(/[^0-9.-]+/g, ""));
        return acc + coursePrice;
    }, 0);
    const discountedPrice = totalPrice * 0.7;

    // Format prices
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalPrice);

    const formattedDiscountedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(discountedPrice);

    return (
        <div
            className="learning-path-card bg-white dark:bg-gray-700/20 border hover:cursor-pointer flex flex-col min-h-42 relative w-8/10 justify-between rounded-md p-4 shadow-md"
            onClick={handleLearningPathClick}
        >
            <button
                onClick={handleRemoveClick}
                className="text-gray-700 hover:cursor-pointer absolute top-4 right-4 hover:text-red-800 hover:scale-102 transition duration-200"
            >
                <Trash2 size={18} />
            </button>
            <div className="pr-5">
                <h2 className="text-lg font-bold">{learningPath.title}</h2>
                <p className="text-sm text-gray-600">{learningPath.shortDescription}</p>
            </div>
            <div className="mt-4">
                <span className="text-lg line-through text-gray-500 dark:text-gray-400">
                    {formattedPrice}
                </span>
                <span className="text-lg font-bold text-green-600 ml-2">
                    {formattedDiscountedPrice}
                </span>
            </div>
        </div>
    );
}