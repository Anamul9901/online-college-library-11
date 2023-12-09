import { useLoaderData, useParams } from "react-router-dom";
import SignlbookCard from "./SignlbookCard";


const SignlBook = () => {
    const books = useLoaderData();
    const ids = useParams();
    // console.log(ids)
    // console.log(books);

    const filt = books.filter(boo => boo._id === ids.id);
    // console.log(filt)
    // const { image, Name, AuthorName, Category, Description, Quantity, Rating, _id } = filt;
    return (
        
        <div className="max-w-[1300px] w-full mx-auto h-screen pt-10">
            {
                filt.map(book => <SignlbookCard key={book._id} book={book}></SignlbookCard>)
            }
           
        </div>
    );
};

export default SignlBook;