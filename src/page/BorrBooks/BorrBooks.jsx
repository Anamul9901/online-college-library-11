import BorrBooksCard from "./BorrBooksCard";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { useLoaderData } from "react-router-dom";


const BorrBooks = () => {
    // const books = useLoaderData();
    const { user } = useAuth();


    const [borrowBooks, setBorrowBooks] = useState([]);
    const url = `https://assignment-11-server-rosy-theta.vercel.app/borrow?userEmail=${user?.email}`;
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setBorrowBooks(data))
    }, [url]);

    const handelReturn = (id) => {
        axios.delete(`https://assignment-11-server-rosy-theta.vercel.app/borrow/${id}`)
            .then(res => {
                console.log(res.data.deletedCount)
                if (res.data.deletedCount > 0) {
                    const remaining = borrowBooks.filter(booking => booking._id !== id);

                    const newBookings = [...remaining];

                    setBorrowBooks(newBookings);
                    toast.success('Return successfully')
                }

            })
            .catch(err => {
                console.log(err)
                toast.error('Opps! There is a problem')
            })
        // console.log(id)

        // const quantityInt = parseInt(Quantity)

        // const Quantity3 = Quantity2 && parseInt(Quantity2) + 1

        // console.log(Quantity3)

        // const update = { image, Name, AuthorName, Category, Quantity3, Rating }

        // axios.put(`https://assignment-11-server-rosy-theta.vercel.app/books/${book.name}`, update )
        // .then(res =>{
        //     console.log(res);

        // })
        // .catch(err =>{
        //     console.error(err);
        // })
    }




    return (
        <div className="md:h-screen pb-28 pt-10 max-w-[1300px] w-full mx-auto">
            <h2 className="text-center text-3xl font-bold pb-8">Borrowed Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-4">
                {
                    borrowBooks.map(book => <BorrBooksCard key={book._id} book={book} handelReturn={handelReturn}></BorrBooksCard>)
                }
            </div>
        </div>
    );
};

export default BorrBooks;