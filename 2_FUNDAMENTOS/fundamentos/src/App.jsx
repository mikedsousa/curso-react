// 2 - Importando componentes

import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import './App.css'

// 5 - Hierarquia de Componentes
import MyComponent from './components/MyComponent'

// 6 - Eventos
import Events from './components/Events'

function App() {
  // 3 - Comentários
  return (
    <>
    {/* Comentários no JSX */}
    <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  )
}

export default App
