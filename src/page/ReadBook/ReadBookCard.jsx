/* eslint-disable react/prop-types */

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";




const ReadBookCard = ({ book }) => {
    //---------
    const [loader, setLoader] = useState(false);

    const downloadPDF = () =>{
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture).then((canvas)=>{
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf');
        })
    }

    const { image, Name, AuthorName, Category, Description, Quantity, Rating, _id } = book;


    return (
       <div>
         <div className="actual-receipt card bg-gray-600 shadow-xl text-white py-20 static">
            <div className="md:flex">
                <div className="flex-[1]">
                    <figure><img className="" src={image} alt="Shoes" /></figure>
                    <div className="text-center">
                        <h2 className="text-xl font-bold">{Name}</h2>
                        <p className="font-semibold">Author: {AuthorName}</p>
                        <p>Quantity: {Quantity}</p>
                        <p>Rating: {Rating}</p>
                    </div>
                </div>
                <div className="flex-[2] pt-6 p-2">
                    <p>{Description}</p>
                </div>

                {/* ------------- */}

            </div>
        </div>

                <div className="relative text-center -mt-20">
                <button className="receipt-modal-download-button text-white font-bold btn bg-pink-500 "
                onClick={downloadPDF}
                disabled={!(loader===false)}
                > 
                    
                    {loader?(
                        <span>Downloading</span>
                    ):(
                        <span>Download</span>
                    )}
                </button>
                </div>

       </div>
    );
};

export default ReadBookCard;