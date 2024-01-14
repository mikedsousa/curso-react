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
function App() {
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

    </>
  );
}

export default App;
