import React from 'react';

const StyleEditor = ({ setStyle, handleImageUpload }) => {
  return (
    <div className="styleEditor">
      <button onClick={() => setStyle("CvStyleTop")}>Barra Arriba</button>
      <button onClick={() => setStyle("CvStyleLeft")}>Barra a Izquierda</button>
      <div className='imageUploadWrapper'>
        <label htmlFor="imageUpload">Subir Imagen:</label>
        <input type="file" className="imageUpload" id="imageUpload" onChange={handleImageUpload} ></input>
      </div>
    </div>
  );
};

export default StyleEditor;