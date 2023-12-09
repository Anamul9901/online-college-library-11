import { useLoaderData, useParams } from "react-router-dom";
import ReadBookCard from "./ReadBookCard";


const ReadBook = () => {
    const books = useLoaderData();
    const Ids = useParams();
    // console.log(Ids);
    const filt = books.filter(book => book._id === Ids.id);
    // console.log(filt)
    return (
        <div className="max-w-[1300px] w-full md:h-screen mx-auto pt-8 p-4">
            <div>
                {
                    filt.map(book => <ReadBookCard key={book._id} book={book}></ReadBookCard>)
                }
            </div>
        </div>
    );
};

export default ReadBook;