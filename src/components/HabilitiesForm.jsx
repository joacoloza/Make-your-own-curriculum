import React,{useState} from "react";
import PropTypes from "prop-types";
import ExpandableForm from "./ExpandableForm";

export default function HabilitiesForm({onFormSubmit}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleForm = () => {
        setIsExpanded(!isExpanded);
    };
    
    function handleSubmit (event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            formData : new FormData(event.target),
            hability : formData.get("hability"),
        }
        if  (Object.values(data).some(field => !field)){
            alert("Complete Todos los Campos");
            return;
        }
        onFormSubmit(data);
    }

    return(
        <form className="form" onSubmit={handleSubmit}  >
            <button type="button" onClick={toggleForm} className="expandableFormBtn">
                Habilidades
            </button>
            {isExpanded && (
            <div className="expandableFormContent">
                <label>Habilidad</label>
                <input name="hability"  className="input"/>   
                <button type="submit" className="submitBtn">Aceptar</button>
            </div>
            )}
        </form>
    )
}
    HabilitiesForm.propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
}