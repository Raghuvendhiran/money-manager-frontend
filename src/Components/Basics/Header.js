import { NavLink } from "react-router-dom";


const header = () => {
    return (
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#FF7F50" }}>
            <div className="container-fluid">
                <h1 className="navbar-brand">
                    <img src={require("./Img/salary.png")} alt="Logo" width="30" height="24" />
                    <span className=" mt-3 text-white position-absolute top-0 start-50 translate-middle-x">Money Manager</span>
                </h1>
                <NavLink type="button" to="#"> <img src={require("./Img/filter.png")} alt="Filter" width="30" height="24" /></NavLink>
            </div>
        </nav>
    )
};

export default header;