import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Routes, Route,useLocation, Navigate} from 'react-router-dom';
import ItPage from './pages/it/ItPage';
import GamePage from './pages/game/GamePage';
import Home from './pages/home/Home';
import SportPage from './pages/sport/SportPage';
import MusicPage from './pages/music/MusicPage';

function App() {
    const location = useLocation();
    const [layer, setLayer] = useState<string>('me');

    useEffect(() => {
        if(location.pathname === '/it') {
            setLayer('it');
        }
    },[location.pathname])
  

    return (
        <div className='App'>
            <Header layer={layer} mini={!(location.pathname === '/' || location.pathname === '/home')}/>
            <div className='content'>
                <div className='contentWrapper'>
                    <Routes>
                        <Route path='/it' element={<ItPage/>}/>
                        <Route path='/game' element={<GamePage/>}/>
                        <Route path='/sport'  element={<SportPage/>}/>
                        <Route path='/music' element={<MusicPage/>}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path="*" element={<Navigate to='/home' replace />} />
                    </Routes>
                </div>   
            </div>
            <Footer/>
        </div>
  );
}

export default App;
