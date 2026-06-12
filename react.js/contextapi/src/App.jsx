
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home';
import './App.css';
import Perfil from './componentes/perfil/perfil';
import MyPage from './componentes/mypage/mypage';
import Header from './componentes/header/Header';
import PrivateRoute from './componentes/Routes/PrivateRoute';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    
        <Route  path='/' element={<Home/>} />
        <Route path='/perfil' element={<Perfil/>} />
         <Route path='/my-blog' element={<PrivateRoute><MyPage/></PrivateRoute>}  />
       


      
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;