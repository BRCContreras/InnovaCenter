import React, { useState } from 'react';
import { Modal, Card, Image, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import defaultEvent from './../../Assets/img/defaultEvent.jpg';
import maps from './../../Assets/img/maps.jpeg';
import { faCheck} from '@fortawesome/free-solid-svg-icons';


export default function Event() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function colorDay(today = new Date()) {
    var color = "Light";
    console.log(today)
    if (today === today) {
      color = "warning";
    }
    return color;
  }

  const EventName = "Business Intelligence ";
  const EventDate = "Mier 3 Oct";
  const EventYear = "2020";
  const EventHour = "12:30hr";
  const EventOrg = "IBM";
  const EventLocation = " Av. Té 950, Granjas México, Iztacalco, 08400 Ciudad de México, CDMX ";
  const EventPrice = "899";
  const EventCost = `$ ${EventPrice} MXN`;
  const EventDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh purus, elementum ac lacinia id, viverra nec nulla. Cras dapibus arcu a est rutrum ultrices. Vivamus pharetra commodo suscipit. Cras ultricies sollicitudin nisi ut vehicula. Nam quis tortor dignissim, faucibus risus vel, varius urna. Morbi feugiat enim ac purus bibendum congue.";

  var Following ="Siguiendo ";

  return (
    <div>
      <Card className="leftcard mini-card">
        <Card.Img variant="top" src={defaultEvent} />
        <Card.Body>
          <Card.Title>{EventDate} {EventHour}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{EventOrg}</Card.Subtitle>
          <Card.Text>
            <h4>{EventName}</h4>
          </Card.Text>
          <Card.Link className="linkButton" href="#" onClick={handleShow}>Ver más   </Card.Link>
          <Button  size="sm" variant="success"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon /></Button>
        </Card.Body>
      </Card>


      {/* Modelo a mostrar */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{EventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={defaultEvent} fluid></Image>
          <Badge pill className="space-around" variant="light">

            <div className="center">{EventOrg}</div>
            <Button size="sm">Seguir</Button>
          </Badge>{' '}
          <Badge className="space-around" pill variant={colorDay()}>
            {EventDate} {EventYear} {EventHour}
            <a href="#">+ Añadir a calendar</a>
          </Badge>{' '}
          <br />
          <p><FontAwesomeIcon icon={faMapMarkerAlt} />     {EventLocation}</p>
          {/* api maps */}
          <Image src={maps} fluid ></Image>
          <br />
          <p>{EventDescription} </p>

        </Modal.Body>
        <Modal.Footer><p>Precio:{(EventPrice == "0") ? "Gratis" : EventCost}</p>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary" onClick={handleClose}>
            Agregar a mi carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  )
}