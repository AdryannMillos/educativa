import "./SectionTwo.css";
import workingGroup from "../imgs/workingGroup.png";

function SectionTwo() {
  return (
    <section className="sectionTwo">
      <div class="row">
        <div class="col-sm-6">
          <div class="card border-light ">
            <div class="card-body">
              <hr />
              <h1>NÓS TEMOS O QUE VOCÊ PRECISA!</h1>
              <h2>Cursos Livres</h2>
              <p>
                Os cursos livres ofertados visam atender a complementação de
                horas extras curriculares para os alunos dos cursos de
                Licenciatura e de Bacharelados, assim como a capacitação e a
                formação continuada de diferentes profissionais, garantindo um
                bom desempenho no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-light">
            <div class="card-body">
              <img src={workingGroup} alt="Grupo de pessoas trabalhando"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
