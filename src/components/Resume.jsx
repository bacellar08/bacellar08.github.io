import React, { useState } from 'react';
import Modal from 'react-modal';
import MyResume from './MyResume';
import '../styles/resume.css'

function Resume() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  return (
    <div>
      <button className='btn resume-btn' onClick={toggleModal}>Resume</button>
      <Modal isOpen={showModal} onRequestClose={toggleModal}>
        <div className='resume-content'>
          <MyResume style={{content: {padding: '0'}}}/>
          <button className='btn toggle-modal-btn' onClick={toggleModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default Resume;
