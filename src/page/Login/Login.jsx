import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import DirectLogIn from "../../components/DirectLogIn/DirectLogIn";


const Login = () => {

    const {loginUser} = useAuth();
    const navigate = useNavigate();
    const loacation = useLocation();
    // console.log(loacation);


    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        loginUser(email, password)
        .then(data =>{
            console.log(data.user);
            navigate(loacation?.state ? loacation.state : '/');
            toast.success('Log In successfully.')
        })
        .catch(error =>{
            console.error(error);
            toast.error('User Id & Password Wrong!')
        })
    }

    return (
        <div className="styleSign h-[91vh]">
        <div className="flex justify-center h-[80vh] items-center">
          <div className="relative flex w-96 flex-col rounded-xl bg-pink-200 glass bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-500 to-pink-200 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                  <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                      Sign In
                  </h3>
              </div>
              <form onSubmit={handleLogin}>
                  <div className="flex flex-col gap-4 p-6">
                     
                      <div className="relative h-11 w-full min-w-[200px]">
                          <input
                              name="email" type="email"
                              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                              Email
                          </label>
                      </div>
                      <div className="relative h-11 w-full min-w-[200px]">
                          <input
                              name="password" type="password"
                              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                              Password
                          </label>
                      </div>
                      <div className="-ml-2.5">
                        
                      </div>
                      <button

                          className="btn btn-sm glass bg-pink-500 hover:text-pink-500 text-white font-bold"
                          type="submit"
                          data-ripple-light="true"
                      >
                          Sign In
                      </button>
                  </div>
              </form>
              
              <div className="p-6 pt-0">
                <div>
                    <DirectLogIn/>
                </div>
                  <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                      Do not have an account?
                      <Link to='/signin'>
                          <button
                              href="#signup"
                              className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased "
                          >
                              Sign Up
                          </button></Link>
                  </p>
              </div>

          </div>
      </div>
    </div>
    );
};

export default Login;