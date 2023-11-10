import React, { useState } from 'react'
import { GameStatistic } from '../../storage/game/games';
import Game from '../../components/game/Game';
import style from './GamePage.module.css'
import Input from '../../ui/input/Input';
import { IGame } from './../../models/IGame';

type Props = {}

const GamePage = (props: Props) => {

    const passedGames = GameStatistic.passed;
    const activeGames = GameStatistic.active;
    const playWithFriendGames = GameStatistic.playWithFriends;

    const [gameFilter, setGameFilter] = useState('');
    
    const [filteredGames, setfilteredGames] = useState<IGame[]>(passedGames);
    
    const filterGamesBySearch = (event : React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;
        setGameFilter(value);

        let updatedList = [...passedGames];

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
                    <div className='text'>
                        {GameStatistic.aboutMe}
                    </div>
                </div>

                <div>
                    <h2>В активном прохождении</h2>
                    <div className={style.gamesWrap}>
                        {
                            activeGames.map((g, index) => 
                                <Game className={style.soloGame} key={index} game={g}  solo hideLikes></Game>)
                        }
                    </div>
                </div>

                <div>
                    <h2>Катаю с друзьями</h2>
                    <div className={style.gamesWrap}>
                    {
                            playWithFriendGames.map((g, index) => 
                                <Game className={style.soloGame} key={index} game={g}  solo hideLikes></Game>)
                        }
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