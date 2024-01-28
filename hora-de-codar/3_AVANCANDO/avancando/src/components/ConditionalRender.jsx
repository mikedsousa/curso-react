const ConditionalRender = () => {
  const x = 5;

  const name = "Mike";

  return (
    <div>
      {/* 7 - Render condicional */}
      <h3>Isso será exibido?</h3>
      {x > 2 && <p>Sim</p>}
      {/* 8 - Else */}
      <h3>Render ternário</h3>
      {name === 'Mike' ? (
        <div>
          <p> Olá {name}</p>
        </div>
      ) : (
        <div>
          <p>Olá estranho</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
