import React, { useEffect } from "react";
import ModelsLanding from "../../components/ModelsLanding";
import ModelsRouter from "../../components/ModelsRouter";
import { Outlet, useNavigate } from "react-router-dom";
import LamborghiniSlider from "../../components/LSlider";
function Models(){
    const navigate = useNavigate();

    useEffect(() => {
      navigate("/models/lamborghini"); // Programmatically navigate to /models/lamborghini
    }, []);

    return(
        <div>
            <ModelsLanding />
            <ModelsRouter/>
            {/* <LamborghiniSlider /> */}
            <Outlet />
            
            
        </div>
    )
}

export default Models;