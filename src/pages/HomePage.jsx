import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [values, setValues] = useState("");
  const [dish, setDish] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const handleFav = async (m) => {
    try {
      const existingData = JSON.parse(localStorage.getItem("Dish")) || [];
      const newData = [...existingData, m];

      localStorage.setItem("Dish", JSON.stringify(newData));
      toast.success("Added to Favourite");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=fef15cae1943439a9018ddb1c5f844f1&query=${values}`
      );
      if (data.results && data.results.length > 0) {
        setDish(data.results);
        setLoading(false);
        setNoData(false);
        toast.success("Here are your Recipe");
      } else {
        setDish([]);
        setLoading(false);
        setNoData(true);
        toast.error("No Recipe available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setNoData(true);
      toast.error("Error fetching data");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center max-w-lg p-2 mx-auto mt-20 bg-white border border-gray-300 rounded-full shadow-sm">
        <input
          className="w-full p-2 outline-none"
          type="text"
          placeholder="Search Recipes"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <svg
          onClick={handleSubmit}
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 mr-3 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      {loading && (
        <div className="flex items-center justify-center my-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
          <p className="ml-2 text-blue-500">Loading...</p>
        </div>
      )}
      {noData && (
        <p className="text-center text-gray-600 my-4 text-lg">
          No Recipe found. Please try a different search term.
        </p>
      )}
      <div className="m-4 gap-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {dish.map((i) => (
          <Card
            key={i.id}
            img={i.image}
            name={i.title}
            fn={() => {
              handleFav(i);
            }}
            btn={"ADD Favourite"}
            id={i.id}
          />
        ))}
        <Toaster />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
