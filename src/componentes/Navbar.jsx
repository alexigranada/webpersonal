import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active": "")} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to='about'>about</NavLink>
                </li>
                <li>
                    <NavLink to='servicios'>servicios</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;