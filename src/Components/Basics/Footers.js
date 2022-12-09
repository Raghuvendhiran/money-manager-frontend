import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" bg-light text-center text-lg-start text-white" >
            <div className="text-center p-2 " style={{ backgroundColor: "#FF7F50" }}>
                 © 2020 Copyright:
                <NavLink className="text-white" to="#">Money Manager</NavLink>
            </div>
        </footer>
    )
};

export default Footer;