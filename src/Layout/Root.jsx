import { Outlet, useLoaderData } from "react-router-dom";
import Navber from "../components/Navber/Navber";

 

const Root = () => {
    const loginUsers = useLoaderData();
    return (
        <div>
            <Navber loginUsers={loginUsers}/>
            <Outlet/>
        </div>
    );
};

export default Root;