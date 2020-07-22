import React, { useState } from "react";
import './App.css';
import DebtModal from './Modal';
import Button from 'react-bootstrap/Button';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        LAUNCH CALCULATOR
      </Button>

      <DebtModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        backdrop="static"
      />
    </>
  );
}

export default App;
