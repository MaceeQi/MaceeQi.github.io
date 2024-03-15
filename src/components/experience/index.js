import experiences from "../../data/experiences.json";
import "./index.css";

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
        
        
        <div className="pt-3 pb-3">
            {
                experiences.map((experience, index) => {
                    return (
                        <div className="d-flex pt-5 pb-5 ps-4 pe-4 
                                        mt-3 border-bottom fs-5 fw-medium">
                            {/* logo */}
                            <img className="mq-logo rounded-circle" 
                                src={`/images/${experience.logo}`}/>

                            {/* content */}
                            <div className="ms-4 flex-fill">
                                <div className="d-flex justify-content-between flex-wrap">
                                    {/* job title */}
                                    <h3 className="fw-bold me-1"> 
                                        {experience.title} 
                                    </h3>

                                    {/* dates */}
                                    <span className="fw-semibold"> 
                                        {experience.startDate} - {experience.endDate} 
                                    </span>
                                </div>
                                
                                {/* company and location */}
                                <span className="fw-semibold">
                                    {experience.company} - {experience.location}
                                </span>
                                
                                {/* job responsibilities */}
                                <ul className="mt-3">
                                    {
                                        experience.responsibilities.map(responsibility => 
                                            <li>{responsibility}</li>
                                        )
                                    }
                                </ul>  
                            </div>                                            
                        </div>
                    )
                })
            }

        </div>
    );
};
export default ExperienceComponent;