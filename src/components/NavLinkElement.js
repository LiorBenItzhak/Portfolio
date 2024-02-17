import React from "react";

function NavLinkElement(props) {
    props = props.data;

    // ToDo: remove unnecessary comments
    // const [elementSize, setElementSize] = React.useState(24);

    // function MouseOverHandler() {
    //     setElementSize(32);
    // }
    //
    // function MouseOutHandler() {
    //     setElementSize(24);
    // }

    return (
        <div className="nev_link_element">
            <a href={props.href} className={props.classes}>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"
                     width="24" height="24"
                     className={"bi d-block mx-auto mb-1 bi-" + props.svgName}>
                    <path fill-rule={props.fillRule} d={props.fillPath} />
                    <path d={props.svgPath1}/>
                    <path d={props.svgPath2}/>
                </svg>
                {props.linkTitle}
            </a>
        </div>
    )
}

export default NavLinkElement;
