import React, { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";
import SearchBar from "../components/SearchBar";
import fetchBeers from "../utils/fetchBeers";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBeers().then((data) => setBeers(data));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">Beer Collection</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredBeers.length > 0 ? (
          filteredBeers.map((beer) => <BeerCard key={beer.id} beer={beer} />)
        ) : (
          <p className="text-center col-span-full text-gray-600">No beers found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
