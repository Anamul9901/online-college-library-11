import { useLoaderData, useParams } from "react-router-dom";
import AllBookCard from "./AllBookCard";



const AllBook = () => {
    const books = useLoaderData();
    const paramsIds = useParams();
    // console.log(paramsIds);


    return (
        <div className="md:h-screen">
            <h2 className="text-4xl font-bold text-center py-8"><span className="text-pink-600">{paramsIds.id}</span> Book</h2>

            <div className="flex  justify-center items-center">
                <div className=" grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-5 max-w-[1300px] w-full mx-auto px-4">
                    {
                        books.map(book => <AllBookCard key={book._id} book={book} paramsIds={paramsIds}></AllBookCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllBook;