import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const CatalogueList = ({ product }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCatalogue, setFilteredCatalogue] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
      controls.start({
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.3 },
      });
    }, 250);

    return () => clearTimeout(timeout);
  }, [controls]);

  console.log(product);
  return (
    <div className="flex m-3">
      <motion.div
        key={product.product_id}
        className={`bg-gray-800 rounded-md p-4 shadow-lg flex flex-col items-center ${
          product.product_id % 2 === 0
            ? "md:col-span-2 lg:col-span-1"
            : "lg:col-span-2 xl:col-span-1"
        }`}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <img
          src={product.product_imageURL}
          alt={`Catalogue ${product.product_id}`}
          className="w-full h-32 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>
        <div className="flex items-center mb-2">
          <div className={`w-full h-6 mr-2 rounded-md`}>
            <span className="text-green-500">{product.product_location}</span>
          </div>
          <motion.div
            className="bg-green-500 w-full h-6 rounded-md"
            whileHover={{
              rotate: 360,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <span className="text-white">Price:</span>

            <span className="text-white">{product.product_price}</span>
          </motion.div>
        </div>
        <div className="text-gray-400 text-sm mb-2">
          Seller: {product.email}
        </div>
        <h3>{product.product_category}</h3>
        <Link
          to={`/checkauthenticity`}
          className="text-gray-400 text-sm underline mt-2"
        >
          Show More Info
        </Link>
      </motion.div>
    </div>
  );
};

export default CatalogueList;
