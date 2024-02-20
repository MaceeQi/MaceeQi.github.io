import {useLocation} from "react-router";
import {HashLink} from "react-router-hash-link";
import "./index.css";

const AboutComponent = () => {
    const {pathname} = useLocation();
    console.log(pathname);

    return(
        <>
            <div className="row mt-4">
                {/* Left col - table of contents (fixed) */}
                <div className="d-none d-md-block col-md-3">
                    <div className="sticky-top fs-5">
                        {/* Links to contents of about page */}
                        <HashLink to="#about-me" className="mq-default-text">
                            <div className="mb-2">
                                About Me
                            </div>
                        </HashLink>
                        <HashLink to="#education" className="mq-default-text">
                            <div className="mb-2">
                                Education
                            </div>
                        </HashLink>
                        <HashLink to="#skills" className="mq-default-text">
                            <div className="mb-2">
                                Skills
                            </div>
                        </HashLink>
                        <HashLink to="#certifications" className="mq-default-text">
                            <div className="mb-2">
                                Certifications
                            </div>
                        </HashLink>
                        <HashLink to="#publications" className="mq-default-text">
                            <div className="mb-2">
                                Publications
                            </div>
                        </HashLink>
                        <HashLink to="#community-involvement" className="mq-default-text">
                            <div className="mb-2">
                                Community Involvement
                            </div>
                        </HashLink>
                    </div>
                </div>

                {/* Right col - main content (scrollable) */}
                <div className="col-12 col-md-9">
                    {/* About me section */}
                    <div id="about-me">
                        <h2>
                            About Me
                        </h2>
                        <div className="fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    {/* Education section */}
                    <div id="education">
                        <h2>
                            Education
                        </h2>
                    </div>
                </div>  
            </div>
        </>
    );
};
export default AboutComponent;