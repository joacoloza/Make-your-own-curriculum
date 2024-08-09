import React,{useState} from "react";
import PropTypes from "prop-types";
import ExpandableForm from "./ExpandableForm";

export default function PersonalInfoForm({onFormSubmit}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleForm = () => {
        setIsExpanded(!isExpanded);
    };
   
    function handleSubmit (event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            formData : new FormData(event.target),
            name : formData.get("name"),
            mail : formData.get("mail"),
            phone : formData.get("phone"),
            address : formData.get("address"),
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
                Informacion Personal
            </button>

            {isExpanded && (
             <div className="expandableFormContent">
                <label>Nombre</label>
                <input name="name"  className="input"/>
                
                <label>Email</label>
                <input type="email" name="mail" className="input" />
                
                <label>Numero Telefono</label>
                <input type="tel" name="phone" className="input" />
                
                <label>Direccion</label>
                <input type="text" name="address" className="input" />    
                
                <button type="submit" className="submitBtn">Aceptar</button>
            </div>)}
        </form>
        )
}
    PersonalInfoForm.propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
}
/*code explain:
handleSubmit controls 'submit' event from form
this function prevents default behavior of the form
data from form is obtained using 'new FormData(event.target)'
pass 'handleFormSubmit' as a prop called 'onFormSubmit' to 'PersonalInfoForm'
*/