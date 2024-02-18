import './App.css'

 {/*2- Imagem em assets */}
 import night from './assets/night.jpg'

// 3- useState
import Data from './components/Data';

// 4- Renderização de lista
import ListRender from './components/ListRender';

function App() {
  return (
      <div className='App' style={{paddingBottom: '500px'}}>
        <h1>Avançando em React</h1>
        {/*1- Imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/*2 - Imagem em assets */}
        <img src={night} alt="Outrra imagem" />
        {/* 3 - useState */}
        <Data />
        {/* 4 - Render de lista */}
        <ListRender />
      </div>
  )
}

export default App
