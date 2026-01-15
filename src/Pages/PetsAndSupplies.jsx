import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const PetsAndSupplies = () => {

     // Filter by categry
    const [categoryFilter, setCategoryFilter] = useState("");


    
    // Data fetch from Backend 
     const [f_data , setF_data] = useState([]) ;
     const [loader , setLoader] = useState(true) ;
    //  useEffect( () => {} , [] )
    useEffect( () => {
        fetch(`https://tamanna-b12a10-backend.vercel.app/fulldata?category=${categoryFilter}`)
        .then(res => res.json())
        .then(data => {
            setF_data(data) ;
            setLoader(false) ;
        })
        .catch(errors => console.log("Error Occured in Data Fetching :", errors)) 
    } , [categoryFilter] )
    console.log("Fetched Data : ", f_data) ;



   

    // handleFilterByCtgry
    const handleFilterByCtgry = (e) => {
        e.preventDefault() ;
        setCategoryFilter(e.target.value) ; 
    }

    // const filterData = f_data.filter(j => j.category === categoryFilter || categoryFilter === '') ;


    // handleSeeDetails
        const navigate = useNavigate() ;
        const handleSeeDetails = (id) => {
            navigate(`/listingdetails/${id}`) ;

        }
    
    
    const [search , setSearch] = useState('') ;
    // handleSearch
    const handleSearch = (e) => {
        e.preventDefault() ;
        setSearch(e.target.value) ;
    }
    // price range wise category filter
    const [priceRange, setPriceRange] = useState("");

    const handlePriceRange = (e) => {
        setPriceRange(e.target.value);
    };
    // const searchedData = f_data.filter(p => p.name.toLowerCase().includes(search.toLowerCase())) ;
    // console.log(searchedData) ;
    const searchedData = f_data.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = priceRange === "" || (priceRange === "low" && p.price < 1000) || (priceRange === "mid" && p.price >= 1000 && p.price <= 2000) || (priceRange === "high" && p.price > 2001);

    return matchesSearch && matchesPrice;
    });


    // pagination
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
    setCurrentPage(1);
    }, [categoryFilter, priceRange, search]);
    const totalPages = Math.ceil(searchedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = searchedData.slice(startIndex, endIndex);




    if(loader){
         return <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            }
    return (
        <div className='bg-[#f1f6fa] p-20 pb-30'>
           <title>Pets & Supplies</title>

            <h3 className='text-center font-bold text-3xl mb-15 mt-5 text-black'>All your Pets & Supplies!</h3>

            
            <div className="flex flex-col lg:flex-row lg:space-x-20 mb-5">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={handleSearch} value={search} type="search" required placeholder="Search" />
                </label>


                <select onChange={handleFilterByCtgry} value={categoryFilter} className="select select-bordered lg:w-1/3">
                    <option value="">All Categories</option>
                    <option value="Pets">Pets</option>
                    <option value="Food">Pet Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Pet Care Products</option>
                </select>

                <select onChange={handlePriceRange} value={priceRange} className="select select-bordered lg:w-1/3">
                    <option value="">All Prices</option>
                    <option value="low">Below 1000 BDT</option>
                    <option value="mid">1000-2000 BDT</option>
                    <option value="high">Above 2000 BDT</option>
                </select>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                paginatedData.map(i => <div key={i?._id} className="card bg-base-100 shadow-2xl p-3">
                    <figure>
                        <img className=' object-cover w-full h-40 rounded-md' src={i?.imageURL}  alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title mx-auto text-center font-bold">{i?.name} </h2>
                        <div className='flex justify-between space-x-10'>
                            <p className='text-gray-400 font-semibold'>Category: {i?.category} </p>
                            <p className='text-gray-400 font-semibold'>Location: {i?.location} </p>
                        </div>
                        <p className='mx-auto font-bold text-orange-600 text-lg'>{i?.price} BDT </p>
                        <div className="card-actions justify-center mt-3">
                        <button onClick={() => handleSeeDetails(i?._id)} className="btn bg-sky-500 text-white p-5">See Details</button>
                        </div>
                    </div>
                </div>)
                }
            </div>

            {/* <div className="join">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
            </div> */}
            <div className="flex justify-center mt-10">
                <div className="join">
                    {[...Array(totalPages).keys()].map(num => (
                    <button
                        key={num}
                        className={`join-item btn ${
                        currentPage === num + 1 ? "btn-active bg-sky-500 text-white" : ""
                        }`}
                        onClick={() => setCurrentPage(num + 1)}
                    >
                        {num + 1}
                    </button>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default PetsAndSupplies;