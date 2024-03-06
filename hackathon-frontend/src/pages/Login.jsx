import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });
      const [err, setErr] = useState(null);
      const [isOpen, setIsOpen] = useState(false);
      const navigate=useNavigate();
      const handleChange=(e)=>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
      }
      const {login}=useContext(AuthContext);
      const handleLogin=async (e)=>{
        e.preventDefault()
        try{
        const res=await login(inputs);
        navigate("/")
        }catch(err){
          if (err.response && err.response.data && err.response.data.message) {
            setErr(err.response.data.message);
          } else {
            setErr("An unexpected error occurred.");
          }
        }
      }
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
    
    // State to track if popup is open
    
    
    
      const handleClose = () => {
        setIsOpen(false); // Close the popup
      };
  return (
    <div className="flex items-center justify-center h-screen bg-opacity-75 bg-[url('')]">
      <div className="bg-blue-100 p-8 rounded shadow-md w-full lg:w-[50%] flex items-center">
        <div className="w-[50%]">
          <h1 className="text-2xl font-semibold text-[#176B87] mb-4">Login</h1>
          <form className="flex flex-col gap-4 m-3">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
              onChange={handleChange}
            />
            <button
              onClick={handleLogin}
              className="w-full p-2 border-none hover:bg-[#1c424e] bg-[#176B87] text-white font-bold cursor-pointer rounded-md "
            >
              Login
            </button>
          </form>
          <Link to="/">
              <button
                onClick={handleClose}
                className="mt-4 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
              </Link>
        </div>
        <div className="hidden lg:block ml-auto w-[50%] pl-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3-WXJ5Z7o2cUdx6QNvRc-bQa7SKlcj1g7g&usqp=CAU"
            alt="Login"
            className="object-cover w-full h-full shadow-md rounded-lg"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
