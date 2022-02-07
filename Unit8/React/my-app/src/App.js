import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Bienvenida from './components/Bienvenida';

function App() {

  let variableTitulo = 'titanic'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pablo. Este es mi componente principal.
        </p>
        
        <Welcome titulo={variableTitulo} onClick="pulsaboton"></Welcome>
        <Welcome titulo="otro tit"></Welcome>
        <Bienvenida titu="Pablito"></Bienvenida>
      </header>
    </div>
  );
}

export default App;
