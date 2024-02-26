import "./index.css";
import certifications from "../../data/certifications.json";

const CertificationsComponent = () => {
    return (
        <>
            <h2>Certifications</h2>
            <div className="fs-5 fw-medium">
                {
                    certifications.map(certification => 
                        <div className="d-flex fs-5 fw-medium mt-4">
                            {/* Logo */}
                            <img className="mq-logo rounded-circle" 
                                src={`/images/${certification.logo}`}/>

                            {/* Content */}
                            <div className="ms-4">
                                <span className="fw-bold"> {certification.title} </span> <br/>
                                <span> {certification.issuer} </span> <br/>
                                <span> Issued {certification.issueDate} </span> <br/>
                                <ul className="mq-mb-1">
                                    {
                                        certification.skills.map(skill =>
                                            <li>
                                                {skill}
                                            </li>    
                                        )
                                    }
                                </ul>
                                <a href={certification.credential} className="mq-link">
                                    Show Credential 
                                    <span className="fs-6 ms-2">
                                        <i class="bi bi-box-arrow-up-right"></i>
                                    </span>
                                </a> <br/>

                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};
export default CertificationsComponent;