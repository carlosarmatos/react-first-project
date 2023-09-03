import './App.css';
import ListTwo from './components/ListTwo';


function App() {

  const myItems  = ['React', 'Vue', 'Angular'];

  return (
    <div className="App">
      <h1>Lists rendering</h1>
      <ListTwo items={myItems} />
      <ListTwo items={[]} />
    </div>
  );
}

export default App;
