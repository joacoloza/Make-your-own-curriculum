import html2pdf from 'html2pdf.js'
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Curriculum from "./Curriculum";

const CreatePDF = (personalData,professionalData,educationData,languageData,habilitiesData,style,image) => {
  
  const element = document.createElement('div');
  
  const curriculumElement =(
    <Curriculum 
      personalData={personalData}
      professionalData={professionalData}
      educationData={educationData}
      languageData={languageData}
      habilitiesData={habilitiesData}
      style={style}
      image={image}
  />
  );

  const cvHtml = ReactDOMServer.renderToString(curriculumElement);
  element.innerHTML=cvHtml;

  const options ={
    margin: 0,
    filename: 'Curriculum.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 ,useCORS: true },
    jsPDF: {format: 'a4',orientation:'portrait' },
  };

  html2pdf().set(options).from(element).toPdf().save('myfile.pdf');
}

export default CreatePDF