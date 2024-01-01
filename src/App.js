
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Authentication from './components/Authentication/Authentication';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={true?<Home/>: <Authentication/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
