import "./SectionSix.css";

function SectionSix() {
  return (
    <section className="sectionSix">
      <div className="text">
        <hr className="m-auto" />
        <h1 className="">NOS MANDE UMA MENSAGEM</h1>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Coloque seu e-mail"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputName1">Nome</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            placeholder="Nome"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputSubject1">Assunto</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputSubject1"
            placeholder="Assunto"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensagem</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-outline-warning">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default SectionSix;
