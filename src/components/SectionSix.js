import "./SectionSix.css";
import emailjs from '@emailjs/browser';

function SectionSix() {

  const sendEmail = (e) => {
    e.preventDefault();
   if(e.nativeEvent.target[0].value == '' || e.nativeEvent.target[1].value == '' ||e.nativeEvent.target[2].value == '' ||e.nativeEvent.target[3].value == ''){
     return alert("Por favor preencha todos os campos!")
   }
    emailjs.sendForm('service_mlve24b', 'template_educativa', e.target, 'tvE-_JWV-MlffeOk0')
      .then((result) => {
          console.log(result.text);
          alert('E-mail enviado com sucesso');
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="sectionSix">
      <div className="text">
        <hr className="m-auto" />
        <h1 className="">NOS MANDE UMA MENSAGEM</h1>
      </div>
      <form onSubmit={sendEmail}>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Coloque seu e-mail"
          />
        </div>
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Nome"
          />
        </div>
        <div class="form-group">
          <label for="subject">Assunto</label>
          <input
            type="text"
            class="form-control"
            id="subject"
            name="subject"
            placeholder="Assunto"
          />
        </div>
        <div class="form-group">
          <label for="message">Mensagem</label>
          <textarea
            class="form-control"
            id="message"
            name="message"
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
