
import React from 'react';
import {Navbar, Nav, NavDropdown, Card, Form, Button, Col, Container, Row } from 'react-bootstrap';
import Network from '../../Assets/img/network.png'
import WP from '../../Assets/img/landingweb/background-047.png'
import Static from '../../Assets/img/landingweb/greenweb.png'
import Dynamic from '../../Assets/img/landingweb/codeweb.png'
import WebPage from '../../Assets/img/landingweb/webpage.png'
import LandingForm from '../StyleComponent/LandingForm'



export default function WebPageLanding() {
  return (
    <div className="landing">
<div className="landing-content normal">
  <div className="medium-size left-txt">
  <h2 className="blue-txt ">Página web
      </h2>
      <p className="black">Una Página web es un medio digital para promover productos, servicios o información de interés, se consultan a través de una computadora, tableta o Smartphone.</p>
      <p>También es una herramienta valiosa de mercadotecnia para cualquier empresa que requiera de obtener nuevos clientes promoviendo productos o servicios.</p>
      
  </div>
  <div className="landing-image">
  <img src={WP} alt=""/>
  </div>
</div>

<h1 className="blue-txt">Clasificación de páginas web</h1>
      <br />

  <div className="landing-content normal">
    <div className="medium-size left-txt">
    <h3 className="blue-txt">PÁGINAS WEB ESTÁTICAS</h3>
      <p>Son sitios pequeños que contienen poca información, no cuentan con gestor de contenido y su uso más común es como folletos virtuales de algún servicio o productos.</p>
      <br />
      </div>
      <div className="landing-image">
        <img src={Static} alt=""/>
      </div>
  </div>    


  <div className="landing-content reverse">
   
      <div className="landing-image">
        <img src={Dynamic} alt=""/>
      </div>
      <div className="medium-size left-txt">
    <h3 className="blue-txt">PÁGINAS WEB DINÁMICAS</h3>
      <p>Son sitios pequeños que cuentan con un gestor de contenido que permite al administrador del sitio modificar la información en cualquier momento sin contar con conocimientos de programación y diseño.</p>
      <br />
      </div>
  </div>    
  <div className="flex-cards">
<Card>
  <Card.Title>CATALOGOS VIRTUALES</Card.Title>
  <Card.Body>
  Son sitios web que permiten la publicación de imágenes y características que corresponden a productos, pueden ser modificados constantemente en base a las necesidades del administrador.
  </Card.Body>
</Card>
<Card>
  
  <Card.Title>TIENDAS VIRTUALES</Card.Title>
  <Card.Body>
Son sitios que permiten la publicación de productos o servicios y que pueden ser adquiridos en línea mediante la realización de un pago a través de transacciones electrónicas, cuentan con catalogo de productos, carrito de compras y gestor de pagos.
</Card.Body>
</Card>

<Card>
  <Card.Title>PORTALES</Card.Title>
  <Card.Body>
  Son grandes sitios de internet que contienen mucha información ordenada mediante categorías, pueden incorporar chats, foros, noticias, buscador y múltiples servicios en línea.
  </Card.Body>
</Card>

</div>

  <div className="medium-size">
        <img  className="fifty-porcent-size" src={WebPage} alt=""/>
      </div> 
<LandingForm/>
    </div >
  )
}