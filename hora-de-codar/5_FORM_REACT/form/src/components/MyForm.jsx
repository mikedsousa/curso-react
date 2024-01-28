import "./MyForm.css";

{
  /* Gerenciamento de Dados */
}
import { useState } from "react";

const MyForm = ({ userEmail, userName }) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // Envio de formulário

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio);
    console.log("Formulário enviado");

    setEmail("");
    setName("");
    setBio("");
  };

  return (
    <div>
      {/* Crição de Forms */}
      {/* Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // Controled Inputs
            value={name || ""}
          />
        </div>

        {/* Label envolvendo o input */}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            // Simplificando a manipulação
            onChange={(e) => setEmail(e.target.value)}
            // Controled Inputs
            value={email || ""}
          />
        </label>
        <label>
          {/* Textarea */}
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
