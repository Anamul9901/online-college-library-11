/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BookCategoriCard = ({ catagori }) => {
    // console.log(catagori)
    return (
        <div className=" bg-base-100 shadow-xl border-red-300">
            <figure >
                <img src={catagori.image} alt="Shoes" className="w-full h-80 " />
            </figure>
            <div className="flex justify-center items-center text-center pb-3 ">
                <div>
                <h2 className="text-2xl font-semibold p-2">{catagori.name}</h2>
                <div className="">
                    <Link to={`books/${catagori.name}`}>
                        <button className="btn text-white bg-pink-500 btn-sm">Books</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>

    )
};

export default BookCategoriCard;