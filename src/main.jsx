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
import PetsAndSupplies from './Pages/PetsAndSupplies.jsx';
import FullData from './Pages/FullData.jsx';
import ListingDetails from './Pages/ListingDetails.jsx';
import MyListings from './Pages/MyListings.jsx';
import UpdateLisitngs from './Pages/UpdateLisitngs.jsx';
import MyOrders from './Pages/MyOrders.jsx';
import PrivateRoute from './Pages/PrivateRoute.jsx';
import About from './Pages/About.jsx';
import AdoptionProcess from './Pages/AdoptionProcess.jsx';
import Stats from './Pages/Stats.jsx';
import Testimonials from './Pages/Testimonials.jsx';
import FAQ from './Pages/FAQ.jsx';
import News from './Pages/News.jsx';
import TermsPolicy from './Pages/TermsPolicy.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Services from './Pages/Services.jsx';
import Returns from './Pages/Returns.jsx';
import DashboardLayout from './Layouts/DashboardLayout.jsx';
import DashboardHome from './Dashboard/DashboardHome.jsx';
import AdoptionTips from './Components/AdoptionTips.jsx';
import Blog from './Components/Blog.jsx';
import Profile from './Dashboard/Profile.jsx';


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
      {path:'adoptionprocess' , Component:AdoptionProcess} ,
      {path:'stats' , Component:Stats} ,
      {path:'testimonials' , Component:Testimonials} ,
      {path:'faq' , Component:FAQ} ,
      {path:'news' , Component:News} ,
      {path:'termspolicy' , Component:TermsPolicy} ,
      {path:'contactus' , Component:ContactUs} ,
      {path:'services' , Component:Services} ,
      {path:'returns' , Component:Returns} ,
      // {path:'/dashboard/addlisting' , element: <PrivateRoute> <AddListing></AddListing> </PrivateRoute>} ,
      {path:'/adoptiontips' , element: <PrivateRoute> <AdoptionTips></AdoptionTips> </PrivateRoute>} ,
      {path:'/blog' , element: <PrivateRoute> <Blog></Blog> </PrivateRoute>} ,
      {path:'login' , Component:Login} ,
      {path:'register' , Component:Register} ,
      {path:'petsAndsupplies' , Component:PetsAndSupplies} ,
      {path:'about' , Component:About} ,
      {path:'fulldata' , Component:FullData} ,
      {path:'listingdetails/:id' , element: <ListingDetails></ListingDetails> } ,
      // {path:'/dashboard/mylistings' , element: <PrivateRoute> <MyListings></MyListings> </PrivateRoute>} ,
      // {path:'/dashboard/updatelistings/:id' , Component:UpdateLisitngs} ,  
      // {path:'/dashboard/myorders' , element: <PrivateRoute> <MyOrders></MyOrders> </PrivateRoute>} ,  
      
    ]
  },

  {
    path: 'dashboard' ,
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,
    children: [
      {index:true , Component: DashboardHome} ,
      {path:'/dashboard/addlisting' , Component: AddListing} ,
      {path:'/dashboard/mylistings' , Component: MyListings} ,
      {path:'/dashboard/updatelistings/:id' , Component:UpdateLisitngs} ,  
      {path:'/dashboard/myorders' , Component: MyOrders} , 
      {path:'/dashboard/profile' , Component: Profile} , 
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>   
      <RouterProvider router={router} />     {/* AuthProvider's {children} = <RouterProvider router={router} */}
    </AuthProvider>
  </StrictMode>,
)
