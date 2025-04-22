import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStar = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
    }

    return <div className="flex">{stars}</div>;
};

export default RatingStar;
