import React,{useState} from "react";
import PropTypes from "prop-types";
import ExpandableForm from "./ExpandableForm";

export default function EducationInfoForm({onFormSubmit}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleForm = () => {
        setIsExpanded(!isExpanded);
    };
    
    function handleSubmit (event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data= {
            institutionName : formData.get("institutionName"),
            location : formData.get("location"),
            startDate : formData.get("startDate"),
            endDate : formData.get("endDate"),
            degree : formData.get("degree"),
        }
        if  (Object.values(data).some(field => !field)){
            alert("Please Complete All FIelds");
            return;
        }
        onFormSubmit(data);
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <button type="button" onClick={toggleForm} className="expandableFormBtn">
                Educacion
            </button>
            {isExpanded && (
            <div className="expandableFormContent">
                <label>Titulo</label>
                <input name="degree" type="text" />
                
                <label>Establecimiento</label>
                <input name="institutionName"type="text" />

                <label>Ubicacion</label>
                <input type="text" name="location"/>

                <label>Desde</label>
                <input name="startDate" type="date"/>
                
                <label>Hasta</label>
                <input name="endDate" type="date"/>

                <button type="submit" className="submitBtn">Aceptar</button>
            </div> 
            )}
        </form>
    )
    }
    EducationInfoForm.propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
}
