
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCarrito() {
  const values = ['xl-down'];
  let cantidad = '5'
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="primary" onClick={() => handleShow(v)}>
          modal {cantidad}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="lista">
           <li>hola</li>
           <li>hola</li>
           <li>hola</li>
          </ul>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ModalCarrito