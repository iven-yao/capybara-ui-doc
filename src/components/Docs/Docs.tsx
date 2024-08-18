import { NavLink, Outlet } from "react-router-dom";
import './Docs.scss';

const Docs = () => {
    return (
        <div className="docs-container">
            <div className="side-bar">
                <nav>
                    <ul style={{listStyle:'none'}}>
                        <li><NavLink to={"./button"}>Button</NavLink></li>
                        <li><NavLink to={"./dropdown-menu"}>Dropdown Menu</NavLink></li>
                        <li><NavLink to={"./navbar"}>Navbar</NavLink></li>
                        <li><NavLink to={"./select"}>Select</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Docs;