/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllBookCard = ({ book, paramsIds }) => {
    // console.log(book);
    const { image, Name, AuthorName, Category, Description, Quantity, Rating, _id } = book;
    // console.log(paramsIds)
    return (
        <div className="flex justify-center items-center">
            {
                Category === paramsIds.id &&
                <div className=" md:w-full w-[60%] bg-slate-400 shadow-xl">
                    <figure><img className="w-full h-80" src={image} alt="Book" /></figure>
                    
                    <div className="p-2">
                    <div className="">
                        <h2 className="text-xl font-bold">{Name}</h2>
                        <p>Author: {AuthorName}</p>
                        <p>Quantity: <span className="font-bold">{Quantity}</span></p>
                        <p>Rating: <span className="font-bold">{Rating}</span></p>
                        <div className="card-actions justify-end">
                            <Link to={`/signl-book/${_id}`}>
                                <button className="btn btn-sm bg-pink-500 text-white">Details</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AllBookCard;