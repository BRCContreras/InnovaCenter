import React from 'react';
import { Tab, Row, Col, Nav, Badge, Card, Form, Button } from 'react-bootstrap';

import { ProSidebar } from 'react-pro-sidebar';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Profile from '../../Assets/img/profile.jpeg'
import UserMenu from '../StyleComponent/Menu'
import 'react-pro-sidebar/dist/css/styles.css';

export default function EditProfile() {
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
    }
  }
  return (
    <div className="menu-content">
      <Card>
        <Card.Header>Mi información</Card.Header>
        <Card.Body>
          <div className="center">
          <Card.Img  className="imgRedonda" src={Profile}></Card.Img>
          </div>
          <Card.Text>
            <Form>
            <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Subir una nueva foto" />
  </Form.Group>
              {/* Nombre */}
              <Form.Group as={Row} controlId="formPlaintextName">
                <Form.Label column sm="4">
                  Nombre
</Form.Label>
                <Col sm="7">
                  <Form.Control plaintext readOnly defaultValue={user.name + " " + user.lname} />
                </Col>
              </Form.Group>
              {/* User */}
              <Form.Group as={Row} controlId="formPlaintextUser">
                <Form.Label column sm="4">
                  Usuario
</Form.Label>
                <Col sm="7">
                  <Form.Control plaintext readOnly defaultValue={"@" + user.uname} />
                </Col>
              </Form.Group>
              {/* Birthday */}
              <Form.Group as={Row} controlId={"formPlaintextBirthday"}>
                <Form.Label column sm="4">
                  F.Nac.
</Form.Label>
                <Col sm="7">
                  <Form.Control plaintext readOnly defaultValue={user.bt} />
                </Col>
              </Form.Group>
              {/* Email */}
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                  Email
</Form.Label>
                <Col sm="7">
                  <Form.Control plaintext readOnly defaultValue={user.mail} />
                </Col>
              </Form.Group>
              {/* Genero */}
              <Form.Group as={Row} controlId="formPlaintextGendre">
                <Form.Label column sm="4">
                  Genero
</Form.Label>
                <Col sm="7">
                  <Form.Control plaintext readOnly defaultValue={user.gendre} />
                </Col>
              </Form.Group>
              {/* Servicios */}
              
              <a href="">Resetear passwd</a>
            </Form>
          </Card.Text>
          <Button variant="dark">Editar</Button><Button variant="warning">OK</Button>
        </Card.Body>
      </Card>
    </div>
  )
}


