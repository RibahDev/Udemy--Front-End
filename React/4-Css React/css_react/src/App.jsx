import './App.css'

// 2 - Css de componente
import MyComponent from './components/MyComponent'

function App() {
  // 4 - Inline style dinamico
  const n = 15;
  
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

    </div>
     
  )
}

export default App
