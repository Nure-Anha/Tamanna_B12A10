import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const MyListings = () => {

    const {user} = useContext(AuthContext) ;
    
     
        
    const [myListings_Data , setMyListings_Data] = useState([]) ;
    const [loader , setLoader] = useState(true) ;
    //  useEffect( () => {} , [] )
    useEffect( () => {
        fetch(`http://localhost:3000/mylistings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyListings_Data(data) ;
            setLoader(false) ;
        })
        .catch(errors => console.log("Error Occured in Data Fetching :", errors)) 
    } , [user?.email] )
    console.log("Fetched specific email's Data using backend: ", myListings_Data) ;


    // handleUpdateBtn
    const navigate = useNavigate() ;
    const handleUpdateBtn = (id) => {
        navigate(`/updatelistings/${id}`)
    }

    // handleDelete
    const handleDel = (id) => {
        // const confirmDel = window.confirm("Are You Sure to Delete this Item?");
        // if (!confirmDel) {
        //     return;
        // }
        Swal.fire({
            title: "Are you sure?",
            text: "This item will be permanently deleted!",
            icon: "warning" ,
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then(resDSweet => {
            if (resDSweet.isConfirmed) {
                axios.delete(`http://localhost:3000/delete/${id}`)
                .then(resD => {
                console.log("resD" , resD) ;
                toast.success("Item is Deleted") ;
                const afterDeleteArr = myListings_Data.filter(t => t?._id !==  id) ;
                console.log("afterDeleteArr" , afterDeleteArr) ;
                setMyListings_Data(afterDeleteArr) ;
                })
            }
        })

        
            
        // axios.delete(`http://localhost:3000/delete/${id}`)
        // .then(resD => {
        //     console.log("resD" , resD) ;
        //     toast.success("Item is Deleted") ;
        //     const afterDeleteArr = myListings_Data.filter(t => t?._id !==  id) ;
        //     console.log("afterDeleteArr" , afterDeleteArr) ;
        //     setMyListings_Data(afterDeleteArr) ;
        // })
    }

    if(loader){
        return <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        }
    return (
        <div>
            <title>My Listings</title>

            <div className="bg-[#f1f6fa] p-10 text-black">

              {
                myListings_Data.length !== 0 ? <div> <h1 className="text-3xl font-bold mb-5 text-center">My Listings</h1> <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='text-gray-500'>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Location</th>
                                    {/* <th>Description</th> */}
                                    <th>Pick-Up Date</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* row 1 */}
                                {
                                    myListings_Data.map((j,index) => <tr key={j?._id}>
                                    <th>{index+1}</th>
                                    <td className='font-medium'><img className='w-25' src={j?.imageURL} alt="" /></td>
                                    <td className='font-medium'>{j.name} </td>
                                    <td className='font-medium'>{j.category} </td>
                                    <td className='font-medium'>{j.price} </td>
                                    <td className='font-medium'>{j.location} </td>
                                    {/* <td>{j.description} </td> */}
                                    <td className='font-medium'>{j.pickupdate} </td>
                                    <td className='font-medium'>{j.email} </td>
                                    <td className='font-medium'>
                                        <button onClick={()=>handleUpdateBtn(j?._id)} className='btn bg-blue-500  text-white hover:bg-blue-800'>Update</button>
                                        <button onClick={()=>handleDel(j?._id)} className='btn ml-2.5 bg-red-500 hover:bg-red-700 text-white'>Delete</button>
                                    </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                </div> </div> : <h3 className='font-bold text-5xl text-center text-red-500'>No List is Added Yet</h3>
              }

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyListings;