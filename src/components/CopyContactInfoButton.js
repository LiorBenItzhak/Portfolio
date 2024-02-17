import React from "react";

function CopyContactInfoButton(props) {
    props = props.data;
    const contact_info = props.contact_info;

    function CopyData(data) {
        navigator.clipboard.writeText(data);
    }

    return (
        <button className="d-inline-flex align-items-center btn btn-outline-secondary btn-lg px-4 rounded-pill"
                onClick={() => CopyData(contact_info)} type="button">
            Copy {props.contact_device}
            {/*ToDO: add Tooltip 'copied ... '*/}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                 className={"bi ms-2 bi-" + props.button_svg_name} viewBox="0 0 16 16">
                <path d={props.button_svg_path1}/>
                <path fill-rule={props.fillRule} d={props.button_svg_path2}/>
            </svg>
        </button>
    )
}

export default CopyContactInfoButton;
