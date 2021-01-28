import React from 'react';
import Logo from '../../Assets/img/logo.png'
export default function Bolt() {
  return (
    <div >
      {/* Bolt */}
      <div className="bolt">
        <div class="ct" id="t1">
          <div class="ct" id="t2">
            <div class="ct" id="t3">
              <div class="ct" id="t4">
                <div class="ct" id="t5">
                  <ul id="menu">
                    <a href="#t1"><li className="icon" id="uno">Innova Centre</li></a>
                    <a href="#t2"><li className="icon" id="dos">Misión</li></a>
                    <a href="#t3"><li className="icon" id="tres"></li>Vision</a>
                    <a href="#t4"><li className="icon" id="cuatro">Servicios</li></a>
                    <a href="#t5"><li className="icon" id="cinco">otro</li></a>
                  </ul>
                  <div class="page" id="p1">
                    <section class="icon fa faBolt">
                      <span><img src={Logo} className="blue-logo" alt="" /> </span>
                      <span class="hint">Fundada en 2016, somos una agencia de servicios digitales. <br /> Analizamos e implementamos la tecnología que se adapte a tus necesidades</span>
                    </section>  </div>
                  <div class="page" id="p2">
                    <section class="icon fa faKeyboard"><span class="hint">Implementamos herramientas de ultima generación que permiten la adopción tecnológica de forma intuitiva,
            cumpliendo estandares de calidad y un gran servicio al cliente, con la finalidad de contribuir al desarrollo e impulso de las empresas</span></section>
                  </div>
                  <div class="page" id="p3">
                    <section class="icon fa faRocket"><span class="title">Visión</span><span class="hint">Ser la compañía líder en innovación de servicios digitales que satisfagan las necesidades de los clientes​</span></section>
                  </div>
                  <div class="page" id="p4">
                    <section class="icon fa faDribbble">
                      <span class="title">Dribbble</span>
                      <p class="hint">
                        Implementación de ecommerce, Diseño gráfico, Marketing Digital, Publicidad
                        , Community Manager, Consultoría de procesos​Desarrollo de páginas web, Apps de realidad aumentada, Blogs
              </p>
                    </section>
                  </div>
                  <div class="page" id="p5">
                    <section class="icon fa faPlusCircle">
                      <span class="title">Eventos</span>
                      <p class="hint">
                        Here are the news options for organizers</p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}