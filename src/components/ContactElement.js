import React from "react";

import DirectContact from "./DirectContact";
import CopyContactInfoButton from "./CopyContactInfoButton";

function ContactElement(props) {
    props = props.data;

    return (
        <div>
            <div className="col mt-3 mb-3">
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                    My {props.contact_device}: {props.contact_info}
                </p>
                <div className="d-inline-flex gap-2 mb-2 mt-2">
                    <DirectContact data={props}/>
                    <CopyContactInfoButton data={props}/>
                </div>
            </div>
        </div>
    )
}

export default ContactElement;
