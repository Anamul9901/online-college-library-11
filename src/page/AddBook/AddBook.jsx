import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";



const AddBook = () => {
    const {user} = useAuth();
    console.log(user.email);

    // const [borrowBooks, setBorrowBooks] = useState([]);
    // const url = `https://assignment-11-server-rosy-theta.vercel.app/borrow?userEmail=${user?.email}`;
    // useEffect(() => {
    //     fetch(url, { credentials: 'include' })
    //         .then(res => res.json())
    //         .then(data => setBorrowBooks(data))
    // }, [url]);

    const handleAddbook = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const Category = form.category.value;
        const image = form.image.value;
        const AuthorName = form.author.value;
        const Quantity = form.quantity.value;
        const Description = form.description.value;
        const Rating = form.ratingq.value;
        form.reset();

        // console.log(name, category, image, author, quantity, description, ratingq)
        const alldata = { Name, Category, image, AuthorName, Quantity, Description, Rating }
        console.log(alldata)


        if(user?.email === 'anamulhaque990@gmail.com'){

            axios.post('https://assignment-11-server-rosy-theta.vercel.app/books', alldata,)
                .then(data => {
                    console.log(data)
                    toast.success('Successfully add')
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Opps! There is a problem.')
                })
        }
        else{
            toast.error('Only admin can added book')
        }
       


    }

    return (
        <div className="styleAddProduct   min-h-screen pt-10">
            <div className="max-w-[1300px] mx-auto  p-3 flex justify-center">
                <div className="card text-black bg-pink-200 w-full md:w-1/2 shadow-2xl pb-12 px-2">
                    <h2 className="text-center text-3xl font-bold mb-6 pt-10 pb-6">Add Your New Book</h2>
                    <div className="flex justify-center">
                        <form onSubmit={handleAddbook}>
                            <div className="">
                                <div className="md:flex gap-5 mb-5">
                                    <div className="w-full">
                                        <h2>Name</h2>
                                        <input type="text" name="name" placeholder="Name"
                                            required className="input input-bordered w-full" />
                                    </div>
                                    <div className="w-full">
                                        <h2>Book Category</h2>
                                        <select name="category"
                                            required className="select select-bordered w-full">
                                            <option disabled selected>Category</option>
                                            <option>History</option>
                                            <option>Travel</option>
                                            <option>Science</option>
                                            <option>Entertainment</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="md:flex gap-5  mb-5">
                                    <div className="w-full">
                                        <h2>Image URL</h2>
                                        <input type="img" name="image" placeholder="image"
                                            required
                                            className="input input-bordered  w-full" />
                                    </div>
                                    <div className="w-full">
                                        <h2>Author Name</h2>
                                        <input type="name" name="author" required placeholder="Author Name" className="input input-bordered w-full  " />
                                    </div>
                                </div>

                                <div className="flex gap-5 mb-5">
                                    <div className="w-full">
                                        <h2>Quantity</h2>
                                        <input type="number" name="quantity" required placeholder="Quantity" className="input input-bordered w-full  " />
                                    </div>
                                    <div className="w-full">
                                        <h2>Rating</h2>
                                        <input type="text" name="ratingq" required placeholder="Rating" className="input input-bordered w-full" />
                                    </div>
                                </div>

                                <div className="flex gap-5  mb-5">

                                    <div className="w-full">
                                        <h2>Short description</h2>
                                        <input type="text" name="description" placeholder="Short description" required className="input input-bordered w-full " />
                                    </div>
                                </div>
                                <button type="submit" className="btn glass w-full bg-pink-500 font-bold hover:text-[#EC7755]">S u b m i t</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;