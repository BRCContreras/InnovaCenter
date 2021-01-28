import React, { useState } from 'react';
import Event from './Event'


export default function Events() {
  
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

  
  return (
    <div>
      <h1>Eventos</h1>
      <div className="miniEventos">
        {/* MANDAMOS A LLAMAR AL COMPONENTE EVENT X VECES */}
        <Event />
        <Event />
        <Event />
        <Event />
      </div >
      
    </div>
  )
}