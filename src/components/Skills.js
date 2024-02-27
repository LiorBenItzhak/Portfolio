import React from "react";
import SkillElement from "./SkillElement";

function Skills() {
    return (
        <div id="skills" className="album py-5 bg-body-tertiary">
            <div className="container">
                <h2 className="pb-3 mb-4 border-bottom">My Skills</h2>

                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
                    <SkillElement imgName={"python-logo.png"}/>
                    <SkillElement imgName={"java-logo.png"}/>
                    <SkillElement imgName={"c-logo.jpeg"}/>
                    <SkillElement imgName={"js-logo.png"}/>
                    <SkillElement imgName={"django-logo.png"}/>
                    <SkillElement imgName={"react-logo.png"}/>
                    <SkillElement imgName={"aws-logo.jpeg"}/>
                    <SkillElement imgName={"html-css-logo.png"}/>
                    <SkillElement imgName={"docker-logo.png"}/>
                    <SkillElement imgName={"linux-logo.png"}/>
                    <SkillElement imgName={"github-logo.png"}/>
                    <SkillElement imgName={"sql-logo.png"}/>
                    <SkillElement imgName={"mongo-logo.png"}/>

                </div>
            </div>
        </div>

    )
}

export default Skills;
