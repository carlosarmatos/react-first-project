import './App.css';
import SayMyName from './componentes/SayMyName';
import People from './componentes/People';

function App() {
  return (
    <div className="App">
      <SayMyName name="Luna" />
      <People name="Frankie" age="30" profession="Journalist" picture="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
