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

// 11 - Renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  { id: 2, brand: "Kia", color: "Branco", km: 20000},
  { id: 3, brand: "Renault", color: "Azul", km: 32000},
];

// 12 - Fragmentos
import Fragment from './components/Fragment';

// 13 - Children
import Container from './components/Container';

// 14 - Função em pro
import ExecuteFunction from './components/ExecuteFunction';

// 15- State lift
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';


function App() {

  // 14- função em props
  function showMessage() {
    console.log("Evento do componente pai")
  }

  // 15 - State lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  
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
        {/* 11 - Renderização de listas de componentes */}
        {cars.map((car) =>(
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
          ))}
        {/* 12- Fragmentos */}
        <Fragment />
        {/* 13- Container */}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        {/* 14 - Função em prop */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* 15 - State lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
        
      </div>
  )
}

export default App
