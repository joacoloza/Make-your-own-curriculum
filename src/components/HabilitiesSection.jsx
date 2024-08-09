import React from "react";

export default function HabilitiesSection ({data}){
    return (
        <div className="Section">   
            <div className="subSection">
                <p>{data.hability}</p>
            </div>
        </div>
    );
}