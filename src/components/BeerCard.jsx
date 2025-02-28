import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={beer.image} alt={beer.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{beer.name}</h2>
      <p className="text-gray-600 text-sm">{beer.price || "Price not available"}</p>
      <p className="text-gray-500 text-sm mt-2">{beer.alcohol} ABV</p>
    </div>
  );
};

export default BeerCard;
