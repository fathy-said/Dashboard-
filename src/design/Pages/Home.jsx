import React, { useState } from "react";
import { DetailBox, MenuBox, RegistrationPage } from "../components";

const Home = () => {
    const [registration, setRegistration] = useState(false);
    // let registraionFun = (e) => {
    //     setRegistraion(e);
    // };

    return (
        <>
            <div className="row Width 100% m-0">
                <MenuBox
                    setRegistration={setRegistration}
                    registration={registration}
                />
                {registration ? (
                    <RegistrationPage
                        setRegistration={setRegistration}
                        registration={registration}
                    />
                ) : (
                    <DetailBox />
                )}
            </div>
        </>
    );
};

export default Home;
