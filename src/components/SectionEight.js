import "./SectionEight.css";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "../imgs/insta.webp";
import facebook from "../imgs/face.png";

function SectionEight() {
  return (
    <section className="sectionEight">
      <div className="text">
        <hr className="m-auto" />
        <h1 className="">SIGA AS NOSSAS REDES SOCIAIS</h1>
        <h2>Fique por dentro de todas as novidades</h2>
      </div>
      <a target="_blank" href="#">
        <img className="facebook" src={facebook}></img>
      </a>
      <a target="_blank" href="https://www.instagram.com/escola.tecnica.educativa/">
        <img src={instagram}></img>
      </a>{" "}
    </section>
  );
}

export default SectionEight;
