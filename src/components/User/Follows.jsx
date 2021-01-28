import React from 'react';
import { Tab,Tabs, Row, Col, Nav, Badge, Card, Form, Button } from 'react-bootstrap';
import Picture from '../../Assets/img/profile.jpeg';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck} from '@fortawesome/free-solid-svg-icons';


export default function Follows() {
const org ={
  name:'IBM',
  uname: 'ibm'
}
var Following ="Siguiendo ";
  return (
    <div className='Following'>
{/* Imagen del organizador */}
 <div className="small-round"><img src={Picture}  alt="" className='small-round'/></div>
 <div className='org'>
   {/* Nombre */}
   <div className="follow-name">{org.name}</div>
   {/* nombre de usuario, que redirige a su perfil */}
   <div className="follow-uname"><a href="#" className="">@{org.uname}</a> </div>
 </div>
 {/* Boton que indica si se sigue o no al organizador */}
 <div><Button variant="success">{Following}<FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon /></Button></div>
</div>
  )
}
