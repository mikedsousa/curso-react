import { useState } from 'react'

const Data = () => {

  let someData = 10;

  const [number, setNumber] = useState(15)

  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(number + 2)}>Mudar Variável</button>
    </div>
  )
}

export default Data