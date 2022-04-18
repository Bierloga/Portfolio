import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/winc">Winc Academy</NavLink></li>
                <li><NavLink to="/dashboard">Student Dashboard</NavLink></li>
                <li><NavLink to="/superpy">SuperPy</NavLink></li>
                <li><NavLink to="/acss">Advanced CSS/SASS</NavLink></li>
                <li><NavLink to="/songsaver">Songsaver</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar