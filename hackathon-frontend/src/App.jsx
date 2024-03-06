import { useContext, useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import AddCatalogue from "./pages/AddCatalogue";
import ImageCategory from './pages/ImageCategory';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBarL from './components/NavBarL';


function App() {
  const {currentUser}=useContext(AuthContext);
  const queryClient=new QueryClient();
  const Layout=()=>{
    return (
      <QueryClientProvider client={queryClient}>
       <div className="">
       {!currentUser?
      <Navbar/>:<NavBarL/>}
      {/* <Navbar/> */}
        <Outlet/>
        </div>
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/addcat",
          element: <AddCatalogue />,
        },
        {
          path:"/products/:id",
          element:<ImageCategory/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
        
       
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
