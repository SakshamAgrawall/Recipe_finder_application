import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, name, fn, btn, id }) => {
  return (
    <div className="bg-blue-100 bg-gradient-to-r from-blue-200 to-blue-900 max-w-sm rounded overflow-hidden shadow-2xl">
      <img src={img} alt="Placeholder" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Some description or details about the card.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer"
          onClick={fn}
        >
          {btn}
        </button>
        <Link
          to={`/details/${id}`}
          className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
