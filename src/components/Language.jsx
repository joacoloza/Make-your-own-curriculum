import React,{useState} from "react";
import PropTypes from "prop-types";
import ExpandableForm from "./ExpandableForm";

export default function LanguageForm({onFormSubmit}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleForm = () => {
        setIsExpanded(!isExpanded);
    };
    
    function handleSubmit (event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            formData : new FormData(event.target),
            language : formData.get("language"),
            level : formData.get("level"),
        }
        if  (Object.values(data).some(field => !field)){
            alert("Please Complete All FIelds");
            return;
        }
        onFormSubmit(data);
    }

    return(
        <form className="form" onSubmit={handleSubmit}  >
            <button type="button" onClick={toggleForm} className="expandableFormBtn">
                Idiomas
            </button>
            {isExpanded && (
            <div className="expandableFormContent">
                <label>Idioma</label>
                <input name="language"  className="input"/>
                
                <label>Nivel</label>
                <select name ="level" >
                    <option value="">Nivel</option>
                    <option value="basic">Basico</option>
                    <option value="intermediate">Intermedio</option>
                    <option value="advanced">Avanzado</option>
                    <option value="native">Nativo</option>
                </select>
                {/*<input type="text" name="level" className="input" />*/}   
                
                <button type="submit" className="submitBtn">Aceptar</button>
            </div>
            )}
        </form>
    )
}
        LanguageForm.propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
}
/*code explain:
handleSubmit controls 'submit' event from form
this function prevents default behavior of the form
data from form is obtained using 'new FormData(event.target)'
pass 'handleFormSubmit' as a prop called 'onFormSubmit' to 'PersonalInfoForm'
*/