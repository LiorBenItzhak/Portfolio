import React from "react";

function ExperienceElement(props) {
    props = props.data;

    return (
        <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>{props.companyName}</h2>
                <h2 className="bold">{props.jobTitle}</h2>
                <p>{props.timeFrame}</p>
                <p>{props.details}</p>
                <div className="d-inline-flex align-items-center justify-content-center gap-2 mb-2 mt-2">
                    <a href={props.companyLink} className="btn btn-outline-secondary">{props.linkTitle}</a>
                    <img src={require("../images/" + props.imgName)} alt="company logo" width="200" height="100"/>
                </div>
            </div>
        </div>
    )
}

export default ExperienceElement;
