import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home.jsx';
import Root from './Layouts/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import CategoriesBtn from './Pages/Categories_Section/CategoriesBtn.jsx';
import PetsCategory from './Pages/Categories_Section/PetsCategory.jsx';
import FoodCategory from './Pages/Categories_Section/FoodCategory.jsx';
import AccessoriesCategory from './Pages/Categories_Section/AccessoriesCategory.jsx';
import CareProdCategory from './Pages/Categories_Section/CareProdCategory.jsx';
import AddListing from './Pages/AddListing.jsx';
import Register from './Pages/Authentication/Register.jsx';
import Login from './Pages/Authentication/Login.jsx';
import AuthProvider from './Pages/Authentication/Auth/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {index:true , Component:Home} ,
      {path:'categories' , Component:CategoriesBtn} ,
      {path:'petscategory' , Component:PetsCategory} ,
      {path:'foodcategory' , Component:FoodCategory} ,
      {path:'accessoriescategory' , Component:AccessoriesCategory} ,
      {path:'careprodcategory' , Component:CareProdCategory} ,
      {path:'addlisting' , Component:AddListing} ,
      {path:'login' , Component:Login} ,
      {path:'register' , Component:Register} ,
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>   
      <RouterProvider router={router} />     {/* AuthProvider's {children} = <RouterProvider router={router} */}
    </AuthProvider>
  </StrictMode>,
)
