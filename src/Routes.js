import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Produto from './pages/Produto';
import Sobre from './pages/Sobre';
import Cart from './pages/Cart';

const Rotas = () => {
    return(
        <BrowserRouter>
                 <h1>Tegloja</h1>
        <Routes>
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/carrinho' element={<Cart />} />
            <Route path='/' element={<Home />} />{/*Main page*/}
            <Route path='/produto' element={<Produto />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </BrowserRouter>
    )
 
}
export default Rotas;