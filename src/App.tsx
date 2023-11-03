import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Routes, Route,useLocation} from 'react-router-dom';
import It from './pages/it/It';
import Game from './pages/game/Game';
import Content from './components/content/Content';
import Home from './pages/home/Home';

function App() {
    const location = useLocation();
    console.log(location)
    return (
        <div className='App'>
            <Header mini={!(location.pathname === '/' || location.pathname === '/home')}/>
            <Content>
                <Routes>
                    <Route path='*' element={<Home/>}/>
                    <Route path='/it' element={<It/>}/>
                    <Route path='/game' element={<Game/>}/>
                    <Route path='/sport'/>
                    <Route path='/music'/>
                </Routes>     
            </Content>
            <Footer/>
        </div>
  );
}

export default App;
