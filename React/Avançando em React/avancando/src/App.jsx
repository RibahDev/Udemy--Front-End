import './App.css'

 {/*2- Imagem em assets */}
 import night from './assets/night.jpg'
function App() {

  return (
      <div>
        <h1>Avançando em React</h1>
        {/*1- Imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* Imagem em assets */}
        <img src={night} alt="Outrra imagem" />
      </div>
  )
}

export default App
