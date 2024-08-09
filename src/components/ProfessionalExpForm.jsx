
  import React,{useState} from "react";
  import PropTypes from "prop-types";
  import ExpandableForm from "./ExpandableForm";

  export default function ProfesionalExpForm({onFormSubmit}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleForm = () => {
        setIsExpanded(!isExpanded);
    };  
    
    function handleSubmit (event){
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = {
                company : formData.get("company"),
                position : formData.get("position"),
                location : formData.get("location"),
                startDate : formData.get("startDate"),
                endDate : formData.get("endDate"),
                description : formData.get("description"),
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
                Experiencia
            </button>
            
            {isExpanded && (
            <div className="expandableFormContent">
                <label >compañia</label>
                <input type="text" name="company" />
                
                <label>Posicion</label>
                <input type="text" name="position"/>
                
                <label>Ubicacion</label>
                <input type="text" name="location"/>  

                <label>Desde</label>
                <input type="date" name="startDate" />
            
                <label>Hasta</label>
                <input type="date" name="endDate" />
                
                <label >Descripcion del Cargo</label>
                <input type="text" name="description"/>

                <button type="submit" className="submitBtn">Aceptar</button>
            </div>)}
    </form>

)
}

    ProfesionalExpForm.propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
}