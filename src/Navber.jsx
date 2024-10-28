import { useState } from "react";
import Link from "./Link";
import { AiOutlineBars,AiOutlineClose  } from "react-icons/ai";
const Navber = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile/:userId" },
    ];

    return (
        <nav className="text-black bg-emerald-200 p-6"> 
            <div onClick={()=> setOpen(!open)} className="text-2xl md:hidden">
                
                {
                    open === true ? 
                    <AiOutlineClose />
                    : <AiOutlineBars></AiOutlineBars>
                }
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-20':'-top-60'} px-4 text-center`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navber;