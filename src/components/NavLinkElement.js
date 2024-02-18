import React from "react";
import {Tooltip} from "react-tooltip";

function NavLinkElement(props) {
    props = props.data;

    return (
        <div className="nev_link_element">
            <a href={props.href} className={props.classes}
               data-tooltip-id="nav-tooltip" data-tooltip-variant="dark"
               data-tooltip-content={props.linkName}
               data-tooltip-place="top">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"
                     width="24" height="24"
                     className={"bi d-block mx-auto mb-1 bi-" + props.svgName}>
                    <path fill-rule={props.fillRule} d={props.fillPath} />
                    <path d={props.svgPath1}/>
                    <path d={props.svgPath2}/>
                </svg>
                {props.linkTitle}
            </a>
            <Tooltip id="nav-tooltip" />
        </div>
    )
}

export default NavLinkElement;
