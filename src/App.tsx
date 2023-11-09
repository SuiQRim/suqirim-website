import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Routes, Route,useLocation} from 'react-router-dom';
import It from './pages/it/It';
import GamePage from './pages/game/GamePage';
import Home from './pages/home/Home';

function App() {
    const location = useLocation();
    return (
        <div className='App'>
            <Header mini={!(location.pathname === '/')}/>
            <div className='content'>
                <Routes>
                    <Route path='*' element={<Home/>}/>
                    <Route path='/it' element={<It/>}/>
                    <Route path='/game' element={<GamePage/>}/>
                    <Route path='/sport'/>
                    <Route path='/music'/>
                </Routes>     
            </div>
            <Footer/>
        </div>
  );
}

export default App;
