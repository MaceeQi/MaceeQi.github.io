import skills from "../../data/technical-skills.json";

const SkillsComponent = () => {
    return (
        <>
            <h2>
                Technical Skills
            </h2>
            <div className="fs-5 fw-medium mt-3">
                {
                    skills.map(skill =>
                        <div className="mt-3">
                            <span className="fw-bold">
                                {skill.category}:
                            </span>
                            <span className="ms-2">
                                {
                                    skill.skills.map((skill, index) => {
                                        if (index == 0) {
                                            return <span>{skill}</span>
                                        }
                                        else {
                                            return <span>, {skill}</span>
                                        }
                                    })
                                }                            
                            </span>
                            <br/>
                        </div>
                    )
                }

                {/* Programming languages
                <span className="fw-bold">
                    Programming Languages: 
                </span>
                <span className="ms-2">
                    Python, Java, JavaScript/TypeScript, HTML/CSS, SQL, Swift, C
                </span>
                <br/>

                {/* Databases */}
                {/* <span className="fw-bold">
                    Database Systems: 
                </span>
                <span className="ms-2">
                    MySQL, MongoDB, Firebase Realtime Database
                </span>
                <br/> */}

                {/* Frameworks/Tools/Technologies */}
                {/* <span className="fw-bold">
                    Programming Languages: 
                </span>
                <span className="ms-2">
                    Python, Java, JavaScript/TypeScript, HTML/CSS, SQL, Swift, C
                </span> */}
            </div>
        </>
    );
};
export default SkillsComponent;