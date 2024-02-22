import {HashLink} from "react-router-hash-link";
import AboutMeComponent from "./about-me";
import EducationComponent from "./education";
import "./index.css";
import SkillsComponent from "./skills";

const AboutComponent = () => {
    return(
        <>
            <div className="row mt-4 mb-5">
                {/* Left col - table of contents (fixed) */}
                <div className="d-none d-md-block col-md-3 me-2 fw-medium">
                    <div className="sticky-top fs-5">
                        {/* Links to contents of about page */}
                        <HashLink to="#about-me" className="mq-default-text">
                            <div className="mb-3">
                                About Me
                            </div>
                        </HashLink>
                        <HashLink to="#education" className="mq-default-text">
                            <div className="mb-3">
                                Education
                            </div>
                        </HashLink>
                        <HashLink to="#skills" className="mq-default-text">
                            <div className="mb-3">
                                Skills
                            </div>
                        </HashLink>
                        <HashLink to="#certifications" className="mq-default-text">
                            <div className="mb-3">
                                Certifications
                            </div>
                        </HashLink>
                        <HashLink to="#publications" className="mq-default-text">
                            <div className="mb-3">
                                Publications
                            </div>
                        </HashLink>
                        <HashLink to="#community-involvement" className="mq-default-text">
                            <div className="mb-3">
                                Community Involvement
                            </div>
                        </HashLink>
                    </div>
                </div>

                {/* Right col - main content (scrollable) */}
                <div className="col-12 col-md-8 ms-3">
                    {/* About me section */}
                    <div id="about-me">
                        <AboutMeComponent/>
                    </div>

                    {/* Education section */}
                    <div id="education" className="mt-5">
                        <EducationComponent/>
                    </div>

                    {/* Skills section */}
                    <div id="skills" className="mt-5">
                        <SkillsComponent/>
                    </div>

                    {/* Certifications section */}
                    <div id="certifications" className="mt-5">
                        <h2>
                            Certifications
                        </h2>
                    </div>

                    {/* Publications section */}
                    <div id="publications" className="mt-5">
                        <h2>
                            Publications
                        </h2>
                    </div>

                    {/* Community involvement section */}
                    <div id="community-involvement" className="mt-5">
                        <h2>
                            Community Involvement
                        </h2>
                    </div>
                </div>  
            </div>
        </>
    );
};
export default AboutComponent;