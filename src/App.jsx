import React, {useState} from "react";
import PersonalInfoForm from "./components/PersonalInfo";
import ProfesionalExpForm from "./components/ProfessionalExpForm";
import EducationInfoForm from "./components/EducationForm";
import LanguageForm from "./components/Language";
import HabilitiesForm from "./components/HabilitiesForm";
import StyleEditor from "./components/StyleEditor";
import './style.css';
import CreatePDF from "./components/CreatePDF";
import Curriculum from "./components/Curriculum";
import Sidebar from "./components/Sidebar";

function App(){
  const [personFormData, setPersonFormData] = useState({});
  const [professionalFormData, setProfessionalFormData] = useState({});
  const [educationFormData, setEducationFormData] = useState({});
  const [languageFormData, setLanguageFormData] = useState({});
  const [habilitiesFormData, setHabilitiesFormData] = useState({});
  const [activeTab, setActiveTab] = useState("form");
  const [style, setStyle] = useState("CvStyleTop");
  const [image,setImage] = useState(null);

  /*personal info*/
  const handlePersonalDataSubmit = (data) => {
    setPersonFormData(data);
  };

/*profesional info*/
  const handleProfessionalDataSubmit = (data) => {
    const newKey = `entry_${Date.now()}`; //genero una key por cada objeto para poder identificarlos
    setProfessionalFormData((prevData) => ({
      ... prevData,
      [newKey]: data
    }));
  };

/*education info*/ 
  const handleEducationDataSubmit = (data) => {
    const newKey = `entry_${Date.now()}`;
    setEducationFormData((prevData) => ({
      ... prevData,
      [newKey]: data
    }));
  };

/*language info*/
  const handleLanguageDataSubmit = (data) => {
    const newKey = `entry_${Date.now()}`;
    setLanguageFormData((prevData)=>({
      ... prevData,
      [newKey]:data
    }))
  };
/*habilities info*/
const handleHabilitiesDataSubmit = (data) => {
  const newKey = `entry_${Date.now()}`;
  setHabilitiesFormData((prevData)=>({
    ... prevData,
    [newKey]:data
  }))
};

  const handleDeleteProfessional = (key) => {
    setProfessionalFormData((prevData) => {
        const newData = { ...prevData };
        delete newData[key];
        return newData;
    });
};

const handleDeleteEducation = (key) => {
    setEducationFormData((prevData) => {
        const newData = { ...prevData };
        delete newData[key];
        return newData;
    });
};

const handleDeleteLanguage = (key) => {
  setLanguageFormData((prevData) => {
      const newData = { ...prevData };
      delete newData[key];
      return newData;
  });
};

const handleDeleteHability = (key) => {
  setHabilitiesFormData((prevData) => {
      const newData = { ...prevData };
      delete newData[key];
      return newData;
  });
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result);
  };
  if (file) {
    reader.readAsDataURL(file);
  }
};

  return(
    <div className="app">
      <div className="tabsWrapper">
        <button onClick={()=> setActiveTab("form")} className={activeTab === "form" ? "active" :""}>
          Rellenar Curriculum
        </button>
        <button onClick={() => setActiveTab("style")} className={activeTab === "style" ? "active" : ""}>
          Editar Curriculum
        </button>
      </div>

    {activeTab === "form" && (
      <div className="principalPage">
        <div className="formWrapper">
          <PersonalInfoForm onFormSubmit={handlePersonalDataSubmit} />
          <ProfesionalExpForm onFormSubmit={handleProfessionalDataSubmit}/>
          <EducationInfoForm onFormSubmit={handleEducationDataSubmit}/>
          <LanguageForm onFormSubmit={handleLanguageDataSubmit}/>
          <HabilitiesForm onFormSubmit={handleHabilitiesDataSubmit}/>
        </div>
          <div className="curriculumWrapper">
            <Curriculum
              personalData = {personFormData}
              professionalData = {professionalFormData}
              educationData = {educationFormData}
              languageData={languageFormData}
              habilitiesData={habilitiesFormData}
              style={style}
              image={image}
            />
          </div>
          <div className="sideBarWrapper">
            <Sidebar
              professionalData = {professionalFormData}
              educationData = {educationFormData}
              languageData={languageFormData}
              habilitiesData={habilitiesFormData}
              onDeleteProfessional={handleDeleteProfessional}
              onDeleteEducation={handleDeleteEducation}
              onDeleteLanguage={handleDeleteLanguage}
              onDeleteHability={handleDeleteHability}
            />
            <button className="downloadButton" 
              onClick={() => CreatePDF(personFormData, professionalFormData, educationFormData,languageFormData,habilitiesFormData,style,image)}>
              Descargar
            </button>
            </div>
        </div>
    )}
    {activeTab === "style" &&(
      <div>
        <div className="preWrapper"></div>
        <StyleEditor setStyle={setStyle} handleImageUpload={handleImageUpload} />
          <div className="curriculumWrapper">
            <Curriculum
              personalData = {personFormData}
              professionalData = {professionalFormData}
              educationData = {educationFormData}
              languageData={languageFormData}
              habilitiesData={habilitiesFormData}
              style={style}
              image={image}
            />
          </div>
      </div>
    )}
  </div>
);
}
export default App;

/*code explain 
useState indicates wich type of data im using (array,objetc...)
hook 'useState' to work with array state 'formData'
'handleFormSubmit' actualize 'formData' state with recive data from form
const [formData, setFormData] = useState({}); defines a state
'Object entries'  to get an object to be an pairs array [key,value]
*/