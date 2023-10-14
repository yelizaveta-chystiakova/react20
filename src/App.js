
import Button from './components/button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button onClick={()=> alert('Hello red')} style={{background: 'red', padding: '10px', margin:'20px'}}>red</Button>
      <Button onClick={()=> alert('Hello green')} style={{background: 'green', padding: '10px', margin:'20px'}}>green</Button>
      <Button onClick={()=> alert('Hello blue')} style={{background: 'blue', padding: '10px', margin:'20px'}}>blue</Button>
    </div>
  );
}

export default App;
