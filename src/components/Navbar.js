import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Friend List</NavLink> 
        </nav>
    )
}