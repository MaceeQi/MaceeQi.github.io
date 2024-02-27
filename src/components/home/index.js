import './index.css';

const HomeComponent = () => {
    return(
        <>
            <div className="row mt-5 h-100 ">
                {/* First col */}
                <div className="col-0 col-md-1 col-lg-2 col-xl-3">
                </div>

                {/* Second col - main content */}
                <div className="col-12 col-md-10 col-lg-8 col-xl-6 mt-5 mb-5 pt-3 ps-3 pe-3
                                mq-border d-flex flex-column justify-content-between">
                    {/* Intro/welcome */}
                    <div className="d-flex flex-column align-items-center text-center">
                        <h1>
                            Hi, I'm Macee!
                        </h1>
                        <br/>
                        <h4>
                            Happy to have you here. 
                            I'm excited to share more about me, my projects, and my interests.
                        </h4>
                        <br/>
                        <h4>
                            Have more questions or want to learn more? I'd love to connect!
                        </h4>
                    </div>

                    {/* Social media icons/links */}
                    <div id="social-icons" 
                         className="d-flex justify-content-center fs-1">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/macee-qi/"
                           className="mq-fg-default p-3 mq-blue">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/MaceeQi"
                           className="mq-fg-default p-3 mq-purple mq-scale-1">
                            <i className="bi bi-github"></i>
                        </a>

                        {/* Email */}
                        <a href="mailto:qi.ma@northeastern.edu"
                           className="mq-fg-default p-3 mq-green mq-scale-1">
                            <i className="bi bi-envelope-fill"></i>
                        </a>

                        {/* Youtube */}
                        <a href="https://www.youtube.com/channel/UCqrTUpPlwihOHGhcrY2K00w"
                           className="mq-fg-default p-3 mq-pink mq-scale-2">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Third col */}
                <div className="col-0 col-md-1 col-lg-2 col-xl-3">
                </div>
            </div>
        </>
    );
};
export default HomeComponent;