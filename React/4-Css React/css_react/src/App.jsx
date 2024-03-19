import './App.css'

// 2 - Css de componente
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className="App">
      {/*1 - CSS global */}
      <h1>CSS no React</h1>
      {/* 2 - CSS de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 3 - Inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Esse elemento tem estilo inline</p>
    </div>
     
  )
}

export default App
