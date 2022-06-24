import "./SectionSeven.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function SectionSeven() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCsXj38PLK8tGRutwQbWmYttjLrdaTUNaM",
  });

  return (
    <section className="sectionSeven" id="contacts">
      <div class="row">
        <div class="col-sm-6">
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot}  className="icon"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock}  className="icon"/> 
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}  className="icon"/>
              academicoeducativa@gmail.com 
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone}  className="icon"/> 8699758274
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className="icon"/> 8699758274
            </li>
          </ul>
        </div>
        <div class="col-sm-6">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={{
                lat: -5.08600,
                lng: -42.81885,
              }}
              zoom={19}
            ></GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}

export default SectionSeven;
