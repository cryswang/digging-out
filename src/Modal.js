import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalContent from './ModalContent';
import { TITLES } from './constants';
// import { Title, Body } from '@nerdwallet/react-typography';
// import Button from '@nerdwallet/react-button';

// TODO: I'm thinking of having a list of hard coded titles (nerdwallet does this)
// and setting the title to the index; thus we just increment the title array
// each time (to a certain number) the user advances and decrement if they
// click back

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
          className = "modal"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <ModalContent/>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      );
    }
  
  export default DebtModal;