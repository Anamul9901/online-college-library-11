import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const DirectLogIn = () => {
    const {googleSignIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogIn = () =>{
        googleSignIn()
        .then(res =>{
            console.log(res.user);
            toast.success('Log In successfully');
            navigate(location?.state ? location.state : '/')
        })
        .catch(err =>{
            console.error(err);
            toast.error('Opps! There is a problem!')
        })
    }
    return (
        <div>
        <h2 className='text-center mt-6 mb-2'>Sign in with another account</h2>
        <div className=" flex justify-center text-2xl">
            <button onClick={handleGoogleLogIn}><FcGoogle/></button>
        </div>
    </div>
    );
};

export default DirectLogIn;