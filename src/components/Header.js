import React from "react";

import HeaderNavLink from "./HeaderNavLink";
import headerSvgData from "../data/headerSvgData";

function Header() {
    return (
        <header>
            <div className="px-3 py-2 text-bg border-bottom" style={{background: "rgb(229, 225, 218)"}} >
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/"
                           className="align-items-center my-2 my-lg-0 me-lg-auto text-secondary text-decoration-none"
                            style={{fontWeight: "bold"}}>
                            Lior's Protfolio Website
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                 className="bi bi-brightness-alt-high d-block mx-auto mb-1" viewBox="0 0 16 16">
                                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8"/>
                            </svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li> <HeaderNavLink data={headerSvgData["home"]}/> </li>
                            <li> <HeaderNavLink data={headerSvgData["about"]}/> </li>
                            <li> <HeaderNavLink data={headerSvgData["skills"]}/> </li>
                            <li> <HeaderNavLink data={headerSvgData["projects"]}/> </li>
                            <li> <HeaderNavLink data={headerSvgData["contact"]}/> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
