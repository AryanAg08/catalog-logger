import React, { useContext, useState } from "react";
import { makeRequest } from "../axios";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
const AddCatalogue = () => {
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [catalogue, setCatName] = useState({ catname: "" });
  const navigate=useNavigate();
  const [catalogueData, setCatalogueData] = useState({});
  const [property, setProperty] = useState([
    {
      id: 1,
      name: "",
      price: "",
      desc: "",
      category: "",
      imgURL: "",
      location: "",
    },
  ]);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const token = document.cookie;
  const handleInputChange = (index, field, value) => {
    setProperty((prevProperty) =>
      prevProperty.map((property, i) =>
        i === index ? { ...property, [field]: value } : property
      )
    );
  };

  const handleImage = async () => {
    if (file) {
      const imgUrl = await upload();
      setProperty((prevProperty) =>
        prevProperty.map((prop, index) =>
          index === property.length - 1 ? { ...prop, imgURL: imgUrl } : prop
        )
      );
    }
  };
  const handleCatalogueNameChange = (e) => {
    setCatalogueData({ ...catalogueData, catname: e.target.value });
  };

  const handleAddProduct = async () => {
    const newProduct = {
      id: property.length + 1,
      name: "",
      price: "",
      desc: "",
      category: "",
      imgURL: "",
      location: "",
    };
    setProperty([...property, newProduct]);
  };
  const handleCategoryChange = (index, value) => {
    setProperty((prevProperty) =>
      prevProperty.map((property, i) =>
        i === index ? { ...property, category: value } : property
      )
    );
  };

  // Array of categories
  const categories = [
    "Electronics",
    "Medicines",
    "Clothing",
    "Books",
    "Furniture",
    "Sports Equipment",
  ];

  const handleSubmit = async () => {
    try {
      console.log(property);
      console.log(token);
      // Assuming your Express server is running on http://localhost:3001
      const response = await axios.post(
        "https://nsut-backend-0f7548004ed1.herokuapp.com/api/product/addproduct",
        { ...property, cataname: catalogueData.catname, token: currentUser.token },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCatalogueData(response.data);
      console.log("Products added successfully:", response.data);
      navigate("/catalogue", { state: { catalogueData: response.data } })
    } catch (error) {
      console.log("Error adding products:", error);
    }
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to handle CSV file upload
  const handleCSVUpload = async () => {
      try{
        const formData=new FormData();
         formData.append("file",file)
         const res=await makeRequest.post("/csv",formData);
         console.log(res.data);
         alert(`Your CatlogScore is ${res.data}`);
        //  return res.data;

      }catch(err){
        console.log(err);
      }
  
    console.log("CSV file uploaded:", file);
  };

  return (
    <div className="flex flex-col bg-slate-900">
      <h2 className="flex justify-center gradient-text items-center font-bold text-4xl my-8">
        Add more products
      </h2>
      <div className="flex justify-center items-center">
        <label htmlFor="catname" className="text-[#808080]">
          Catalogue Name:
        </label>
        <input
          type="text"
          id={`catname`}
          value={catalogue.catname}
          name="catname"
          onChange={(e) => handleCatalogueNameChange(e)}
          className="border-2 border-black rounded-md py-2 text-center"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {property.map((property, index) => (
          <div
            key={index}
            className=" flex flex-col space-x-1 py-4 border-4 border-blue-500 border-solid m-4 p-4 rounded-md bg-slate-900 "
          >
            <label htmlFor={`propertyName${index}`} className=" text-[#808080]">
              Product Name:
            </label>
            <input
              type="text"
              id={`propertyName${index}`}
              value={property.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              className="border-2 border-black rounded-md py-2 text-center"
            />

            <label htmlFor={`propertyPrice${index}`} className="text-[#808080]">
              Product Price
            </label>
            <input
              type="number"
              id={`propertyPrice${index}`}
              value={property.price}
              onChange={(e) =>
                handleInputChange(index, "price", e.target.value)
              }
              className="border-2 border-black rounded-md py-1 text-center"
            />
            <label htmlFor={`propertyPrice${index}`} className="text-[#808080]">
              Product Description
            </label>
            <textarea
              id={`propertydesc${index}`}
              value={property.desc}
              onChange={(e) => handleInputChange(index, "desc", e.target.value)}
              className="border-2 border-black rounded-md py-1 text-center"
            />
            <label htmlFor={`propertyMMEN${index}`} className="text-[#808080]">
              Product Category
            </label>
            <select
              id={`propertyCategory${index}`}
              value={property.category}
              name="category"
              onChange={(e) => handleCategoryChange(index, e.target.value)}
              className="border-2 border-black rounded-md py-1 text-center"
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <label htmlFor={`propertyImage${index}`} className="text-[#808080]">
              Product Image
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="border-2 border-black rounded-md py-1 text-white text-center"
            />
            <button onClick={handleImage} className="text-white">
              Save Image
            </button>
            <label
              htmlFor={`propertyLocation${index}`}
              className="text-[#808080]"
            >
              Product Location:
            </label>
            <input
              type="text"
              id={`propertyLocation${index}`}
              value={property.location}
              onChange={(e) =>
                handleInputChange(index, "location", e.target.value)
              }
              className="border-2 border-black rounded-md py-1 text-center"
            />
          </div>
        ))}
      </div>
      <div className="flex mx-5 justify-center mt-5 space-x-1.5 mb-12">
        <button
          onClick={handleAddProduct}
          className=" bg-blue-500 outline-none p-2 text-white rounded-md"
        >
          Add More Products
        </button>
        <button
          onClick={handleSubmit}
          className="top-full right-0 bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Save Catalogue
        </button>
      </div>
      <div className="flex justify-center items-center">
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        <button onClick={handleCSVUpload} className="top-full right-0 bg-green-500 text-white py-2 px-4 rounded-md">Upload CSV</button>
      </div>
    </div>
  );
};

export default AddCatalogue;
