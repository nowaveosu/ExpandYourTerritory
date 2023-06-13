import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';

const App = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/game" element={<Game />}></Route>
        </Routes>
    </BrowserRouter>
    );
};

export default App;