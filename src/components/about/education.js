import "./index.css";
import courses from "../../data/courses.json";

const EducationComponent = () => {

    return (
        <>
            <h2>
                Education
            </h2>

            {/* Grad - MSCS */}
            <div className="d-flex fs-5 fw-medium mt-3">
                {/* NEU logo */}
                <img className="mq-logo border rounded-circle" src={`/images/neu.jpg`}/>

                {/* MSCS Content */}
                <div className="ms-4">
                    <span className="fw-bold"> Northeastern University </span> <br/>
                    <span className="fw-bold"> M.S. in Computer Science </span> <br/>
                    <span> Sep 2021 - Dec 2023 </span> <br/>
                    <span> GPA: 3.9 </span> <br/>
                    <span> Related Courses: </span> <br/>
                    {
                        courses.map(course =>
                            <>
                                <span className="ms-3">- {course}</span>
                                <br />
                            </>
                        )
                    }
                </div>
            </div>

            {/* Undergrad - BS Biochem */}
            <div className="d-flex fs-5 fw-medium mt-5">
                {/* NEU logo */}
                <img className="mq-logo border rounded-circle" src={`/images/neu.jpg`}/>

                {/* BS content */}
                <div className="ms-4">
                    <span className="fw-bold"> Northeastern University </span> <br/>
                    <span className="fw-bold"> B.S in Biochemistry, Minor in Business Administration</span> <br/>
                    <span className="fst-italic"> magna cum laude </span> <br/>
                    <span> Sep 2014 - May 2018 </span> <br/>
                    <span> GPA: 3.8 </span> <br/>
                    <span> College of Science Undergraduate Student Advisory Council - Biochemistry Representative </span> <br/>
                </div>
            </div>
        </>
    );
};
export default EducationComponent;