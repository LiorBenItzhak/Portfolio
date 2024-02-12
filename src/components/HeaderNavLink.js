import React from "react";

function HeaderNavLink(props) {
    props = props.data;
    return (
        <div>
            <a href={props.href} className="nav-link text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     className={"bi d-block mx-auto mb-1 bi-" + props.svgName} viewBox="0 0 16 16">
                    <path fill-rule={props.fillRule} d={props.fillPath} />
                    <path d={props.svgPath1}/>
                    <path d={props.svgPath2}/>
                </svg>
                {props.linkTitle}
            </a>
        </div>
    )
}

export default HeaderNavLink;
