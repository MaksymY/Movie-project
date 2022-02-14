import './App.css';
import { Movies } from './Movies';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', fontWeight: 'bold'}}>Movie Project Hetic 2022</h1>
        <img style={{ width: '4em', objectFit: 'cover' }} src={require('./mov.png')} alt="Logo" />
      </div>
      <Movies />
    </div>
  );
}

export default App;
