import React from 'react';
import Network from '../../Assets/img/network.png'
import {Navbar, Nav, NavDropdown, Card, Form, Button, Col, Container, Row } from 'react-bootstrap';

export default function Bolt() {
  return (
    <div className="client-div">

    <Form className="client-form">
      <h2>Contactanos</h2>
      <Form.Group controlId="formGroupName">
        <Form.Label>Nombre*</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Correo*</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPhone">
        <Form.Label>Telefono*</Form.Label>
        <Form.Control type="number" placeholder="55-55-55-55-55" />
      </Form.Group>
      <Form.Group controlId="formGroupName">
        <Form.Label>Empresa/Escuela</Form.Label>
        <Form.Control type="text" placeholder="Empresa/Escuela" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Servicio de interés</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Pagina web </option>
          <option>App Movil</option>
          <option>Diseño grafico </option>
        </Form.Control>
      </Form.Group>
      <Form.Text className="text-muted">
        * Campos obligatorios
</Form.Text>
      <Button variant="primary" type="submit">
        Submit
</Button>
    </Form>
    <span className="contact-us"><img src={Network} alt="" /></span>

  </div>


  )
}