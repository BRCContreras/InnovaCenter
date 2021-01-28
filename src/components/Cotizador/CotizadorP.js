import React from 'react';
import '../../Styles/css/cotizadorStyless.css';
import logo from '../../Assets/img/world.png';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import emailjs from 'emailjs-com';

export default class Cotizador extends React.Component{
    

    constructor(props){
        super(props);
        this.handleSubscribe = this.handleSubscribe.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        //this.enviarFormulario = this.enviarFormulario.bind(this);
       // this.onSubmit = this.onSubmit.bind(this);
        this.sendEmail = this.sendEmail.bind(this);

        this.state = {
            servicios: [],
            nombre: " ",
            empresa: " ",
            correo: " ",
            telefono: " ",
            servicio: " ",
            isVerified: false
        }
    }

    componentDidMount() {
        axios.get(`http://preview.innovacentre.com.mx/apirest/servicios.php`)
          .then(res => {
            const servicios = res.data;
            this.setState({ servicios });
          })

          
      }
 
      sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_upaeljm', 'template_00grsrs', e.target, 'user_6E8RKWdiSUFdItvnyWT3u')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

      onChangeUsername = e => {
        this.setState({
            nombre: e.target.value
        })
    }

    onChangeEmpresa = e => {
        this.setState({
            empresa: e.target.value
        })
    }


    verifyCallback(response){
        if(response){
            this.setState({
                isVerified: true
            })
        }
    }

    recaptchaLoaded(){
        console.log('capcha success');
    }

    handleSubscribe(e){
        if(this.state.isVerified){
            //alert('Success');
            
            //php
            this.sendEmail(e);
            alert('Cotización en proceso')

        }else{
            alert('Error');
        }
    }

    valueToState = ({name, value}) => {
        this.setState( () =>{
            return {[name]: value};
        });
    }

    


    
    render(){
        return(

            <div className="container py-5">
        
                <form /* onSubmit={this.sendEmail} */ onSubmit={this.handleSubscribe} className="bg-form-innova" id="">
    
                    <div className="xyz bg-primary  py-3">
                        <h3 className="">¡Bienvenido! <br/>A nuestro cotizador de servicios</h3>
                    </div>
                    <div className="py-3">
                        <img src={logo} className="responsiveImg" alt=""/>
                    </div>
    
                    <div className="py-2">
                        <div className="form-group row">
                               
                            <input type="text" className="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1 " placeholder="Nombre" name="nombre"  required onChange={event => this.valueToState(event.target)} 
                            />
                           
                            <input type="text" className="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1 offset-lg-2 offset-md-2" placeholder="Empresa" name="empresa" id="empresaV"
                            required
                            onChange={event => this.valueToState(event.target)} 
                            />
                        </div>     
                        <div class="form-group row">
                            <input type="email" className="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1" name="correo" id="correoV" placeholder="Correo" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required
                            onChange={event => this.valueToState(event.target)} 
                            />
                        
                            <input type="number" className="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1 offset-lg-2 offset-md-2" placeholder="Teléfono de contacto" name="telefono" id="numeroV" pattern="^(0|[1-9][0-9]*)$" required
                            onChange={event => this.valueToState(event.target)} 
                            />
                        </div>
                        
                        <h4 className="py-3">Seleccione un servicio</h4>
                                           
                        <div className="form-group row">
                            
                            <select className="form-control col-xl-4 col-lg-4 col-md-6 offset-md-3 col-sm-10 col-10 offset-1 offset-lg-4" name="servicio" onChange={event => this.valueToState(event.target)} 
                            >
                               {this.state.servicios.map(elemento=>(
                                   <option key={elemento.nombre} value={elemento.nombre}>{elemento.nombre}</option>
                               )
    
                               )}
                            </select>
                            
                        </div>             

                        <div className="col-xl-4 col-lg-4 col-md-6 offset-md-3 col-sm-10 col-10 offset-1 offset-lg-4">
                                <div className="">

                                <Recaptcha
                                    sitekey="6LfLe-UZAAAAAET_rtZONdi6JU-0C1n_GBjH9-og"
                                    render="explicit"
                                    onloadCallback={this.recaptchaLoaded}
                                    verifyCallback={this.verifyCallback}
                                />

                                </div>

                        </div>
 
    
                        <div class="py-3 form-group ">
                                <input type="submit" value="Enviar" class="btn btn-success btn-lg"
                                /* onClick={this.handleSubscribe} */
                                />

                        </div>
                        
                    </div>
    
                </form>  
    
            </div>
        );
    }

}