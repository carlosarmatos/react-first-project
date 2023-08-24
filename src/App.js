import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Phrase from './components/Phrase';


function App() {
  return (
    <div className="App">
      <Phrase />
      <SayMyName name="Luna" />
      <People name="Frankie" age="30" profession="Journalist" picture="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
