import React from 'react';
import { Tab,Tabs, Row, Col, Nav, Badge, Card, Form, Button } from 'react-bootstrap';

import { ProSidebar } from 'react-pro-sidebar';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Profile from '../../Assets/img/profile.jpeg'
import UserMenu from '../StyleComponent/Menu'
import EditProfile from './EditProfile'
import Event from '../Events/Event'
import Follows from '../User/Follows'
import 'react-pro-sidebar/dist/css/styles.css';

export default function Perfil() {
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
    <div className='sign-in'>

      <Tab.Container id="left-tabs-example" defaultActiveKey="editProfile">
          {/* Mandamos a llamar al componente userMenu */}
        <UserMenu />

        <Tab.Content>
          <Tab.Pane eventKey="Events">
            <h1>Mis eventos</h1>

            <Tabs defaultActiveKey="Pendientes"  class="black" id="uncontrolled-tab-example">
            <Tab eventKey="Pendientes"  title="Pendientes">
              <h4>Pendientes</h4>
              <Event/>
            </Tab>
            <Tab eventKey="Pasados" title="Pasados">
            <h4>Pasados</h4>
              <Event/>
            </Tab>
            <Tab eventKey="Cancelados" title="Cancelados">
            <h4>Cancelados</h4>
              <Event/>
            </Tab>
          </Tabs>
            {/* Mandamos a llamar al componente evento */}
            <Event />
          </Tab.Pane>
          <Tab.Pane eventKey="editProfile">
            <br/>
            <h2 className="title">Mis Datos</h2>
            {/* Mandamos a llamar al componente editProfile */}
            <EditProfile />
          </Tab.Pane>
          <Tab.Pane eventKey="Follow">
            <br/>
            <h2>Siguiendo a...</h2>
            {/* Mandamos a llamar dos veces al componente follows */}
            <Follows/> <Follows/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>


     

    </div >
  )
}
