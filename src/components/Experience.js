import React from "react";

import ExperienceElement from "./ExperienceElement";
import ExperienceData from "../data/ExperienceData";

function Experience() {
    return (
        <div id="experience" className="container py-4">

            <h2 className="pb-3 mb-4 border-bottom">My Experience</h2>

            <div className="row align-items-md-stretch">
                <ExperienceElement data={ExperienceData["kyndryl"]} />
                <ExperienceElement data={ExperienceData["crossing_points_authority"]} />
            </div>
        </div>
    )
}

export default Experience;
