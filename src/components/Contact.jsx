import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h3>Información de Contacto</h3>
        <h4>
          Maia Jazmin <br /> Huppi Franco
        </h4>
      </div>
      <div className="contact-content">
        <div className="contact__location">
          <h4>Ubicación</h4>
          <p>Córdoba, Argentina</p>
        </div>
        <div className="contact__mail">
            <h4>Correo</h4>
            <a href="mailto:maiajazminhuppifranco@gmail.com">
                maiajazminhuppifranco@gmail.com
            </a>
        </div>
        <div className="contact__social">
          <h4>Redes Sociales</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/maia-jazmin-huppi-franco-029850246/"
                target="_blank"
                rel="noreferrer"
              >
                <p>Linkedin</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/maiajahuppif1"
                target="_blank"
                rel="noreferrer"
              >
                <p>Behance</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
