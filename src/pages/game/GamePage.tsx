import React, { useState } from 'react'
import { getGameContent } from '../../storage/game/games';
import Game from '../../components/game/Game';
import style from './GamePage.module.css'
import Input from '../../ui/input/Input';
import { IGame } from './../../models/IGame';

type Props = {}

const GamePage = (props: Props) => {

    const games = getGameContent;

    const [gameFilter, setGameFilter] = useState('');
    
    const [filteredGames, setfilteredGames] = useState<IGame[]>(games);
    
    const filterGamesBySearch = (event : React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;
        setGameFilter(value);

        let updatedList = [...games];

        updatedList = updatedList.filter((item) => 
            item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        
        setfilteredGames(updatedList);
    };
    
    return (
        <div className={style.game}>
            <div className={style.profile}>
                
                <div>
                    <h2>Me & Games</h2>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, a! Nulla minima dolores, optio possimus nobis tenetur aliquam exercitationem eligendi dicta. Debitis rem, dignissimos tenetur fugiat repellat cupiditate provident dolore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ut repellendus ipsa. Corrupti in libero facere fuga, eligendi repellendus perferendis provident minus reiciendis quibusdam ab quae obcaecati quasi commodi harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat error vitae quis itaque cumque sapiente temporibus laborum magnam rem qui corrupti consequatur saepe repellendus, quibusdam dolorum, tenetur quisquam expedita!
                    </div>
                </div>

                <div>
                    <h2>В активном прохождении</h2>
                    <div className={style.gamesWrap}>
                        <Game className={style.soloGame} game={{...games[1], name : 'Baldur\'s Gate 3'}} solo hideLikes/>
                        <Game className={style.soloGame} game={{...games[1], name : 'Hades'}} solo hideLikes/>
                    </div>
                </div>

                <div>
                    <h2>Катаю с друзьями</h2>
                    <div>
                        <Game className={style.soloGame} game={{...games[1], name : 'Dota 2'}} solo hideLikes/>
                    </div>
                </div>
            </div>
            <div className={style.bounty}>
                <h2>Пройденные игры</h2>
                <Input type='text' onChange={filterGamesBySearch} value={gameFilter} placeholder='Найти игру'></Input>
                <div className={style.games}>{filteredGames.map((g, index) => <Game key={index} game={g}></Game>)}</div>
            </div>  
        </div>    
    )
}


export default GamePage;