import projects from "../../data/projects.json";
import "./index.css";

const ProjectsComponent = () => {
    return(
        <div className="mt-2">
            {
                projects.map((project, index) => {
                    return (
                        <div className={`d-flex ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"} 
                                         mt-4 p-4 align-items-center`}>
                            {/* Project image */}
                            <div>
                                <img src={`/images/${project.image}`}
                                     className="mq-project-image"/>
                            </div>

                            {/* Project info */}
                            <div className="ms-5 flex-fill">
                                {/* title */}
                                <h2 className="fw-bold text-center">{project.name}</h2>
                                
                                {/* description */}
                                <p className="fs-5 fw-medium">{project.about}</p>
                                
                                {/* tech stack */}
                                <h5>Tech stack:</h5>
                                <ul>
                                    {
                                        project.tech.map(tech => 
                                            <li className="fs-5 fw-medium">{tech}</li>
                                        )
                                    }
                                </ul>

                                {/* links */}
                                <div className="d-flex justify-content-center fs-1">
                                    {/* github repo */}
                                    <a href={project.github} className="m-2 mq-default-fg">
                                        <i className="bi bi-github"></i>
                                    </a>
                                
                                    {/* demo video */}
                                    <a href={project.youtube} className="m-2 mq-default-fg">
                                        <i className="bi bi-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    );
};
export default ProjectsComponent;