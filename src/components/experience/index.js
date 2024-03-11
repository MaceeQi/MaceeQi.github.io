import experiences from "../../data/experiences.json";

const ExperienceComponent = () => {
    return(
        // <div className="text-center mt-5">
        //     <h1>
        //         <i class="bi bi-cone me-3 text-danger"></i>
        //         This section is coming soon!
        //         <i class="bi bi-cone ms-3 text-danger"></i>
        //     </h1>
        //     <p className="fs-4">
        //         If you would like to check out my experiences now,
        //         send me a message on 
        //         <a href="https://www.linkedin.com/in/macee-qi/" className="ms-2 me-2">
        //             LinkedIn
        //         </a>
        //         and I can send you my resume.
        //     </p>
        // </div>
        
        
        <>
            {
                experiences.map((experience, index) => {
                    return (
                        <div className="d-flex flex-row p-4 pt-5 pb-5 align-items-center 
                                        border-bottom flex-wrap align-content-center">
                            <div className="ps-3 pe-3 flex-fill mq-project-info">
                                {/* job title */}
                                <h3 className="fw-bold text-center mt-3 mb-5">
                                    {experience.title}
                                </h3>
                                
                    
                                
                                {/* job responsibilities */}
                                <h5>Responsibilities:</h5>
                                <ul>
                                    {
                                        experience.responsibilities.map(responsibility => 
                                            <li className="fs-5 fw-medium">{responsibility}</li>
                                        )
                                    }
                                </ul>             
                            </div>
                        </div>
                    )
                })
            }

        </>
    );
};
export default ExperienceComponent;