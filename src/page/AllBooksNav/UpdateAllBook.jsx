import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const UpdateAllBook = () => {
    const { user } = useAuth();
    const books = useLoaderData();
   
    const { Name, Category, image, AuthorName, Rating, Quantity } = books

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const Category = form.category.value;
        const image = form.image.value;
        const Quantity = form.quantity.value;
        const AuthorName = form.author.value;
        const Rating = form.ratingq.value;


        const updateBook = { Name, Category, image, AuthorName, Rating, Quantity }



        if (user.email === 'anamulhaque990@gmail.com') {
            axios.put(`https://assignment-11-server-rosy-theta.vercel.app/books/${books._id}`, updateBook)
                .then(res => {
                    console.log(res);
                    toast.success('Updated successfully')
                })
                .catch(err => {
                    console.error(err);
                    toast.error('Opps! There is a problem.')
                })
        }
        else{
            toast.error('Only admin can update book')
        }

    }

    return (
        <div className="styleAddProduct  min-h-screen pt-10">
            <div className="max-w-[1300px] mx-auto  p-3 flex justify-center">
                <div className="card text-black bg-pink-200 w-full md:w-1/2 shadow-2xl pb-12 px-2">
                    <h2 className="text-center text-3xl font-bold mb-6 pt-10 pb-6">Update Book</h2>
                    <div className="">

                        <form onSubmit={handleUpdate}>
                            <div className=" w-full">
                                <div className="md:flex gap-5 mb-5">
                                    <div className="w-full">
                                        <h2>Name</h2>
                                        <input type="text" name="name" placeholder="Name" defaultValue={Name}
                                            required className="input input-bordered w-full" />
                                    </div>
                                    <div className="w-full">
                                        <h2>Book Category</h2>
                                        <select name="category" defaultValue={Category}
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
                                        <h2>Rating</h2>
                                        <input type="text" defaultValue={Rating} name="ratingq" placeholder="Raging" required className="input input-bordered w-full " />
                                    </div>
                                    <div className="w-full">
                                        <h2>Author Name</h2>
                                        <input type="name" defaultValue={AuthorName} name="author" required placeholder="Author Name" className="input input-bordered w-full  " />
                                    </div>
                                </div>

                                <div className="md:flex gap-5  mb-5">
                                    <div className="w-full">
                                        <h2>Image URL</h2>
                                        <input type="img" defaultValue={image} name="image" placeholder="Image URL" required className="input input-bordered w-full " />
                                    </div>
                                    <div className="w-full">
                                        <h2>Quantity</h2>
                                        <input type="number" defaultValue={Quantity} name="quantity" required placeholder="Quantity" className="input input-bordered w-full  " />
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

export default UpdateAllBook;