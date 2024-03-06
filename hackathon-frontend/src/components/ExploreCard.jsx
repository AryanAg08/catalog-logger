import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Electronics", imageUrl: "/assets/elecronics.jpeg" },
  { id: 2, name: "Clothing", imageUrl: "/assets/clothing.jpg" },
  { id: 3, name: "Books", imageUrl: "/assets/books.jpeg" },
  { id: 4, name: "Furniture", imageUrl: "/assets/furniture.jpeg" },
  { id: 5, name: "Accessories", imageUrl: "/assets/accessories.jpeg" },
  { id: 6, name: "Beauty", imageUrl: "/assets/beauty.jpeg" },
  // Add more categories as needed
];

// const CategoryCard = ({ category }) => (
//     <Link to={`/products/${category.id}`} className="relative w-[200px] h-[200px] m-4 rounded-full overflow-hidden flex justify-center items-center border-2 border-gray-300 hover:border-blue-500 transition duration-300">
//       <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover" />
//       <span className="absolute inset-0 flex justify-center items-center text-white text-lg font-bold bg-black bg-opacity-50">{category.name}</span>
//     </Link>
//   );
const CategoryCard = ({ category }) => (
    <Link to={`/products/${category.id}`} className="relative w-[200px] h-[200px] m-4 rounded-full overflow-hidden flex justify-center items-center border-2 border-gray-300 hover:border-blue-500 transition duration-300">
      <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex justify-center items-center text-transparent text-lg font-bold hover:bg-black hover:bg-opacity-50 transition duration-300 hover:text-white">{category.name}</div>
    </Link>
  );

const ExploreCard = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 2, categories.length - 4));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  return (
    <div className="flex items-center w-full m-8">
      <div className="flex flex-wrap justify-center  w-full space-x-8">
      {startIndex > 0 && (
        <button onClick={handlePrev} className="">
          {/* You can replace this SVG with your arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="#000" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
        {categories.slice(startIndex, startIndex + 4).map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      {startIndex < categories.length - 4 && (
        <button onClick={handleNext} className="">
          {/* You can replace this SVG with your arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="#000" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      </div>
    </div>
  );
};

export default ExploreCard;
