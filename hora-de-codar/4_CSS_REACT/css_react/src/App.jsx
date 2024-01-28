import "./App.css";

{
  /* CSS de componente */
}
import MyComponent from "./components/MyComponent";

function App() {
  {/* Inline style dinâmico */}
  const n = 8;

  {/* Classes dinâmicas */}
  const redTitle = true;

  return (
    <>
      {/* CSS global */}
      <h1>CSS no React</h1>
      <hr />

      {/* CSS de componente */}
      <MyComponent />
      <hr />

      {/* Inline style dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS Dinâmico
      </h2>

      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
    </>
  );
}

export default App;
