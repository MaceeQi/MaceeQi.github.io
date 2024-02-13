import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavBarLinks = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];

    return (
        <>
            <ul className="nav nav-pills d-flex justify-content-center justify-content-sm-between">
                <li className="nav-item">
                    <Link to="/" className="nav-link ms-1 me-1">
                        <span className={`fs-3 ${active === '' ? 'active' : ''}`}>
                            Home
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link ms-1 me-1">
                        <span className={`fs-3 ${active === 'about' ? 'active' : ''}`}>
                            About
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-link ms-1 me-1">
                        <span className={`fs-3 ${active === 'projects' ? 'active' : ''}`}>
                            Projects
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/experience" className="nav-link ms-1 me-1">
                        <span className={`fs-3 ${active === 'experience' ? 'active' : ''}`}>
                            Experience
                        </span>
                    </Link>
                </li>
            </ul>
        </>
        
    );
};
export default NavBarLinks;