import React from 'react';

import { Badge, Nav } from 'react-bootstrap'
import Profile from '../../Assets/img/profile.jpeg'

export default function Stars() {
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
    <div className="menu">
      <nav className="user-menu">
        <div className="center">        <img src={Profile} alt="" className="small-round center" />
</div>
        <Nav variant="pills" className="flex-column">
  <div className="user-menu-data">
  <h4>{user.name} {user.lname}</h4>
  <p>{user.uname}</p>
  <p>{user.mail}</p>
  </div>
  
          <Nav.Item>
            <Nav.Link eventKey="Events">Eventos <Badge variant="primary">150</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Follow">Seguidos<Badge variant="primary">12</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="editProfile">Editar Perfil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Follow"><b>Cerrar sesión</b></Nav.Link>
          </Nav.Item>
          
        </Nav>
      </nav>

    </div >

  )
}