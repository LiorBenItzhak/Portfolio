import React from "react";
import NavLinkElement from "./NavLinkElement";
import headerElementData from "../data/headerElementData";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-primary-subtle fixed-top">
            <div className="container-fluid">
                <a href="/"
                   className="align-items-center my-2 my-lg-0 me-lg-auto text-secondary text-decoration-none bold">
                    Lior's Protfolio Website
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                         className="bi bi-brightness-alt-high d-block mx-auto mb-1" viewBox="0 0 16 16">
                        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8"/>
                    </svg>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarCollapse">
                    {/* ToDo - move items to right (justify-content: end) */}
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li> <NavLinkElement data={headerElementData["home"]}/> </li>
                        <li> <NavLinkElement data={headerElementData["about"]}/> </li>
                        <li> <NavLinkElement data={headerElementData["experience"]}/> </li>
                        <li> <NavLinkElement data={headerElementData["skills"]}/> </li>
                        <li> <NavLinkElement data={headerElementData["education"]}/> </li>
                        {/*<li> <NavLinkElement data={headerElementData["projects"]}/> </li>*/}
                        <li> <NavLinkElement data={headerElementData["contact"]}/> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
