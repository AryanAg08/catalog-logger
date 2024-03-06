import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between bg-slate-900 text-white py-4 px-6">
      <div className="logo-container">
        <h1>Footer</h1>
      </div>
      <div className="flex items-center">
        {/* Add any footer content here */}
      </div>
      <div className="hidden lg:flex md:flex lg:flex-1 items-center justify-end font-normal space-x-6">
        {/* Add footer links or any other content */}
      </div>
      <div className="lg:hidden block bg-slate-900 text-white py-12 px-8 ">
        {/* Add any mobile-specific footer content */}
      </div>
    </footer>
  );
};

export default Footer;
