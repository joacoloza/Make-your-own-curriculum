import React from "react";
import PersonalInfoSection from "./PersonalInfoSection.jsx";
import ProfesionalExpSection from "./ProfesionalExpSection.jsx";
import EducationSection from "./EducationSection.jsx";
import LanguageSection from "./LanguageSection.jsx";
import HabilitiesSection from "./HabilitiesSection.jsx";

import "../styles/CvStyleTop.css";
import "../styles/CvStyleLeft.css";


export default function Curriculum({ personalData, professionalData, educationData, languageData,habilitiesData,style, image }) {
    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };

    return (
        <div className={`curriculum ${style}`}>
            {style === "CvStyleLeft" ? ( 
                image ? (
                <div className={`personalSection ${style}`}>
                    <div className="imgWrapper">
                        <img src={image} alt="Profile" className="profileImage"/>
                        <PersonalInfoSection data={personalData} style={style} />
                    </div>
                </div>
            ) : (
                <div className={`personalSection ${style}`}>
                    <PersonalInfoSection data={personalData} style={style} />
                </div>
                )
            ) : (<div className={`personalSection ${style}`}>
                        <PersonalInfoSection data={personalData} style={style} />
                    </div>
            )}  
            <div className={`dataSection ${style}`}>
                {!isEmpty(professionalData) && (
                    <div className={`principalSection ${style}`}>
                        <h2 className={`title ${style}`}>Experiencia Profesional</h2>
                        {Object.entries(professionalData).map(([key, item]) => (
                            <ProfesionalExpSection key={key} data={item} style={style} />
                        ))}
                    </div>
                )}
                {!isEmpty(educationData) && (
                    <div className={`principalSection ${style}`}>
                        <h2 className={`title ${style}`}>Educacion</h2>
                        {Object.entries(educationData).map(([key, item]) => (
                            <EducationSection key={key} data={item} style={style} />
                        ))}
                    </div>
                )}
                {!isEmpty(languageData) && (
                    <div className={`principalSection ${style}`}>
                        <h2 className={`title ${style}`}>Idiomas</h2>
                        {Object.entries(languageData).map(([key, item]) => (
                            <LanguageSection key={key} data={item} style={style} />
                        ))}
                    </div>
                )}
                {!isEmpty(habilitiesData) && (
                    <div className= {`principalSection ${style}`}>
                        <h2 className={`title ${style}`}>Habilidades</h2>
                        {Object.entries(habilitiesData).map(([key, item]) =>(
                            <HabilitiesSection key={key} data={item} style={style}/>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
}
