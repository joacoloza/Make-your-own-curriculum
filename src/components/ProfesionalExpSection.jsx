import React from "react";

export default function ProfesionalExpSection ({data},{style}){
    return (
        <div className={`Section ${style}`}>
            <div className={`subSection ${style}`}>
                <p className={`dates ${style}`}>
                    {data.startDate}
                    {data.startDate && data.endDate && <span> – </span>}
                    {data.endDate}
                </p>
                <p>{data.location}</p>
            </div>
            <div className={`subSection ${style}`}>
                <p className={`companyName ${style}`}>{data.company}</p>
                <p>{data.position}</p>
                <p>{data.description}</p>
                <hr></hr>
            </div>
        
        </div>
    );
}