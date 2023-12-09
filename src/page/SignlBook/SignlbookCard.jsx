/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
const SignlbookCard = ({ book }) => {


    const { user } = useAuth();
    const userEmail = user?.email;
    const { image, Name, AuthorName, Category, Description, Quantity, Rating, _id, ids } = book;
    console.log(ids)
    // const navigate = useNavigate();

    



    const handleBorrow = (e) => {
        e.preventDefault();
        
        const updateQuan = Quantity && Quantity - 1
        console.log(updateQuan)
        const Quantity2 = updateQuan;
        console.log(Quantity2)
        const update = { image, Name, AuthorName, Category, Quantity2, Rating }

       
        // const returnDate = e.target.rtn.value;
        const borrow = { image, Name, AuthorName, Category, Description, Quantity2, Rating, userEmail, _id }
        // console.log(borrow)

        axios.post('https://assignment-11-server-rosy-theta.vercel.app/borrow', borrow)
            .then(res => {
                console.log(res)
                toast.success('Borrow successfully')
            })

        

        // quantity update

        axios.put(`https://assignment-11-server-rosy-theta.vercel.app/books/${book._id}`, update)
        .then(res =>{
            console.log(res);

        })
        .catch(err =>{
            console.error(err)
        })

        console.log(Category)

        // navigate(`/books/${Category}`)
    }

   




    return (
        <div className="flex justify-center">

            <div className="bg-gray-400 shadow-xl w-80">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="p-3">
                    <h2 className="text-2xl font-bold">{Name}</h2>
                    <p className="text-xl font-semibold py-2">Category: {Category}</p>
                    <p className="">Author: {AuthorName}</p>
                    <p>Quantity: <span className="font-bold">{Quantity}</span></p>
                    <div className="card-actions justify-end pb-3">



                        <div>
                            <label disabled={Quantity == 0 && !false} htmlFor="my_modal_6" className="btn btn-sm text-pink-600"  >Borrow</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">

                                    <form >

                                        <div className="md:flex gap-5  mb-5">
                                            <div className="w-full">
                                                <h2>Return Date</h2>
                                                <input type="date" name="rtn" placeholder="image"
                                                    required
                                                    className="input input-bordered  w-full" />
                                            </div>

                                        </div>


                                        <div className="modal-action">
                                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                                            <label onClick={handleBorrow} htmlFor="my_modal_6" className="btn">Confirm</label>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>



                        <Link to={`/read-book/${_id}`} >
                            <button className="btn bg-pink-500 text-white btn-sm">Read</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* The button to open modal */}


        </div>
    );
};

export default SignlbookCard;