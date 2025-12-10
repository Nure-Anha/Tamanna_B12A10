import React, {useContext, useState } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddListing = () => {

    const {user} = useContext(AuthContext) ;


    const [categoryy , setCategoryy] = useState('') ;
    // handleSelectCategory
    const handleSelectCategory = (e) => {
        setCategoryy(e.target.value) ;
    }


    const navigate = useNavigate() ;
    // handleAddListingSave
    const handleAddListingSave = (e) => {
        e.preventDefault() ;

        const name = e.target.name.value ;
        console.log("name :" , name) ;
        const category = e.target.category.value ;
        console.log("category :" , category) ;
        const price = e.target.price.value ;
        console.log("price :" , price) ;
        const location = e.target.location.value ;
        console.log("location :" , location) ;
        const description = e.target.description.value ;
        console.log("description :" , description) ;
        const imageURL = e.target.imageURL.value ;
        console.log("imageURL :" , imageURL) ;
        const pickupdate = e.target.pickupdate.value ;
        console.log("pickupdate :" , pickupdate) ;
        const email = user?.email ;
        console.log("email :" , email) ;


        e.target.reset() ;
        toast.success('Pet/Product List is added!') ;
        setTimeout(()=>{
            navigate('/mylistings')
        }, 1600)


        // Send Add Listing to backend
        const addListingFormgData  = {
            name : name ,
            category : category ,
            price : categoryy === 'Pets' ? 0 : parseInt(price) ,
            location : location ,
            description : description ,
            imageURL : imageURL ,
            pickupdate : pickupdate ,
            email : user?.email
        }
        console.log("addListingFormgData Items :", addListingFormgData) ;

        // pass data to backend
        axios.post('http://localhost:3000/addlisting' , addListingFormgData)  //sending data to backend
        .then(resAddListing => {
            console.log("resAddListing :" , resAddListing) ;
        })

    }



    return (
        <div className='p-10 bg-[#f1f6fa] '>
            <title>Add Listing</title>
           
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col bg-white p-20 rounded-2xl shadow-2xl">
                        <div className="text-center  w-200">
                            <h1 className="text-5xl font-bold text-black">Add New Listing</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleAddListingSave}>
                                    <fieldset className="fieldset">

                                        <label className="label">Product/Pet Name </label>
                                        <input type="text" name='name' className="input" placeholder="Enter Product/Pet Name " />

                                        <label className="label">Category</label>
                                        <select onChange={handleSelectCategory} defaultValue="Select a Category" name='category' className="select">
                                             <option disabled={true}>Select a Category</option>
                                             <option>Pets</option>
                                             <option>Food</option>
                                             <option>Accessories</option>
                                             <option>Care Products</option>
                                        </select>

                                        <label className="label">Price</label>
                                        <input type="number" name='price' className="input" disabled={categoryy === 'Pets'} placeholder={categoryy === 'Pets' ? '0 (Fixed for pets)' : 'Enter Price'} />


                                        <label className="label">Location</label>
                                        <input type="text" name='location' className="input" placeholder="City, Area..." />


                                        <label className="label">Description</label>
                                        <input type="text" name='description' className="input" placeholder="Describe the pet or product" />


                                        <label className="label">Image (URL)</label>
                                        <input type="text" name='imageURL' className="input" placeholder="https://example.com/pet.jpg" />


                                        <label className="label">Pick-Up Date</label>
                                        <input type="date" name='pickupdate' className="input" />

                                        <label className="label">Email</label>
                                        <input type="email" name='email' value={user?.email} className="input" readOnly />

                                        
                                        <button className="btn btn-neutral mt-4">Save</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddListing;