import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { UncontrolledCarousel } from 'reactstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function ModalContent() {
    const [index, setIndex] = useState(0);

    return (
      <div data-interval="false">
      <Carousel activeIndex={index} autoPlay={false}
    controls={false}
    indicators={false}>
        <Carousel.Item className = "modal">
          <div>
              <h3>How to dig out after a setback</h3>
          <Button onClick={() => setIndex(index + 1)} className = "button">LEARN HOW</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>Is your income and job stable or at risk?</h3>
            <ListGroup>
                <ListGroup.Item action onClick={() => setIndex(3)}> stable</ListGroup.Item>
                <ListGroup.Item action onClick={() => setIndex(2)}> at risk</ListGroup.Item>
            </ListGroup>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>My job's at risk and I...</h3>
            <ListGroup>
                <ListGroup.Item action> I can cover living expenses and debt minimums unless my income changes.</ListGroup.Item>
                <ListGroup.Item action> I struggle to cover expenses and debt minimums already.</ListGroup.Item>
                <ListGroup.Item action> I have recently lost my job or expect to soon. </ListGroup.Item>
            </ListGroup>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3>My job is stable, and I want to pay down my debts.</h3>
            <p>the description</p>
            <InputGroup>
            <h4>Credit Card Minimums</h4>
            <br></br>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            <InputGroup>
            <h4>Medical debt payments</h4>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            <InputGroup>
            <h4>Personal loan payments</h4>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default ModalContent;