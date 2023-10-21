import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import toast, { Toaster } from "react-hot-toast";

const Favourite = () => {
  const [favourite, setFavourite] = useState([]);
  const getFavoruite = async () => {
    try {
      const favoriteDish = localStorage.getItem("Dish");
      if (favoriteDish) {
        setFavourite(JSON.parse(favoriteDish));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const RemoveItem = async (id) => {
    try {
      const existingData = JSON.parse(localStorage.getItem("Dish")) || [];
      const newData = existingData.filter((item) => item.id !== id);
      localStorage.setItem("Dish", JSON.stringify(newData));
      setFavourite(newData);
      toast.error("Item removed successfully");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFavoruite();
  }, []);

  return (
    <div>
      <Header />
      {favourite.length > 0 ? (
        <div className="mx-4 my-20 gap-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {favourite.map((i) => (
            <Card
              key={i.id}
              img={i.image}
              name={i.title}
              fn={() => {
                RemoveItem(i.id);
              }}
              btn={"REMOVE"}
              id={i.id}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-56">
          <p className="text-lg font-semibold mb-2">No favorite Recipe found</p>
          <p className="text-sm">
            Add Recipe to your favorites from the homepage.
          </p>
        </div>
      )}
      <Toaster />
      <Footer />
    </div>
  );
};

export default Favourite;
