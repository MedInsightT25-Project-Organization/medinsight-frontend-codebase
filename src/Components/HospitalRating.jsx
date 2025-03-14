import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const HospitalRating = ({ratings}) => {

    const stars = []

    for (let i = 1; i <= 5; i++) {
        if (i <= ratings) {
            stars.push(<FaStar key={i} className="text-yellow-500" />)
        } else if (i - 0.5 <= ratings) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-gray-400" />);
        }

    }
    return (
        <div className="flex gap-1">{stars}</div>
    )
}

export default HospitalRating
