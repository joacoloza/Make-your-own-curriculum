import React from "react";

export default function EducationSection({ data },{style}) {
    return (
        <div className={`Section ${style}`}>
            <div className={`subSection ${style}`}>
                <div className={`dates ${style}`}>
                    <p>{data.startDate} – {data.endDate || 'present'}</p>
                    <p>{data.location}</p>
                </div>
            </div>    
            <div className={`subSection ${style}`}>
                <p className={`eduInstitution ${style}`}>{data.institutionName}</p>
                <p>{data.degree}</p>
                <p>{data.description}</p>
                <hr></hr>
            </div>
        </div>
    );
}
