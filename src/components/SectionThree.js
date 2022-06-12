import "./SectionThree.css";
import workingWoman from "../imgs/workingWoman.png";
import studentGroup from "../imgs/studentGroup.png";

function SectionThree() {
  return (
    <section className="sectionThree">
      <hr className="m-auto" />
      <div className="text">
        <h1 className="text-tittle">AQUI VOCÊ APRENDE MAIS EM POUCO TEMPO!</h1>
        <p className="text-body">
          De acordo com a Lei nº. 9394/96, o Decreto nº. 5.154/04 e a
          Deliberação CEE 14/97, os cursos livres são uma modalidade de ensino
          legal e válida em todo o território nacional, ainda que não sejam
          regulamentados pelo MEC. Esses cursos têm caráter não-formal, podem
          ser ofertados tanto de forma presencial, quanto online e são
          extremamente democráticos e acessíveis.
        </p>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={studentGroup}
                alt="Um grupo de estudantes em pé, formado por duas três mulheres e um homem, o grupo está segurando cadernos e usando mochilas"
              ></img>
              <h3 class="card-title">Cursos Presenciais</h3>
              <p class="card-text">
                Oferecemos vários cursos para a formação de profissionais
                qualificados, esses cursos são para quem quer começar uma
                carreira, como também para quem já possui uma formação e busca
                novas oportunidades no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card border-light">
            <div class="card-body">
              <img
                src={workingWoman}
                alt="Uma mulher de cabelos curtos sentada e de frente pra um monitor, aparentemente trabalhando seriamente"
              ></img>
              <h3 class="card-title">Cursos On-line</h3>
              <p class="card-text">
                Todos os nossos cursos podem ser acessados online, eles são
                programados com meotodologias agéis para o completo aprendizado,
                além disso eles atestam a participação do estudante nas aulas e
                servem como comprovantes de horas extra curriculares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
