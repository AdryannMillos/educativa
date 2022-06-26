import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Adm.css";
import workingCouple from "../imgs/workingCouple.png";
import businessCouple from "../imgs/BusinessCouple.png";
import teacher from "../imgs/Teacher.png";
import meeting from "../imgs/meeting.png";
import SmilingWorkingWoman from "../imgs/SmillingWorkingWoman.png";
import nurse from "../imgs/nurse.png";

function Adm() {
  return (
    <>
      <section className="adm">
        <Navbar />
        <div className="text">
          <hr className="m-auto" />
          <h1 className="">EDUCAÇÃO</h1>
          <h2>Clique em saiba mais e faça a sua matrícula </h2>
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
                <button type="button" class="btn btn-outline-warning">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card border-light">
              <div class="card-body">
                <img
                  src={businessCouple}
                  alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
                ></img>
                <h3 class="card-title cardText">Admin. e Contábeis</h3>
                <button type="button" class="btn btn-outline-warning">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card border-light">
              <div class="card-body">
                <img
                  src={teacher}
                  alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
                ></img>
                <h3 class="card-title">Educação </h3>
                <button type="button" class="btn btn-outline-warning">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card border-light">
              <div class="card-body">
                <img
                  src={meeting}
                  alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
                ></img>
                <h3 class="card-title">Gestão </h3>
                <button type="button" class="btn btn-outline-warning">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card border-light">
              <div class="card-body">
                <img
                  src={SmilingWorkingWoman}
                  alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
                ></img>
                <h3 class="card-title">Informática </h3>
                <button type="button" class="btn btn-outline-warning">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card border-light">
              <div class="card-body">
                <img
                  src={nurse}
                  alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
                ></img>
                <h3 class="card-title">Saúde </h3>
                <button type="button" class="btn btn-outline-warning">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Adm;
