import projects from "../../data/projects.json";
import "./index.css";

const ProjectsComponent = () => {
    return(
        <div className="mt-2">
            <div>
                * Some linked repos may be private - send me a message
                and I'd be happy to share them with you
            </div>
            {
                projects.map((project, index) => {
                    return (
                        <div className={`d-flex ${index % 2 == 1 ? "flex-row" : "flex-row-reverse"} 
                                         p-4 pt-5 pb-5 align-items-center border-bottom
                                         flex-wrap align-content-center`}>
                            {/* Project info */}
                            <div className="ps-3 pe-3 flex-fill mq-project-info">
                                {/* title */}
                                <h3 className="fw-bold text-center mt-3 mb-5">
                                    {project.name}
                                </h3>
                                
                                {/* description */}
                                <p className="fs-5 fw-medium mt-4">
                                    {project.about}
                                </p>
                                
                                {/* tech stack */}
                                <h5>Technology/Skills:</h5>
                                <ul>
                                    {
                                        project.tech.map(tech => 
                                            <li className="fs-5 fw-medium">{tech}</li>
                                        )
                                    }
                                </ul>

                                {/* links */}
                                <div className="d-flex justify-content-center align-items-center">
                                    {/* demo */}
                                    {
                                        project.demo != "" &&
                                        <a href={project.demo} className="fs-5 m-3 mq-default-fg mq-underline">
                                            {/* <i className="bi bi-youtube"></i> */}
                                            Demo
                                        </a>
                                    }
                                    
                                    {/* github repo */}
                                    <div>
                                        {
                                            project.github.length == 1 &&
                                            <a href={project.github} className="fs-2 m-3 mq-default-fg">
                                                <i className="bi bi-github"></i>
                                            </a>
                                        }
                                        {
                                            project.github.length == 2 &&
                                            <div className="d-flex flex-column ms-3">
                                                <a href={project.github[0]} 
                                                    className="d-flex align-items-center fs-2 ms-3 
                                                                mq-default-fg mq-no-underline">
                                                    <span className="fs-5 me-2">Front end:</span>
                                                    <i className="bi bi-github"></i>
                                                </a>
                                                <a href={project.github[1]} 
                                                    className="d-flex align-items-center fs-2 ms-3 
                                                                mq-default-fg mq-no-underline">
                                                    <span className="fs-5 me-3">Back end:</span>
                                                    <i className="bi bi-github"></i>
                                                </a>
                                            </div>
                                        }
                                    </div>
                                    
                                </div>
                            </div>

                            {/* Project image */}
                            <div className="flex-fill text-center">
                                <img src={`/images/${project.image}`}
                                     className="mq-project-image"/>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    );
};
export default ProjectsComponent;