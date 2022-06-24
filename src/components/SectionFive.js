import "./SectionFive.css";
import unintaLogo from "../imgs/unintaLogo.png";
import maltaLogo from "../imgs/malta.png";
import FAEPI from "../imgs/FAEPI.png";

function SectionFive() {
  return (
    <section className="sectionFive">
      <div className="text">
        <hr className="m-auto" />
        <h1 className="">PARCERIAS</h1>
        <h2 className="m-auto">Conheça os nossos parceiros</h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={unintaLogo}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={maltaLogo}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
                className="malta"
              ></img>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={FAEPI}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
