//import logo from './logo.svg';
import './App.css';
import './components/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationFreelancer from './pages/RegistrationFreelancer';
import HomeComponent from './pages/HomeComponent';

import {Routes, Route, Navigate} from 'react-router-dom';


export  default function App() {
  return (
    <div>      
      <Header></Header>
      
      <Footer name="profMatch"></Footer>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>} ></Route>
        <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="/newFreelancer" element={<RegistrationFreelancer></RegistrationFreelancer>}></Route>
      </Routes>

    </div>
  );
}
