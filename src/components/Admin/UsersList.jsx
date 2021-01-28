import React, { useState } from 'react';
import { Navbar, Modal, Card, Row, Col, Badge, Button, Nav, Form, FormControl, NavDropdown, Tab, Tabs } from 'react-bootstrap';
import Profile from '../../Assets/img/profile.jpeg'
import Switch from '../StyleComponent/Switch'

export default function UsersList() {
// Este es un ejemplo de una constante que es un objeto para poder mandar a llamar sus datos dentro de la plantilla
  const user = {
    name: "Mark",
    lname: "Otto",
    uname: "markOtto",
    mail: "markotto@gmail.com",
    bt: "5/9/99",
    gendre: "M",
    study: {
      studing: "si",
      level: "superior",
      school: "ESIME"
    },
    permits: {
      users: false,
      events: true,
    }
  }

// Esta seccion de codigo en JS nos permite mostrar y ocultar la ventana desplegable
  const [value, setValue] = useState(false);
  var toggler = document.querySelector('.toggle-switch');
  // toggler.onclick = function () {
  //   toggler.classList.toggle('active');
  // }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <br/>
      <h2 className='title'>Gestión de usuarios</h2>
      {/* Filtro */}
      <Tabs defaultActiveKey="Estudiantes" className="black" transition={false} id="noanim-tab-example">
        <Tab eventKey="Estudiantes" className="black" title="Estudiantes">
        <>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  </>
          {/* Usuarios aqui se muestra la tarjeta del usuario  */}
          <Card className="leftcard mini-card user-list">
            <div className="center">
              <Card.Img variant="top" src={Profile} className="imgRedonda center" />
            </div>

            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">@{user.uname}</Card.Subtitle>
              <Card.Title>{user.name} {user.lname}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{user.mail}</Card.Subtitle>
              <Card.Text >
                <p>Estudiante: {user.study.studing}</p>
              </Card.Text>
              <Form>
                {['checkbox'].map((type) => (
                  <div className="row center">
                    <Form.Check
                      disabled checked
                      type="checkbox"
                      id="UsersPermits"
                      label="Users"
                    />

                    <Form.Check
                      disabled
                      type="checkbox"
                      label="Events"
                      id="EventsPermits"
                    />
                    <Form.Check
                      disabled checked
                      type="checkbox"
                      id="NewsPermits"
                      label="News"
                    />
                  </div>
                ))}
              </Form>
              <Button onClick={handleShow} href="">+</Button>
            </Card.Body>
          </Card>
        </Tab>

        {/* Titulado como profile dentro del filtro */}
        <Tab eventKey="profile" title="Profile">
        <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      </>
          some
        </Tab>


        {/* Titulado como Contact dentro del filtro */}
        <Tab eventKey="contact" title="Contact">
        <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      </>
          some
        </Tab>
      </Tabs>




      {/* Modelo a mostrar del usuario  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del usuario @{user.uname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="center">
            <Card.Img variant="top" src={Profile} className="imgRedonda center" />
          </div>
          <div className="center">
            <Card.Link>Resetear imagen</Card.Link>
          </div>
          <Form>


            {/* Nombre */}
            <Form.Group as={Row} controlId="formPlaintextName">
              <Form.Label column sm="2">
                Nombre:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.name + " " + user.lname} />
              </Col>
            </Form.Group>


            {/* User */}
            <Form.Group as={Row} controlId="formPlaintextUser">
              <Form.Label column sm="2">
                Usuario:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={"@" + user.uname} />
              </Col>
            </Form.Group>


            {/* Birthday */}
            <Form.Group as={Row} controlId={"formPlaintextBirthday"}>
              <Form.Label column sm="2">
                F.Nac.:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.bt} />
              </Col>
            </Form.Group>


            {/* Email */}
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.mail} />
              </Col>
            </Form.Group>


            {/* Genero */}
            <Form.Group as={Row} controlId="formPlaintextGendre">
              <Form.Label column sm="2">
                Genero:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.gendre} />
              </Col>
            </Form.Group>


            {/* Servicios */}
            <h6>Permisos:</h6>
            <Form>
                {['checkbox'].map((type) => (
                  <div className="row center">
                    <Form.Check
                      disabled checked
                      type="checkbox"
                      id="UsersPermits"
                      label="Users"
                    />

                    <Form.Check
                      disabled
                      type="checkbox"
                      label="Events"
                      id="EventsPermits"
                    />
                    <Form.Check
                      disabled checked
                      type="checkbox"
                      id="NewsPermits"
                      label="News"
                    />
                  </div>
                ))}
              </Form>
            <a href="">Resetear passwd</a>
            <div><a href="">Deshabilitar usuario</a></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Editar</Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
      {/* <script type="text/javascript" src="jquery.min.js">
        $(document).readyState(function() {
          $(".ui-button .ui-click").click(function () {
            $(".ui-button").toogleClass("on");
          })
        })
    </script> */}
    </div>
  )
}