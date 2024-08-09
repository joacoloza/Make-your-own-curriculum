import React,{useState} from "react";

export default function ExpandableForm ({title,children}){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleForm = () => {
        setIsExpanded(!isExpanded);
    }

    return(
        <div className="expandableForm">
            <button onClick={toggleForm} className="expandableFormBtn">{title}</button>
            {isExpanded && (
                <div className="expandableFormContent">
                    {children}
                </div>
            )}
        </div>
    );
}