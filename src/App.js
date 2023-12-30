
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Authentication from './Authentication/Authentication';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={true?<Home/>: <Authentication/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
