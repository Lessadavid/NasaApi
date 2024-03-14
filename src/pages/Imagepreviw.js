import React, { useState} from "react";
import Modal from 'react-bootstrap/Modal';

export default function ImagePreview({ nasaPicture, title,description }) {
  

  const [show, setShow] = useState(false);
  return (  
    <main className="grid">
    <div className="responsive" >  
    <div className="gallery my-3">       
          <img src={nasaPicture} alt="" class="Img_Grid"onClick={() => setShow(true)}/>
          <div className="desc p-2">{title}</div>      
    </div>
    </div>
    
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-110w"
        aria-labelledby="example-custom-modal-styling-title"
        className="Modal "
      >
          <img className="modalimg" src={nasaPicture} alt=""/>
          <div className="container-Modal text-light p-3">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal para">{description}</p>
          </div>
      </Modal>
  </main>
  );
}
