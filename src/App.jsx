import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Rutas from './Servicios/Rutas';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Rutas />
      </Router>   
    </div>
  );
}

export default App;