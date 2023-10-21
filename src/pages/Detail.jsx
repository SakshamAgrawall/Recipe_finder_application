import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";

const Detail = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);

  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=fef15cae1943439a9018ddb1c5f844f1`
      );
      setDetails(data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };
  useEffect(() => {
    if (params?.id) getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);
  if (!details) {
    return null;
  }
  const { title, extendedIngredients, image, analyzedInstructions } = details;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mt-20 mb-10 mx-2 text-center">
        {title}
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 mb-20 mx-auto p-2 gap-5">
        <img
          src={image}
          alt={title}
          className="mb-4 rounded-lg max-w-s h-auto object-cover"
        />
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc ml-8">
            {extendedIngredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Instructions:</h2>
          <ol className="list-decimal">
            {analyzedInstructions[0]?.steps.map((s) => (
              <li key={s.number}>{s.step}</li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
