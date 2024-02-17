import React from "react";

function DirectContact(props) {
    props = props.data;

    return (
        <a href={props.href}
           className="d-inline-flex align-items-center btn btn-outline-secondary btn-lg px-4 rounded-pill">
            {props.link_text}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                 className={"bi ms-2 bi-" + props.link_svg_name} viewBox="0 0 16 16">
                <path d={props.link_svg_path1}/>
                <path d={props.link_svg_path2}/>
            </svg>
        </a>
    )
}

export default DirectContact;
