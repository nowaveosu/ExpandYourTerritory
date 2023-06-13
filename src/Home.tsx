import React, { useState } from 'react';
import '../style/homeStyle.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <h1>Expand Your Territory</h1>
            <button className='play'>
                <Link to="/game">플레이하기</Link>
            </button>
            
        </>
    );
}

export default Home;