import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Choices from './Choices';

function ModalContent() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className = "modal">
          <img
            className="d-block w-100"
            src="https://s7d2.scene7.com/is/image/ArmstrongFlooring/60_jet%20black"
            alt="First flow"
          />
          hello
          <Carousel.Caption>
              <h3>"How to dig out after a setback"</h3>
          <Button onClick={() => setIndex(index + 1)} className = "button">LEARN HOW</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s7d2.scene7.com/is/image/ArmstrongFlooring/60_jet%20black"
            alt="Second flow"
          />
  
          <Carousel.Caption>
            <h3>Is your income and job stable or at risk?</h3>
            <ListGroup>
                <ListGroup.Item action> stable</ListGroup.Item>
                <ListGroup.Item action> at risk</ListGroup.Item>
            </ListGroup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s7d2.scene7.com/is/image/ArmstrongFlooring/60_jet%20black"
            alt="Third flow"
          />
  
          <Carousel.Caption>
            <h3>My job's at risk and I...</h3>
            <ListGroup>
                <ListGroup.Item action> I can cover living expenses and debt minimums unless my income changes.</ListGroup.Item>
                <ListGroup.Item action> I struggle to cover expenses and debt minimums already.</ListGroup.Item>
                <ListGroup.Item action> I have recently lost my job or expect to soon. </ListGroup.Item>
            </ListGroup>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ModalContent;