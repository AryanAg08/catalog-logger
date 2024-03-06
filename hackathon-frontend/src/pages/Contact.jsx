import React, { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", inputs);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-opacity-75 bg-[url('')]">
      <div className="bg-blue-100 p-8 rounded shadow-md w-full lg:w-[50%] flex items-center">
        <div className="w-full">
          <h1 className="text-2xl font-semibold text-[#176B87] mb-4">
            Contact Us
          </h1>
          <form className="flex flex-col gap-4 m-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
            />
            <textarea
              placeholder="Message"
              name="message"
              value={inputs.message}
              onChange={handleChange}
              rows={4}
              className="border-none border-b-2 border-blue-100 p-2 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 border-none hover:bg-[#1c424e] bg-[#176B87] text-white font-bold cursor-pointer rounded-md "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
