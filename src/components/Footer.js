import React from "react";

import NavLinkElement from "./NavLinkElement";
import footerElementData from "../data/footerElementData";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="px-3 py-2 text-bg footer">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-secondary">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"></a>
                        <span className="mb-3 mb-md-0 text-body-secondary">© {currentYear} Lior Ben Itzhak</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"> <NavLinkElement data={footerElementData["linkedin"]} /> </li>
                        <li className="ms-3"> <NavLinkElement data={footerElementData["github"]} /> </li>
                        <li className="ms-3"> <NavLinkElement data={footerElementData["instagram"]} /> </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
