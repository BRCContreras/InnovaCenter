import React from 'react';
/* import '../Styles/stylesWave.css'; */
import logo from '../../Assets/img/undraw_mobile_web_2g8b.png'

export default function wave(){

    return(

        <div>
            <section className="contenedor1 sec1">
                <div className="contenedor-txt">
                    <h1 className="titulo text-light">INNOVACENTRE SIEMPRE CONTIGO.</h1>
                    <p className="subtitulo text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    
                </div>

                <div className="contenedor-img ">
                    <img class="img-fluid img" src={logo} alt=""/>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className="wave2" viewBox="0 0 1440 320">
                <path fill="#1f0d81" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,293.3C384,277,480,235,576,186.7C672,139,768,85,864,80C960,75,1056,117,1152,165.3C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>

                {/* <svg className="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,85.3C384,107,480,149,576,170.7C672,192,768,192,864,181.3C960,171,1056,149,1152,160C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}

                {/* <svg class="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,112C384,149,480,235,576,240C672,245,768,171,864,154.7C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

            </section>
        </div>
    );

    

}

    