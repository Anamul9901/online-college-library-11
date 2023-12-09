import { Link, useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";



const AllBooksNav = () => {
    const books = useLoaderData();
    // const { image, Name, AuthorName, Category, Description, Quantity, Rating, _id } = book;



    return (
        <div className="h-full pb-28 pt-10 max-w-[1300px] w-full mx-auto">
            <h2 className="text-center text-3xl font-bold">All book</h2>
            <div className="text-end p-4">
                <Link to='/all-bools'>
                    <button className="btn btn-primary btn-sm">available book</button></Link>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5  px-4">
                    {
                        books.map(book => <BooksCard key={book._id} book={book}  ></BooksCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooksNav;