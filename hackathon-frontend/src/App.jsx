import { useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddCatalogue from './pages/AddCatalogue';

function App() {
  // const {currentUser}=useContext(AuthContext);
  const currentUser=true;
  //const queryClient=new QueryClient();
  const Layout=()=>{
    return (
      //<QueryClientProvider client={queryClient}>
       <div className="">
       {/* {currentUser?
      <Navbar/>:<NavBarL/>} */}
      <Navbar/>
        <Outlet/>
        </div>
       // </QueryClientProvider>
    );

  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/addcat",
          element:<AddCatalogue/>
        },
        // {
        //   path:"/profile/:id",
        //   element:<Profile/>
        // },
        
       
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    
   
  ]);
 
    return <div >
       <RouterProvider router={router} />
    </div>;
}

export default App
