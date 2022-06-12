import "./SectionFour.css";
import workingCouple from "../imgs/workingCouple.png";
import studentGroup from "../imgs/studentGroup.png";

function SectionFour() {
  return (
    <section className="sectionFour">
      <hr className="m-auto" />
      <div className="text">
        <h1 className="text-tittle">ÁREAS OFERTADAS</h1>
        <h2>Clique em saiba mais e conheça cada um dos cursos</h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={workingCouple}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
              <h3 class="card-title">Administração </h3>
              <button type="button" class="btn btn-outline-warning">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={workingCouple}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
              <h3 class="card-title">Administração </h3>
              <button type="button" class="btn btn-outline-warning">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={workingCouple}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
              <h3 class="card-title">Administração </h3>
              <button type="button" class="btn btn-outline-warning">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={workingCouple}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
              <h3 class="card-title">Administração </h3>
              <button type="button" class="btn btn-outline-warning">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={workingCouple}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
              <h3 class="card-title">Administração </h3>
              <button type="button" class="btn btn-outline-warning">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={workingCouple}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
              <h3 class="card-title">Administração </h3>
              <button type="button" class="btn btn-outline-warning">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
