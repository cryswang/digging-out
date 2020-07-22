import React, { useState } from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';

// need a hook to update the content & number of items
// via unmounting.

// for the final set of questions, can control flow using
// the eventKey option, linked with href

function Choices(props) {
    return (
        <ListGroup>
            <ListGroup.Item action> stable</ListGroup.Item>
            <ListGroup.Item action> at risk</ListGroup.Item>
            <ListGroup.Item action> option 3</ListGroup.Item>
        </ListGroup>
        )
    }
  
  export default Choices;