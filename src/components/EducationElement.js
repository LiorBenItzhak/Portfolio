import React from "react";

function EducationElement(props) {
    props = props.data;

    return (
        <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img src={require("../images/" + props.imgName)} alt="institution logo" width={props.imgWidth} height="100"/>
            </div>
            <h3 className="fs-2 text-body-emphasis">{props.companyName}</h3>
            <p>{props.timeFrame}</p>
            <p>{props.details}</p>
            <p>{props.details2}</p>
            <div className="d-inline-flex gap-2 mb-2 mt-2">
                <a style={{display: "table-cell"}} href={props.linkDiploma} target="_blank"
                   className="btn btn-outline-secondary">My Diploma</a>
                <a style={{display: "table-cell"}} href={props.companyLink} target="_blank"
                   className="btn btn-outline-secondary">{props.linkTitle}</a>
            </div>
        </div>
    )
}

export default EducationElement;
