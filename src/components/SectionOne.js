import Navbar from "./Navbar";
import "./SectionOne.css";

function SectionOne() {
  return (
    <section className="sectionOne bg-image">
      <Navbar />
      <div className="glass">
          <hr/>
        <h1>EDUCATIVA CONSULTORIA</h1>
        <h2>Cursos Profissionalizantes</h2>
        <p>
          A Educativa Consultoria oferta cursos de qualidade em diversas áreas,
          dando a você a oportunidade de incrementar seu curriculo além disso os
          cursos são ofertados em duas modalidades distintas, um fator excelente
          para você que possui uma rotina apertada ou precisa complementar horas
          extras.{" "}
        </p>
        <button type="button" class="btn btn-outline-warning">Saiba Mais</button>
      </div>
    </section>
  );
}

export default SectionOne;
