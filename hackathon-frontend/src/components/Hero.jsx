import { useState } from "react"
import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-[75vh] flex items-center mb-10" style={{ backgroundImage: "url('/assets/back.png')" }}>
      <div className="container mx-auto flex justify-end">
        <div className="max-w-md bg-gray-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Make money selling on our website</h2>
          <p className="text-lg text-gray-600 mb-6">Unlock the potential of your products with our platform</p>
        <Link to="/addcat"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">List an Item</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Hero;