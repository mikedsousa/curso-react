const ConditionalRender = () => {
  const x = 5;

  return (
    <div>
      {/* 7 - Render condicional */}
      <h3>Isso será exibido?</h3>
      {x > 2 && <p>Sim</p>}
    </div>
  );
};

export default ConditionalRender;
