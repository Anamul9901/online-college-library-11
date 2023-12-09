/* eslint-disable react/prop-types */
// import axios from "axios";
// import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";


const BorrBooksCard = ({ book, handelReturn }) => {

    // console.log(book)

    // console.log(book)
    const { image, Name, AuthorName, Category, Description, Quantity2, Rating, _id } = book;
// console.log(book)
    const handleBack = () =>{

        const Quantity3 = Quantity2 && parseInt(Quantity2) + 1
    
        console.log(Quantity3)
    
        const update = { image, Name, AuthorName, Category, Quantity3, Rating }
    
        axios.put(`https://assignment-11-server-rosy-theta.vercel.app/books/${book._id}`, update )
        .then(res =>{
            console.log(res);
    
        })
        .catch(err =>{
            console.error(err);
        })
    }

    

        



    return (
        <div  className="flex justify-center items-center">

            <div className=" md:w-full w-[80%] bg-slate-400 shadow-xl">
                <figure><img className="w-full h-80" src={image} alt="Book" /></figure>

                <div className="p-2">
                    <div className="">
                        <h2 className="text-xl font-bold">{Name}</h2>
                        <p>Author: {AuthorName}</p>
                        <p>Rating: {Rating}</p>
                        <div onClick={handleBack} className="card-actions justify-end">
                            <Link>
                                <button  onClick={() => handelReturn(_id)} className="btn btn-sm bg-pink-500 text-white">Return</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BorrBooksCard;