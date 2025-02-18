// src/components/StarRating.tsx
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type StarRatingProps = {
    rating: number;
    className?: string;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="text-[#ff8800]" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-[#ff8800]" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-[#bec1c5]" />);
    }

    return <div className={`flex ${className}`}>{stars}</div>;
};

export default StarRating;
