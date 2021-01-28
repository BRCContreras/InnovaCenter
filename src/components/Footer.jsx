import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className="footer">
      <h3>Innova Centre</h3>
      <p>Si quieres saber más sobre nosotros?, encuentranos en nuestras redes sociales:</p>

      {/* links temporales */}
      <div className="contact-icons">
        <a href="https://www.facebook.com/innovacentre.mx/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /><FontAwesomeIcon /></a>
        <a href="https://twitter.com/innovacenter_mx" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.linkedin.com/company/innovacentre/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.instagram.com/innovacentre/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.youtube.com/channel/UCC9WkXQZaImSIGTe0IyupOQ" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="mailto:contacto@innovacentre.com.mx"><FontAwesomeIcon icon={faMailBulk} /></a>
      </div>
      <br />
      <p>© 2020
        <a href="#" className="text"> innovacentre.com.mx</a></p>

    </div >
  )
}