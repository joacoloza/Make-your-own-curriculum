import React from "react";

export default function LanguageSection ({data}){
    return (
        <div className="Section">   
            <div className="subSection">
                <p>{data.language}</p>
                <p>{data.level}</p>
                <hr></hr>
            </div>
        </div>
    );
}