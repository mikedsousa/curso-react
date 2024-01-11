// 6 - Eventos

const Events = () => {

  const handleClick = () => {
    console.log('executou')
  }

  // 8 - Função de renderização
  const renderSomething = (x) => {
    if(x) {
      return <p>Renderizando algo</p>
    } else {
      return <p>Renderizando outra coisa</p>
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => console.log('testando um evento')}>Clique aqui</button>
      </div>
      {/* 7 - Evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui</button>
      </div>
      {/* 8 - Função de renderização */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
