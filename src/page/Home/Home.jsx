import { useLoaderData } from "react-router-dom";
import BookCategories from "../../components/BookCategories/BookCategories";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Inspire from "../../components/Inspire/Inspire";
import Authors from "../../components/Authors/Authors";



const Home = () => {
    const bookCate = useLoaderData();
    return (
        <div>
                <Slider />
            <div className="max-w-[1300px] w-full mx-auto">
                <BookCategories bookCate={bookCate} />
            </div>
                <Inspire/>
                <Authors/>
                <Footer />
        </div>
    );
};

export default Home;