import axios from 'axios';
import React from 'react';
import { allData } from './Data';

const FullData = () => {

    // handleDataUpload
    const handleDataUpload = () => {
        axios.post('http://localhost:3000/fulldata' , allData) 
        .then(resFullD => {
            console.log(resFullD) ;
        })
    }



    
    return (
        <div className='bg-[#f1f6fa] p-30 '>
            <button onClick={handleDataUpload} className='btn bg-amber-300 ml-120'>Large Data Upload</button>
        </div>
    );
};

export default FullData;