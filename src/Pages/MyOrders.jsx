import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
// import jsPDF from 'jspdf';
// import autoTable from "jspdf-autotable";

const MyOrders = () => {

    const {user} = useContext(AuthContext) ;

    const [myOrdersData , setMyOrdersData] = useState([]) ;
    useEffect(()=>{
        fetch(`http://localhost:3000/myorders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyOrdersData(data)) 
    } , [user?.email])
    console.log("Fetched specific email's Data using backend For MyOrders Page: ", myOrdersData) ;



//     // pdf generate
//     const generatePDF = () => {
//     const doc = new jsPDF();

//     // Title
//     doc.text("My Order Report", 14, 15);

//     const tableColumn = [
//         "Order ID",
//         "Product Name",
//         "Quantity",
//         "Price",
//         "Pick-up Date",
//         "Address",
//         "Phone",
//     ];

//     const tableRows = [];

//     myOrdersData.forEach((order) => {
//         tableRows.push([
//         order._id,
//         order.Product_Listing_Name,
//         order.Quantity,
//         order.Price + " BDT",
//         order.Date_Pick_Up,
//         order.Address,
//         order.Phone,
//         ]);
//     });

//     // Using autoTable (correct way)
//     autoTable(doc, {
//         head: [tableColumn],
//         body: tableRows,
//         startY: 25,
//     });

//     doc.save("My_Orders_Report.pdf");
// };



    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Product/Pet Name </th>
                            <th>Buyer Name </th>
                            <th>Price  </th>
                            <th>Quantity </th>
                            <th>Address </th>
                            <th>Date </th>
                            <th>Phone </th>
                            {/* <th>Action </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myOrdersData.map((p,index) => <tr key={p?._id}>
                            <th>{index+1} </th>
                            <td className='font-medium'>{p?.Product_Listing_Name} </td>
                            <td className='font-medium'>{p?.Buyer_Name} </td>
                            <td className='font-medium'>{p?.Price} </td>
                            <td className='font-medium'>{p?.Quantity} </td>
                            <td className='font-medium'>{p?.Address} </td>
                            <td className='font-medium'>{p?.Date_Pick_Up} </td>
                            <td className='font-medium'>{p?.Phone} </td>
                            {/* <td>
                                <button onClick={generatePDF} className="btn bg-green-600 text-white hover:bg-green-800 mb-4">Download PDF Report</button>
                            </td> */}
                        </tr>) 
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;