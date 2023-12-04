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
import { layerContacts, contacts } from './storage/contacts/contacts';
import ISocialNetwork from './models/ISocialNetwork';

function App() {
    const location = useLocation();
    const [layer, setLayer] = useState<string>('me');
    const [socialNetworks, setSocialNetworks] = useState<ISocialNetwork[]>([]);

    useEffect(() => {
        if(location.pathname === '/it') {
            setLayer('it');
            setSocialNetworks(fintSocialNetworks('it'));
        }
        else {
            setSocialNetworks(fintSocialNetworks('me'));
        }
    },[location.pathname])
  
    function fintSocialNetworks (layer: string){
        return contacts.socialNetworks.filter(c => layerContacts.find(z => z.layer === layer)?.links.some(x => x === c.name));
    }

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
                    <Footer contacts={{email: contacts.email, phone : contacts.phone, socialNetworks : socialNetworks}}/>
                </div>   
            </div>
           
        </div>
  );
}

export default App;
