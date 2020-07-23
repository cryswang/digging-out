import React, { useState } from 'react';
import './App.css';
// import Button from '@nerdwallet/react-button';
// import illustrationOne from ''
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ModalContent() {
    const [index, setIndex] = useState(0);

    return (
      <div data-interval="false">
      <Carousel activeIndex={index} fade={true} data-ride={null} slide={true} controls={false} indicators={false}>
        <Carousel.Item className = "carousel-container">
          <div>
              <h3 className = "title1">How to dig out after a setback</h3>
              <p className = "body1">Many people are struggling with their debts after losing their jobs or having their hours cut because of the pandemic.
            If you’re worried about what you owe, use this quiz to find out what you should do next.</p>
          <Button onClick={() => setIndex(1)} className = "learn-more-button">LEARN HOW</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item className = "carousel-container">
          <div>
          <Button onClick={() => setIndex(index - 1)}>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="#8B8C8F;" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
          <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
         </Button>
            <h3 className = "title1">Is your income and job stable or at risk?</h3>
            <ListGroup>
                <ListGroup.Item action onClick={() => setIndex(2)} className = "list-item">
                    <h2 className = "title2"> My Job is Secure</h2>
                    you don't expect a change in employment or pay in the next 6 months
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => setIndex(6)} className = "list-item"> 
                <h2 className = "title2">My Job Is At Risk</h2>
                you expect a pay reduction or job loss in the next 6 months.
                </ListGroup.Item>
            </ListGroup>
            </div>
        </Carousel.Item>
        <Carousel.Item>
        <Button onClick={() => setIndex(index - 1)}>back</Button>
          <div>
            <h3>My job is stable, and I want to pay down my debts.</h3>
            <p>Let's figure out your debt-to-income situation. Enter your debts.</p>
            <Container>
            <Row>
            <Col md={6}>
            <h4>Credit card minimums</h4>
            <InputGroup>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            </Col>
            <Col md={6}>
            <h4>Medical debt payments</h4>
            <InputGroup>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
            <h4>Personal or payday loans</h4>
            <InputGroup>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            </Col>
            <Col md={6}>
            <h4>Student loans</h4>
            <InputGroup>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
            <h4>Vehicle loans</h4>
            <InputGroup>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            </Col>
            <Col md={6}>
            <h4>Collections</h4>
            <InputGroup>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            </Col>
            </Row>
            </Container>
          </div>
          <Button onClick={() => setIndex(3)} className = "button">Next</Button>
        </Carousel.Item>
        <Carousel.Item>
        <Button onClick={() => setIndex(index - 1)}>back</Button>
        <div>
            <h3>My job is stable, and I want to pay down my debts.</h3>
            <p>Let's figure out your debt-to-income situation. Enter your debts.</p>
            <div>
            <InputGroup>
            <h4>Rent or mortgage payments</h4>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            <InputGroup>
            <h4>Monthly gross income (total pay)</h4>
            <FormControl
                placeholder="$0,000.00"
            />
            </InputGroup>
            </div>
            {/* these two buttons need to be displayed inline-block, and also
            have to have two different types of styling (refer to prototype vid
            in the slack channel */}
            <Button className = "button" onClick={() => setIndex(4)}>Next</Button>
            <Button className = "button" onClick={() => setIndex(2)}>Back</Button>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <Button onClick={() => setIndex(index - 1)}>back</Button>
          <div>
            <h3>My credit score is...</h3>
            <ListGroup>
                <ListGroup.Item action> Between 720-850</ListGroup.Item>
                <ListGroup.Item action onClick={() => setIndex(5)}> Between 690-719</ListGroup.Item>
                <ListGroup.Item action> Between 630-689</ListGroup.Item>
                <ListGroup.Item action> Below 630</ListGroup.Item>
                <ListGroup.Item action> I don't know my score (<a href="https://www.nerdwallet.com/l/free-credit-score">Get your score</a>)</ListGroup.Item>
            </ListGroup>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <Button onClick={() => setIndex(index - 1)}>back</Button>
          <div>
            <h3>You are in a good position to handle your debt with a DIY method.</h3>
            <p>First, make a <a href="#">simple budget</a> to identify how much money can go to debt pay down. 
            Check into money-saving strategies to free up a bit more cash.</p>
            <p>If you have any <a href="#">toxic debt</a> (payday loans, credit cards with high APRs), attack that first. </p>
            <p>You may be able to reduce how much goes to interest by refinancing some debts to a lower rate, or <a href="#">consolidating
            credit card debt</a>.</p>    
            <p>Once you know how much you can funnel to your debts, pick a payoff order that will keep you motivated, whether that's the <a href="#">debt
             snowball</a> (pay off debts from smallest to largest) or debt avalanche (knocking off the highest-interest-rate debt first). </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3 className = "title1">My job's at risk and I...</h3>
            <ListGroup>
                <ListGroup.Item action className = "list-item"> I can cover living expenses and debt minimums unless my income changes.</ListGroup.Item>
                <ListGroup.Item action onClick={() => setIndex(7)} className = "list-item"> I struggle to cover expenses and debt minimums already.</ListGroup.Item>
                <ListGroup.Item action className = "list-item"> I have recently lost my job or expect to soon. </ListGroup.Item>
            </ListGroup>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h3 className = "title1">Our recommendation</h3>
            <p className = "body1">Seek assistance from government and NGO sources. Explore hardship and forbearance programs.</p>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default ModalContent;