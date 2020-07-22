import React, { Component } from "react";
import './App.css';
import DebtModal from './Modal';
import Button from 'react-bootstrap/Button';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        LAUNCH CALCULATOR
      </Button>

      <DebtModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
