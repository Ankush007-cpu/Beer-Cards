import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search beers..."
        className="p-3 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
