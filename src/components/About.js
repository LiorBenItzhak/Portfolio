import React from "react";

function About() {
    return (
        <div id="about" className="px-3 py-2 text-bg about">
            <div className="container col-xxl-8 px-4 py-5 about">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={require('../images/my_photo.jpg')} className="d-block mx-lg-auto img-fluid round_image"
                             alt="my handsome photo" width="400" height="400" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            Hello 👋🏼
                        </h1>
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            I'm Lior Ben Itzhak
                        </h1>
                        <p className="lead">
                            Highly motivated Full Stack Developer with a focus on Cloud Backend,
                            and hands-on 1.5 years experience in developing servers in
                            Python, Java, C, AWS, Django REST, Git and more.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a style={{display: "table-cell"}} href={require('../images/lior_ben_itzhak_resume.pdf')} target="_blank">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
