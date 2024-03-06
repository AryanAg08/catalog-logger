import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
 
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        type:''
      });
      const [err, setErr] = useState(null);
      const navigate = useNavigate();
      const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prev => ({
          ...prev,
          [name]: value
        }));
      }
     const handleClick=async e=>{
      e.preventDefault();
    
      try{
        
        await axios.post("https://nsut-backend-0f7548004ed1.herokuapp.com/api/auth/register",inputs)
        navigate("/")
      }catch(err){
        console.log(err)
        // setErr(err.response.data);
      }
     }
    
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
    
      const handlePictureChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        setInputs({ ...inputs, picture: file });
      };

  return (
    <div className="flex items-center justify-center h-screen bg-opacity-75 bg-[url('')]">
      <div className="bg-blue-100 p-8 rounded shadow-md w-full lg:w-[50%] flex items-center">
        <div className="w-[50%]">
          <h1 className="text-2xl font-semibold text-[#176B87] mb-4">SignUp</h1>
          <form className="flex flex-col gap-4 m-3">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
            />
            <div className="flex items-center gap-4">
              <label htmlFor="buyer" className="flex items-center">
                <input
                  type="radio"
                  id="buyer"
                  name="type"
                  value={0}
                  onChange={handleChange}
                />
                <span className="ml-2">Buyer</span>
              </label>
              <label htmlFor="seller" className="flex items-center">
                <input
                  type="radio"
                  id="seller"
                  name="type"
                  value={1}
                  onChange={handleChange}
                />
                <span className="ml-2">Seller</span>
              </label>
            </div>
            <button
              onClick={handleClick}
              className="w-1/2 p-2 border-none hover:bg-[#1c424e] bg-[#176B87] text-white font-bold cursor-pointer rounded-md "
            >
              Register
            </button>
          </form>
          <Link to="/">
          <button onClick={togglePopup} className="mt-4 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Close
          </button></Link>
        </div>
        <div className="hidden lg:block ml-auto w-[50%] pl-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3-WXJ5Z7o2cUdx6QNvRc-bQa7SKlcj1g7g&usqp=CAU"
            alt=""
            className="object-cover w-full h-full shadow-md rounded-lg"
            style={{ width: "350px", height: "300px" }} // Set width and height
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
