/* 2 - Imagem em assets */
import streets from "./assets/city.jpg";

/* 3 - useState */
import { useState } from "react";

import "./App.css";
import Data from "./components/Data";

// 4 - Renderização de listas
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

{
  /* 11 - Renderização de listas com componente*/
}

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {

  function showMessage() {
    console.log("Hello World!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img1.jpg" alt="paisagem" />
      {/* 2 - Imagem em assets */}
      <img src={streets} alt="ruas a noite" />
      {/* 3 - useState */}
      <Data />
      <ListRender />
      <ConditionalRender />
      {/* 9 - Props */}

      <ShowUserName name="Mike" />
      {/* 9 - Desestruturando props */}
      <CarDetails brand="Ford" km={999} color="Vermelho" />

      {/* 10 - Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={11999} color="Azul" />
      <CarDetails brand="Chevrolet" km={99999} color="Preto" />

      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {/* 13 - Children*/}

      <Container>
        <p>Paragrafo do componente pai</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>

      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </>
  );
}


export default App;
