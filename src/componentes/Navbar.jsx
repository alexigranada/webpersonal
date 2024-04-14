import { NavLink } from "react-router-dom";

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
                <a>2024 CopyRight</a>
            </div>
        </div>
    )
}

export default Navbar;