
import { Button, Carousel } from 'react-bootstrap'
import Parallax from 'react-rellax'
import React from 'react'
import Desk from '../Assets/img/desk.png'
import Build from '../Assets/img/build.jpg'
import IPad from '../Assets/img/ipad.jpg'
import Desktop from '../Assets/img/desk.jpg'
import RA from '../Assets/img/RA.png'
import Blogs from '../Assets/img/blog-s.png'
import Proces from '../Assets/img/proces.png'
import Design from '../Assets/img/design.png'
import Mark from '../Assets/img/mark.png'
import MarkD from '../Assets/img/matk-dig.png'
import Publicidad from '../Assets/img/publicidad.png'
import CM from '../Assets/img/CM.png'
import Ecom from '../Assets/img/ecom.png'
import Blog from '../Assets/img/Blog.png'
import Stars from './StyleComponent/Stars';
import WebPage from '../Assets/img/wbpg.png'
import Wave from './Wave/wave'
// import Bolt from './StyleComponent/Bolt'
export default function Home() {
  return (
    <div>
      <Stars></Stars>
      <Wave></Wave>
      <div className="color-ch ">
        <h3>Entra a nuestro blog</h3>
        <p>Conoce más sobre noticias y nuestra comunidad. </p>
        <img src={Blog} alt="" className="blue-logo" />
        <div>
          <Button>Ir al blog</Button>
        </div>
      </div>

      <div className="star-back">
        <div class="bg-card bg-stars">
          <div className="app1">
            <div className="med-size">
              <img src={RA} alt="imagen" /></div>
            <div className="med-size">App de realidad aumentada
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning"  href="/RAapp"size="lg">Más Información</Button></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app2">
            <div className="med-size">Pagina web basica
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg" href="/webpage">Más Información</Button></div>
            <div className="med-size">
              <img src={WebPage} alt="imagen" /></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app1">
            <div className="med-size">
              <img src={Blogs} alt="imagen" /></div>
            <div className="med-size">Consique tu blog
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app2">
            <div className="med-size">Servicio de diseño gráfico
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
            <div className="med-size">
              <img src={Design} alt="imagen" /></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app1">

            <div className="med-size">
              <img src={Proces} alt="imagen" /></div>
            <div className="med-size">Consultoría de procesos
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app2">
            <div className="med-size">Marketing
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
            <div className="med-size">
              <img src={Mark} alt="imagen" /></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app1">

            <div className="med-size">
              <img src={MarkD} alt="imagen" /></div>
            <div className="med-size">Marketing Digital
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app2">
            <Stars></Stars>
            <div className="med-size">Publicidad
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
            <div className="med-size">
              <img src={Publicidad} alt="imagen" /></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app1">

            <div className="med-size">
              <img src={CM} alt="imagen" /></div>
            <div className="med-size">CCommunity Manager
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
          </div>
        </div>
        <div class="bg-card bg-stars">
          <div className="app2">
            <div className="med-size">Implementación de ecommerce
              <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
            <div className="med-size">
              <img src={Ecom} alt="imagen" /></div>
          </div>
        </div>
      </div>
    </div >
  )
}

