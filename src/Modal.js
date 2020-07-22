import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import ModalContent from './ModalContent';
//import { TITLES } from './constants';
import '@nerdwallet/base-styles/reset.css';
import '@nerdwallet/base-styles/base.css';
// import { Title, Body } from '@nerdwallet/react-typography';
// import Button from '@nerdwallet/react-button';

function DebtModal(props) {
    // const [count, setCount] = useState(0);
    // const [title, setTitle] = useState(TITLES[count]);

    // const handleNextTitleChange = () => {
    //     setTitle(TITLES[count]);
    // }

    // useEffect(() => {
    //     console.log(("title changed"))
    //     setCount(count + 1)
    //   }, [title]);

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <ModalContent/>
          </Modal.Body>
        </Modal>
      );
    }
  
  export default DebtModal;