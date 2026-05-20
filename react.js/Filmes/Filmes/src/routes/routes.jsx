import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from '../Pages/Login/Login.jsx'
import CadastroFilme from '../Pages/cadastrofilme/cadastroFIlme.jsx'
import CadastroGenero from '../Pages/CadastroGenero/CadastroGenero.jsx'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/filmes" element={<CadastroFilme />} />
                <Route path="/generos" element={<CadastroGenero />} />


            </Routes>


        </BrowserRouter>


    )


}
export default Rotas