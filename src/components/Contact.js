import React from "react";

import ContactElement from "./ContactElement";
import contactElementData from "../data/contactElementData";

function Contact() {

    return (
        // <div id="contact" className="px-3 py-2 text-center text-bg contact">
        <div id="contact" className="container my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">
                    Contact Me
                </h1>

                <ContactElement data={contactElementData["email"]}/>
                <ContactElement data={contactElementData["phone"]}/>
            </div>
        </div>
    )
}

export default Contact;
