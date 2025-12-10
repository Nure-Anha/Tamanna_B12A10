import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const UpdateLisitngs = () => {

    const {user} = useContext(AuthContext) ;


    // update myUpdate_Data_Info product e kortc sei id backend e pathate 
    const paramID = useParams() ;
    console.log(paramID) ;
    const IDofParam = paramID.id ;
    console.log("IDofParam" , IDofParam) ;


    const [myUpdate_Data_Info , setMyUpdate_Data_Info] = useState([]) ;
        //  useEffect( () => {} , [] )
        useEffect( () => {
            axios.get(`http://localhost:3000/listingdetails/${IDofParam}`)
            .then(res => {
                setMyUpdate_Data_Info(res.data) ;
            })
        } , [IDofParam] )
        console.log("Get specific ID's Data for update: ", myUpdate_Data_Info) ;




    // handleCategoryOnchange
    const [categoryyy , setCategoryyy] = useState('') ;
    const handleCategoryOnchange = (e) => {
        setCategoryyy(e.target.value) ;
        console.log("categoryyy" , categoryyy) ;
    }

    
    const navigate = useNavigate() ;
    // handleUpdateList
        const handleUpdateChanges = (e) => {
            e.preventDefault() ;
    
            const name = e.target.name.value ;
            console.log("name :" , name) ;
            const category = e.target.category.value ;
            console.log("category :" , category) ;
            const price = categoryyy === 'Pets' ? 0 : e.target.price.value ;
            console.log("price :" , price) ;
            const location = e.target.location.value ;
            console.log("location :" , location) ;
            // const description = e.target.description.value ;
            // console.log("description :" , description) ;
            const imageURL = e.target.imageURL.value ;
            console.log("imageURL :" , imageURL) ;
            const pickupdate = e.target.pickupdate.value ;
            console.log("pickupdate :" , pickupdate) ;
            const email = user?.email ;
            console.log("email :" , email) ;
    
    
            e.target.reset() ; 
            toast.success('List Updated Successfully!') ;
            setTimeout(()=>{
                navigate("/mylistings")
            } , 1600)


        // put updated changes to backend
        const updateFormData  = {
            name : name ,
            category : category ,
            price : parseInt(price) ,
            location : location ,
            imageURL : imageURL ,
            // description : description ,
            pickupdate : pickupdate ,
            email : email
        }
        console.log("updateFormData Items :", updateFormData) ;

        // put updated data to backend
        axios.put(`http://localhost:3000/updatelistings/${IDofParam}` , updateFormData)  //sending data to backend
        .then(resUpdateFormData => {
            console.log("resUpdateFormData :" , resUpdateFormData) ;
        })


    }


    return (
        <div className='lg:p-20 bg-[#f1f6fa]'>
            <div className="hero bg-base-200 min-h-screen shadow-2xl w-full">
                <div className="hero-content flex-col">
                    <div className=" text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update List</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleUpdateChanges}>
                                <fieldset className="fieldset">
                                    
                                    <label className="label">Product/Pet Name </label>
                                    <input type="text" name='name' className="input" defaultValue={myUpdate_Data_Info?.name} />

                                    <label className="label">Category</label>
                                    <select onChange={handleCategoryOnchange} defaultValue={myUpdate_Data_Info?.category} name='category' className="select">
                                        <option>Pets</option>
                                        <option>Food</option>
                                        <option>Accessories</option>
                                        <option>Care Products</option>
                                    </select>

                                    <label className="label">Price</label>
                                    <input type="number" name='price' className="input" defaultValue={myUpdate_Data_Info.price}  readOnly={(categoryyy || myUpdate_Data_Info?.category) === 'Pets'} />


                                    <label className="label">Location</label>
                                    <input type="text" name='location' className="input" defaultValue={myUpdate_Data_Info?.location}/>


                                    <label className="label">Image (URL)</label>
                                    <input type="text" name='imageURL' className="input" defaultValue={myUpdate_Data_Info?.imageURL} />


                                    <label className="label">Pick-Up Date</label>
                                    <input type="date" name='pickupdate' className="input" defaultValue={myUpdate_Data_Info?.pickupdate} />


                                    {/* <label className="label">Description</label>
                                    <input type="text" name='description' className="input" defaultValue={myUpdate_Data_Info?.description} /> */}

                                    <label className="label">Email</label>
                                    <input type="email" name='email' value={user?.email} className="input" readOnly />

                                    
                                    <button className="btn btn-neutral mt-4 w-80">Update Changes</button>
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

export default UpdateLisitngs;