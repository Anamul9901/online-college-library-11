/* eslint-disable react/prop-types */
import BookCategoriCard from "./BookCategoriCard";


const BookCategories = ({bookCate}) => {
    // console.log(bookCate)
    return (
        <div className="md:pt-14 pt-10 pb-20">
            <h2 className="md:text-5xl text-4xl font-bold text-center p-8 md:p-14">BOOK <span className="text-pink-600">CATEGORIES</span></h2>
            <div className="flex items-center justify-center">
            <div className="grid md:grid-cols-4 gap-10 items-center px-4">
            {
                bookCate.map(catagori => <BookCategoriCard key={catagori._id} catagori={catagori}></BookCategoriCard>)
            }
            </div>
            </div>
        </div>
    );
};

export default BookCategories;