import React from "react";

export default function Sidebar ({professionalData,educationData,languageData,habilitiesData,onDeleteProfessional,onDeleteEducation,onDeleteLanguage,onDeleteHability}){
    return(
        < div className="sideBar">
            {professionalData && 
            <div className="sideBarItem">
                <h3 className="sideBarTittle">Experiencia Profesional</h3>
                { Object.entries(professionalData).map(([key, item])=>(
                <div key={key} className="subSideBarItem">
                    <p>{item.company}</p>
                    <button className="deleteBtn" name onClick={() => onDeleteProfessional(key)}>Borrar</button>
                </div>
            ))}
            </div>}
            
            {educationData && 
            <div className="sideBarItem">
                <h3 className="sideBarTittle">Educacion</h3>
                { Object.entries(educationData).map(([key, item])=>(
                    <div key={key} className="subSideBarItem">
                        <p>{item.institutionName}</p>
                        <button className="deleteBtn" onClick={()=> onDeleteEducation(key)}>Borrar</button>
                    </div>
                ))}
            </div>}
            {languageData && 
            <div className="sideBarItem">
                <h3 className="sideBarTittle">Idioma</h3>
                { Object.entries(languageData).map(([key, item])=>(
                    <div key={key} className="subSideBarItem">
                        <p>{item.language}</p>
                        <button className="deleteBtn" onClick={()=> onDeleteLanguage(key)}>Borrar</button>
                    </div>
                ))}
            </div>}
            {habilitiesData && 
             <div className="sideBarItem">
                <h3 className="sideBarTittle">Habilidad</h3>
                {Object.entries(habilitiesData).map(([key, item])=>(
                    <div key={key} className="subSideBarItem">
                    <p>{item.hability}</p>
                    <button className="deleteBtn" onClick={()=> onDeleteLanguage(key)}>Borrar</button>
                </div>                    
                ))}
             </div>   
            }
        </div>
    )
}