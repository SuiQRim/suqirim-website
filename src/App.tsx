import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Routes, Route,useLocation} from 'react-router-dom';
import ItPage from './pages/it/ItPage';
import GamePage from './pages/game/GamePage';
import Home from './pages/home/Home';
import SportPage from './pages/sport/SportPage';
import MusicPage from './pages/music/MusicPage';

function App() {
    const location = useLocation();
    return (
        <div className='App'>
            <Header mini={!(location.pathname === '/')}/>
            <div className='content'>
                <Routes>
                    <Route path='*' element={<Home/>}/>
                    <Route path='/it' element={<ItPage/>}/>
                    <Route path='/game' element={<GamePage/>}/>
                    <Route path='/sport'  element={<SportPage/>}/>
                    <Route path='/music' element={<MusicPage/>}/>
                </Routes>     
            </div>
            <Footer/>
        </div>
  );
}

export default App;
