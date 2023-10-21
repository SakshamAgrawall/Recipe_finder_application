import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
