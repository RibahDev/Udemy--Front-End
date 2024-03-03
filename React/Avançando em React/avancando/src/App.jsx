import './App.css'

 {/*2- Imagem em assets */}
 import night from './assets/night.jpg'
 
// 3- useState
import Data from './components/Data';

// 4- Renderização de lista
import ListRender from './components/ListRender';

// 7 - Condicional Render
import ConditionalRender from './components/ConditionalRender';

//8 -  Props
import ShowUserName from './components/ShowUserName';

// 9 - Desestruturando props
import CarDetails from './components/CarDetails';

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
        {/*7 - Render Condicional */}
        <ConditionalRender />
        {/*8 - Props */}
        <ShowUserName name="João"/>
        {/* 9 - Desestruruando props */}
        <CarDetails brand="VW" km={10000} color="White"/>
        {/* 10 - Reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={200000} color="Red" />
        <CarDetails brand="Hyundai" km={0} color="blue" />
      </div>
  )
}

export default App
