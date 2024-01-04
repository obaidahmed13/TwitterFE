
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Authentication from './components/Authentication/Authentication';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './Store/Auth/Action';
import Home from './components/Home/Home';


function App() {
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(jwt) {
      dispatch(getUserProfile(jwt))
      navigate("/")
    }
  },[auth.jwt])

  return (
    <div className="">
      <Routes>
        <Route path='/*' element={auth.user?<Home/>: <Authentication/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
