import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';

 

const Footer = () => {
    return (
        <div className="">
        <footer className="w-full bg-gray-800 p-8 ">
            <div className="max-w-[1300px]  mx-auto">
                <div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12    text-center md:justify-between text-white">
                    <div className="">
                       <a href="https://www.facebook.com/Anamul114" target="_blan"> 
                       <img src={`https://i.ibb.co/161dhbQ/Anamul.jpg`} alt="logo-ct" className="w-10 rounded-3xl ml-8" />
                        <p>Anamul Haque</p>
                        <p className="ml-10 pt-2">
                        <a className="hover:text-pink-500 text-xl text-blue-500" href="https://www.facebook.com/Anamul114" target="_blan"><BsFacebook/></a>
                        </p>
                       </a>
                    </div>
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                        <a
                                href="https://www.facebook.com/Anamul114" target="_blan"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <Link 
                                href="#"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                License
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/Anamul114" target="_blan"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <p className="block text-center   text-slate-400 pb-4">
                    <small>Thank for visiting</small>
                </p>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;