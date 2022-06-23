import "./SectionEight.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { faPhone, faEnvelope, faLocationDot, faClock, } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SectionEight() {
  return (
    <section className="sectionEight">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> Endereço
            </li>
            <li>
            <FontAwesomeIcon icon={faClock} /> Horário
            </li>
            <li>
            <FontAwesomeIcon icon={faEnvelope} /> e-mail
            </li>
            <li>
            <FontAwesomeIcon icon={faPhone} /> Telefone
            </li>
            <li>
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
