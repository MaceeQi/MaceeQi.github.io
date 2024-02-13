
const NavigationBar = () => {
    return (
        <>
            <div className="d-flex flex-wrap pt-4 pb-4 justify-content-between">
                {/* <li className="d-flex flex-wrap pt-4 pb-4 justify-content-between">
                    <h2>Macee Qi</h2>

                </li> */}
                <h1 className="fw-bold me-5">Macee Qi</h1>

                <div className="d-flex align-items-center">
                    <h3 className="me-3">
                        Home
                    </h3>
                    <h3 className="ms-3 me-3">
                        About
                    </h3>
                    <h3 className="ms-3 me-3">
                        Projects
                    </h3>
                    <h3 className="ms-3">
                        Experience
                    </h3>                    
         
                </div>
            </div>
        </>
    );
};
export default NavigationBar;