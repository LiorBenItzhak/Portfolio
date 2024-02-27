import React from "react";

import EducationElement from "./EducationElement";
import EducationData from "../data/EducationData";

function Education() {
    return (
        <div id="education" className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">My Education</h2>

            <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
                <EducationElement data={EducationData["infinity"]} />
                <EducationElement data={EducationData["bar_ilan"]} />
            </div>
        </div>
    )
}

export default Education;
