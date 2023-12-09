import { Link, useLoaderData } from "react-router-dom";
import FilterCard from "./FilterCard";

const FilterBooks = () => {
    const books = useLoaderData();
    // const { image, Name, AuthorName, Category, Description, Quantity, Rating, _id } = book;
    const fil = books.filter(boo => boo.Quantity > 0)
    // console.log(fil)



    return (
        <div className="h-full pb-28 pt-10 max-w-[1300px] w-full mx-auto">
        <h2 className="text-center text-3xl font-bold">Available book</h2>
        <div className="text-end p-4">
            <Link to='/all-books'>
                <button className="btn btn-primary btn-sm">All book</button></Link>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-4 max-w-[1300px] w-full mx-auto">
                {
                    fil.map(boo => <FilterCard  key={boo._id} book={boo}></FilterCard>)
                }
            </div>
        </div>
    );
};

export default FilterBooks;