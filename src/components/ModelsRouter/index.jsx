import React from "react";
import data from './data.json';
import './styles.css'
import { useNavigate } from "react-router-dom";


const ModelsRouter = () => {

    const navigate = useNavigate();

    return(
        <div className="models">
            <div className="modelsnsv">
                
                <nav className="modelssnavbar">
                    <ul className="models-navbar">
                        {
                            data.map((e) => {
                                return <li className="models-nav-item" key={e.name} onClick={() => navigate(e.url)}>{e.name}</li>
                            })
                        }
                     </ul>
              </nav>
        
      </div>
    </div>
    );
};

export default ModelsRouter;