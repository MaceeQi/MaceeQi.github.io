import React from "react";
import {Link} from "react-router-dom";
import NavBarLinks from "./nav-bar-links";
import "./index.css";


const NavigationBar = () => {
    return (
        <>
            <div className="d-flex flex-wrap pt-4 pb-4 align-items-center 
                            justify-content-center justify-content-md-between">
                <Link to="/" className="nav-link">
                    <span className="fw-bold fs-1 me-2">
                        Macee Qi
                    </span>
                </Link>

                <div>
                    <NavBarLinks/>
                </div>
                
            </div>
        </>
    );
};
export default NavigationBar;