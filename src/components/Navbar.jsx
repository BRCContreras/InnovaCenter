
import React from 'react';
import logo from './../Assets/img/logo.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default function NavBar() {
  return (
    <div>
      <Navbar bg="principal" expand="lg" className="fixed-top" variant="dark">
        {/* LOGO DE INNOVACENTRE */}
        <Navbar.Brand href="/home">
          <img
            alt=""
            src={logo}
            width="130"
            height="130"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        {/* <Navbar.Brand href="#home">
          Innnovacentre
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="#link" disabled></Nav.Link>
          </Nav>


          {/* INICIAR Y REGISTRARSE */}
          <a href="/signin" >Iniciar sesión/</a>
          <a href="/signout" >Registrarse</a>


          {/* DROPDOWN */}
          <NavDropdown title="Signed in as: Mark Otto" id="basic-nav-dropdown">
            {/* LISTA DE ELEMENTOS DEL MENU */}
            <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
            <NavDropdown.Item href="/event">Eventos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Organizadores</NavDropdown.Item>
            <NavDropdown.Item href="/eventadd">agregar eventos</NavDropdown.Item>
            <NavDropdown.Item href="/cotizador">Cotizar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
          </NavDropdown>

        </Navbar.Collapse>
      </Navbar>

    </div >

  )
}