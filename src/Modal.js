import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Choices from './Choices';
import Button from 'react-bootstrap/Button';
import { TITLES } from './constants';
// import { Title, Body } from '@nerdwallet/react-typography';
// import Button from '@nerdwallet/react-button';

// TODO: I'm thinking of having a list of hard coded titles (nerdwallet does this)
// and setting the title to the index; thus we just increment the title array
// each time (to a certain number) the user advances and decrement if they
// click back

function DebtModal(props) {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState(TITLES[count]);

    const handleNextTitleChange = () => {
        setTitle(TITLES[count]);
    }

    useEffect(() => {
        console.log(("title changed"))
        setCount(count + 1)
      }, [title]);

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            {/* need a react hook to update the title */}
            <Modal.Title id="contained-modal-title-vcenter">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <Choices/>
          </Modal.Body>
          <Modal.Footer>
          {/* This button leads into the quiz. Need to use hook to unmount the button*/}
          <Button onClick={handleNextTitleChange} className = "button">LEARN HOW</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  
  export default DebtModal;