import React from 'react';
import {Navbar, Nav, NavDropdown, Card, Form, Button, Col, Container, Row } from 'react-bootstrap';
import WP from '../../Assets/img/landingweb/background-047.png'
import Static from '../../Assets/img/landingweb/greenweb.png'
import Dynamic from '../../Assets/img/landingweb/codeweb.png'
import WebPage from '../../Assets/img/landingweb/webpage.png'
import RABanner from '../../Assets/img/landingAR/RABanner.png'
import PockemonGo1 from '../../Assets/img/landingAR/pokgo.png'
import LandingForm from '../StyleComponent/LandingForm'

import PockemonGo2 from '../../Assets/img/landingAR/pokgosnor.png'


export default function RAapp() {
  return (
    <div>
    <div className="landing">
      <img  className="thousand-porcent-size" src={RABanner} alt=""/>
<div className="landing-content normal">
  <div className="medium-size left-txt">
    
  <h2 className="blue-txt ">Realidad Aumentada
      </h2>
      <p className="black">La Realidad Aumentada (RA) es una tecnología que permite superponer elementos virtuales sobre nuestra visión de la realidad. Cada vez más demandada, en 2020 se convertirá en un negocio que roce los 120.000 millones de dólares a nivel mundial.</p>
      <p>También es una herramienta valiosa de mercadotecnia para cualquier empresa que requiera de obtener nuevos clientes promoviendo productos o servicios.</p>
      
  </div>
  <div className="landing-image">
  <img src={WP} alt=""/>
  </div>
</div>

<h1 className="blue-txt">Ejemplo de app de RA (Realidad Aumentada)</h1>
      <br />

  <div className="landing-content normal">
    <div className="medium-size left-txt">
    <h3 className="blue-txt">Pockemon GO</h3>
      <p>Surgía entonces y no en el verano de 2016, como muchos creemos, cuando nos vimos contagiados por la fiebre de Pokémon GO, un videojuego que consistía en buscar y capturar diferentes personajes de la saga japonesa y que, en su momento más álgido, alcanzó la astronómica cifra de 45 millones de usuarios diarios activos.</p>
      <br />
      </div>
      <div className="landing-image">
        <img src={PockemonGo1} alt=""/>
      </div>
  </div>    


  <div className="landing-content reverse">
   
      <div className="landing-image">
        <img src={PockemonGo2} alt=""/>
      </div>
      <div className="medium-size left-txt">
      <p>Pokémon GO popularizó la RA, la acercó al gran público —a todos los públicos—, pero por aquel entonces ya eran muchas las empresas de muy diversos sectores (sanidad, educación, arquitectura, servicios, retail, etc.) que la empezaban a utilizar con el objetivo de crear experiencias de valor para sus clientes.

</p>
      <br />
      </div>
  </div>    
     
  <div className="landing-content">
    <div className="landing-text">
    <h3 className="blue-txt">DIFERENCIAS ENTRE LA REALIDAD AUMENTADA Y LA REALIDAD VIRTUAL</h3>
      <p>A pesar de estar entrelazadas, plantean revoluciones diferentes. Mientras que la Realidad Virtual permite crear un mundo virtual desde cero con todo lo que queramos, pero un mundo fantástico, lo que hace la Realidad Aumentada es agregar elementos virtuales (información adicional en forma de gráficos o imágenes) a nuestro entorno real.</p>
    <p>El director ejecutivo de Apple, Tim Cook, lo tiene muy claro: "La Realidad Aumentada (RA) abarca más que la Realidad Virtual (VR) porque nos da la posibilidad de estar presentes y de comunicarnos y, simultáneamente, de disfrutar de otras cosas a nivel visual. Será la próxima revolución, como en su momento lo fue el smartphone".</p>
      </div>
      <div className="landing-image">
        <img src="" alt=""/>
      </div>
  </div> 

      </div>
     <LandingForm/> 
    </div >
  )
}