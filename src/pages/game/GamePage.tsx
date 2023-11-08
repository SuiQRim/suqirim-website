import React from 'react'
import { getGameContent } from '../../storage/game/games';
import Game from '../../components/game/Game';
import style from './GamePage.module.css'
import Input from '../../ui/input/Input';

type Props = {}

const GamePage = (props: Props) => {

    const games = getGameContent;

    return (
        <div className={style.game}>
            <div className={style.profile}>
                
                <div>
                    <h2>Me & Games</h2>
                    <div style={{marginTop :'10px'}}>
                        Тут накидаю какую-то инфу по интересующим жанрам, возможно хронологию и т.д.
                    </div>
                </div>

                <div>
                    <h2>Сейчас в активном прохождении</h2>
                    <div style={{display: 'flex', gap : '20px 40px', marginTop :'10px', flexFlow: 'wrap'}}>
                        <Game className={style.soloGame} game={{...games[1], name : 'Baldur\'s Gate 3'}} solo hideLikes/>
                        <Game className={style.soloGame} game={{...games[1], name : 'Hades'}} solo hideLikes/>
                    </div>
                </div>

                <div>
                    <h2>Люблю покатать вместе с друзьями</h2>
                    <div style={{marginTop :'10px'}}>
                        <Game className={style.soloGame} game={{...games[1], name : 'Dota 2'}} solo hideLikes/>
                    </div>
                </div>
            </div>
            <div className={style.bounty}>
                <h1>Пройденные игры</h1>
                <Input type='text' placeholder='Найти игру'></Input>
                <div className={style.games}>{games.map(g => <Game game={g}></Game>)}</div>
            </div>  
        </div>    
    )
}


export default GamePage;