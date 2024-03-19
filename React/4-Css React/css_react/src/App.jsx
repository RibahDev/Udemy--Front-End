import './App.css'

// 2 - Css de componente
import MyComponent from './components/MyComponent';
import Title from "./components/Title";

function App() {
  // 4 - Inline style dinamico
  const n = 15;

  // 5 - Classes dinamicas
  const redTitle = true;

  
  return (
    <div className="App">
      {/*1 - CSS global */}
      <h1>CSS no React</h1>
      {/* 2 - CSS de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 3 - Inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Esse elemento tem estilo inline</p>
      {/* 4 - Inline style dinamico */}
      <h2 style={n > 11 ? {color: "purple"} : {color: "yellow"}}>Css dinamico</h2>
      <h2 style={n > 20 ? {color: "purple"} : {color: "yellow"}}>Css dinamico</h2>
      {/* 5 - Classes dinamicas */}
      <h2 className={redTitle ? "redtitle" : "title"}>Vai com calma, já deu certo!</h2>
      {/* 6 - Css modules */}
      <Title />
    </div>
     
  )
}

export default App
