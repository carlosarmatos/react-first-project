import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Phrase from './components/Phrase';
import List from './components/List';
import Item from './components/Item';
import EventClick from './components/EventClick'
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <EventClick />
      <Form />
    </div>
  );
}

export default App;
