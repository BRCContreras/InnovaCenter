import React from 'react';
import { Form, Col, Button, Card, Row, InputGroup, FormControl } from 'react-bootstrap';

export default function EventAdd() {
  return (
    <div>
      <Card>
        <Card.Header className="py-3 bg-innova">Agregar eventos</Card.Header>
        <Card.Body>
          <Form>
{/* Nombre del evento */}
            <Form.Group controlId="formEventName">
              <Form.Label>Nombre del evento</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

{/* Dia del evento */}
            <Form.Row>
              <Form.Group as={Col} controlId="formEventDate">
                <Form.Label>Fecha </Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>
{/* Hora del evento */}
              <Form.Group as={Col} controlId="formEventHour">
                <Form.Label>Hora </Form.Label>
                <Form.Control type="time" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>
{/* Descripción del evento */}
            <Form.Group controlId="formEventDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
{/* Foto del evento */}
            <Form.Group className="center">
              <Form.File id="EventFile" label="Foto del evento" />
            </Form.Group>
{/* Calle */}
            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Calle</Form.Label>
                <Form.Control placeholder="Av. Río Churubusco" />
              </Form.Group>
{/* Direccion numero */}
              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="number" placeholder="55-7" />
              </Form.Group>
            </Form.Row>
{/* Estado (seleccionar) */}
            <Form.Label>Dirección</Form.Label>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>CDMX</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
{/* Delegacion o municipio */}
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Delegación/Municipio</Form.Label>
                <Form.Control />
              </Form.Group>
{/* CP */}
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Row>
{/* Precio */}
              <Form.Group as={Col} controlId="formEventPrice">
                <Form.Label>Precio (MXN)</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formEventMax Inv">
                <Form.Label>Máximo de invitados</Form.Label>
                <Form.Control type="number" min="1" max="500" />
              </Form.Group>
            </Form.Row>
{/* Metodos de pago (checkboxs) */}
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={4}>
                Metodos de pago
      </Form.Label>
              <Col sm={8}>
                <Form.Check
                  type="radio"
                  label="Solo efectivo."
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Solo método digital."
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Todos los metodos"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>


{/* Boton ok */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>



{/* AGREGAR ORGANIZADORES */}


      <Card>
        <Card.Header className="py-3 bg-innova">Agregar organizadores</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row className="align-items-center">
              <Col >
              {/* NOMBRE */}
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control className="mb-3" id="inlineFormInput" placeholder="Nombre" />
              </Col>
              <Col >
              {/* NOMBRE DE USUARIO */}
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Username
      </Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="inlineFormInputGroup" placeholder="User name" />
                </InputGroup>
              </Col>
            </Form.Row>
            {/* EMAIL */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>
            {/* DESCRIPCION */}
            <Form.Group controlId="formEventDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
{/* FACEBOOK */}
            <Form.Group as={Row} controlId="formFacebook">
              <Form.Label column sm="4">
                Facebook
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Facebook" />
              </Col>
            </Form.Group>
            {/* TWITTER */}
            <Form.Group as={Row} controlId="formTwitter">
              <Form.Label column sm="4">
                Twitter
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Twitter" />
              </Col>
            </Form.Group>
            {/* LINKEDIN */}
            <Form.Group as={Row} controlId="formLinkedin">
              <Form.Label column sm="4">
                Linkedin
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Linkedin" />
              </Col>
            </Form.Group>
            {/* INSTAGRAM */}
            <Form.Group as={Row} controlId="formInstagram">
              <Form.Label column sm="4">
                Instagram
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Instagram" />
              </Col>
            </Form.Group>

            {/* BOTON OK */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div >
  )
}