import logo from './logo.svg';
import './App.css';
import CakeComponent from './components/CakeComponent';
import {Routes,Route,useNavigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

function App() {

  const user = useSelector(state => state.user)
  console.log(user)
  const navigate = useNavigate();

  useEffect(()=>{
    if(user.email){
      navigate('/dashboard')
    }else{
      navigate('/login')
    }
  },[])


  return (
    // <CakeComponent/>

    <Routes>
      <Route index Component={HomePage} />
      <Route path='login' Component={LoginPage} />
      <Route path='dashboard' Component={DashboardPage} />
    </Routes>
  );
}

export default App;
