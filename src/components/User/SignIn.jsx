import React, { useState } from 'react';
import { Card, Button, Modal, Image, Row, Col, Toast, Form } from 'react-bootstrap';
import Mail from '../../Assets/img/mail-3.png'


export default function SignIn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);


  // function colorDay(today = new Date()) {
  //   var color = "Light";
  //   console.log(today)
  //   if (today === today) {
  //     color = "warning";
  //   }
  //   return color;
  // }
  return (
    <div >
      <Card>
        <Card.Header className="py-3 bg-innova">Iniciar sesión</Card.Header>
        <Card.Body>
          <Form>

            {/* Email */}
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            {/* Contraseña */}
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* Checkbox */}
            <Form.Group controlId="formCheckbox">

              {/* Hipervinculos  */}
              <a className="SigninLink" href="/signout">Aun no tengo una cuenta. /</a>
              <a className="SigninLink" onClick={handleShow}>Olvidé mi contraseña.</a>

              {/* Checkbox para recordar al usuario (aun no implementado) */}
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>

            {/* Ingresar (boton) */}
            <Button variant="primary" type="submit" block>
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>



{/* Intento de despliegue para recuperacion de contraseña */}


      {/* Mostrar*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar mi contraseña</Modal.Title>
        </Modal.Header>
        <div>
          <Modal.Body>
            <h4>Ingresa el correo de la cuenta de la que quieres recuperar tu contraseña:</h4>
            <p>Te enviaremos un código al correo ingresado, para que puedas volver a ingresar.</p>

            <div className="center"><Image src={Mail} className="image-icon" fluid></Image></div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Row>

              <Col xs={6}>
                <Button onClick={() => setShow1(true), handleClose}>Show Toast</Button>
              </Col>

            </Row>

          </Modal.Footer>
        </div>


      </Modal>
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Correo Enviado</strong>
              <small>Hace un momento</small>
            </Toast.Header>
            <Toast.Body>Revisa tu bandeja de entrada!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div >
  )
}