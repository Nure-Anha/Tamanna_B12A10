import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from './Authentication/Auth/AuthContext';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const ListingDetails = () => {

    const {user} = useContext(AuthContext) ;



    // collecting id from dynamic route
    const params = useParams() ;
    console.log(params) ;
    const idOfParams = params.id ;
    console.log(idOfParams) ;
 
    
    const [specificID_Data , setSpecificID_Data] = useState([]) ;
    //  useEffect( () => {} , [] )
    useEffect( () => {
        fetch(`http://localhost:3000/listingdetails/${idOfParams}`)
        .then(res => res.json())
        .then(data => setSpecificID_Data(data))
        .catch(errors => console.log("Error Occured in Data Fetching :", errors)) 
    } , [idOfParams] )
    console.log("Fetched specific clicked id's Data using backend: ", specificID_Data) ;



   
    // handlePlaceOrder
    const handlePlaceOrder = (e) => {
        e.preventDefault() ;

        const buyername = user?.displayName ;
        console.log(buyername) ;
        const email = user?.email ;
        console.log(email) ;
        const price = specificID_Data?.price ;
        console.log(price) ;
        const product_listing_id = specificID_Data?._id ;
        console.log(product_listing_id) ;
        const product_listing_name = specificID_Data?.name ;
        console.log(product_listing_name) ;
        const quantity = specificID_Data?.category === 'Pets' ? 1 : parseInt(e.target.quantity.value) ;
        console.log(quantity) ;
        const address = e.target.address.value ;
        console.log(address) ;
        const date = e.target.date.value ;
        console.log(date) ;
        const phone = e.target.phone.value ;
        console.log(phone) ;
        const addiotional_notes = e.target.addiotional_notes.value ;
        console.log(addiotional_notes) ;


        e.target.reset() ;
        document.getElementById('my_modal_5').close();
        Swal.fire({
        title: "Good!",
        text: "Your Order is Placed Successfully, Thank You!",
        icon: "success"
        });


        // send to backend
        const orderData = {
            Buyer_Name : buyername ,
            Price : price ,
            Email : email ,
            Product_Listing_Id : product_listing_id ,
            Product_Listing_Name : product_listing_name ,
            Quantity : quantity ,
            Address : address ,
            Date_Pick_Up : date ,
            Phone : phone ,
            Addiotional_Notes : addiotional_notes 
        }
        console.log("orderData passing to Backend from front :", orderData) ;
        axios.post("http://localhost:3000/myorders" , orderData) 
        .then(resOrderData => {
            console.log("resOrderData :" , resOrderData) ;
        })
    }


   
    return (
        <div className='bg-[#f1f6fa] p-10'>
            <title>Listing Details</title>
            <div className='flex flex-col space-y-10 xl:space-x-5 xl:space-y-0 lg:flex-row pt-15 pl-10 pr-12 '>
            <div>
                <img className='w-150 rounded-2xl shadow-2xl' src={specificID_Data?.imageURL} alt="" />
            </div>

            <div className='flex flex-col space-y-10 lg:flex-row lg:space-y-0'>
                <div className='text-gray-400 font-medium'>
                    <h3 className='font-bold text-3xl mb-5 text-black'>{specificID_Data?.name} </h3>
                    <p className='mb-5'>Category: <span className='text-blue-600'>{specificID_Data?.category} </span> </p>
                    <p className='mb-5'>Owner's Email: <span className='text-blue-600'>{specificID_Data?.email}</span> </p>
                    <p className='mb-5'>Location: <span className='text-orange-400' >{specificID_Data?.location}</span> </p>
                    <p className='mb-5'><span className='text-orange-500 text-3xl'>{specificID_Data?.price} BDT</span> </p>

                    <p className='font-normal text-gray-300 mb-15'><hr /></p>

                    <p className='xl:w-170 font-normal text-gray-500'>{specificID_Data?.description}</p>

                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-sky-600 hover:bg-green-600 border-0 text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Adopt/Order Now</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center">Place Your Order</h3>
                
                <form onSubmit={handlePlaceOrder}>
                    <fieldset className="fieldset lg:ml-18 mt-5">

                        <label className="label">Buyer Name </label>
                        <input type="text" name='buyername' className="input" placeholder={user?.displayName} readOnly />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder={ user?.email} readOnly />

                        <label className="label">Product/Listing Id</label>
                        <input type="text" name='product_listing_id' className="input" placeholder={specificID_Data?._id} readOnly />


                        <label className="label">Product/Listing Name</label>
                        <input type="text" name='product_listing_name' className="input" placeholder={specificID_Data?.name} readOnly />


                        <label className="label">Quantity</label>
                        <input type="number" name='quantity' className="input" placeholder={specificID_Data?.category === 'Pets' ? '1 (Fixed for Pets)' : 'Enter Quantity'} readOnly={specificID_Data?.category === 'Pets'} />


                        <label className="label">Price</label>
                        <input type="number" name='price' className="input" placeholder={specificID_Data?.category === 'Pets' ? '0 (Fixed for Pets Category)' : `${specificID_Data?.price}`} readOnly />


                        <label className="label">Address</label>
                        <input type="text" name='address' className="input" placeholder='Enter City, Area ,...' />


                        <label className="label">Date (Pick Up)</label>
                        <input type="date" name='date' className="input" />

                        <label className="label">Phone</label>
                        <input type="text" name='phone' className="input" placeholder='Enter Your Phone no. '/>

                        <label className="label">Additional Notes</label>
                        <input type="text" name='addiotional_notes' className="input" placeholder='Add any Notes' />

                        
                        <button className="btn btn-neutral mt-4 w-80 hover:bg-green-800">Place Order</button>
                    </fieldset>
                </form>

                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn flex justify-center items-center">Close</button>
                </form>
                </div>
            </div>
            </dialog>

        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default ListingDetails;