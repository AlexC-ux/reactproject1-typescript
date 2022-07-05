import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import View from './view';
import LogPage from "./log-in";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TickTackToe from "./tick-tack-toe";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<View />} />                   { /*   Главная страница     */}
            <Route path="login" element={<LogPage />} />            { /*   Страница авторизации: /войти     */}
            <Route path="ttt" element={<TickTackToe />}>            { /*   Страница "крестики-нолики"     */}
        </Route>
    </Routes>
</BrowserRouter>);