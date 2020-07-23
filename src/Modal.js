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
    // const [show, setShow] = useState(false);
    // const [title, setTitle] = useState(TITLES[count]);

    // const handleNextTitleChange = () => {
    //     setTitle(TITLES[count]);
    // }

    // useEffect(() => {
    //     console.log(("title changed"))
    //     setCount(count + 1)
    //   }, [title]);

    return (
      <div style = {{width: 664}}>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            {/* <img src = '/Users/cwang/Downloads/Illustrations_for_prototype/01.png'/> */}
          </Modal.Header>
          <Modal.Body>
            <ModalContent/>
          </Modal.Body>
        </Modal>
        </div>
      );
    }
  
  export default DebtModal;