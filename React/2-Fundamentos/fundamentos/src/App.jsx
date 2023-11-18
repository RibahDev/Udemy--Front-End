import './App.css';
// 2 - Importando componentes
import FirstComponent from './components/FirstComponent.jsx';

// 4 - Template expression
import TemplateExpression from './components/TemplateExpression.jsx';

// 5 - Hierarquia de componentes
import MyComponent from './components/MyComponent.jsx';

// 6 - Eventos
import Events from './components/Events.jsx';
function App() {
  // 3 - Comentários
  return ( 
    <div className='App'>
      <h1>Fundamentos do React</h1>
      <FirstComponent /> 
      <TemplateExpression />
      <MyComponent />
      <Events />
  </div>  
  );
}

export default App
