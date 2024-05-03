import { NavLink } from "react-router-dom";
import { FaCopyright } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Navbar() {
    return(
        <div className="description">
            <p>
                <NavLink className={({ isActive }) => (isActive ? "active": "")} to="/">G | Geomática&nbsp;</NavLink>    
                <NavLink to='about'>about</NavLink>
                <NavLink to='servicios'>servicios</NavLink>
            </p>    
            
            <div> {/*className="footer" */}
                <a>A. Granada | Área de Geomática {/**&nbsp; */}</a>
                <a>2024 <FaRegCopyright /></a>
            </div>
        </div>
    )
}

export default Navbar;