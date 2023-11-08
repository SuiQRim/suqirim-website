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
                        Тут накидаю какую-то инфу Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi incidunt voluptatum asperiores possimus sit dolore exercitationem aspernatur pariatur ad, recusandae soluta ipsa odit reprehenderit vitae libero consequuntur dicta! Nulla, quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam, quibusdam, et eaque iusto quaerat omnis voluptatum sit quo dolorem libero quasi? Similique eaque rem esse omnis aliquid ipsam cupiditate!
                    </div>
                </div>

                <div>
                    <h2>В активном прохождении</h2>
                    <div style={{display: 'flex', gap : '20px 40px', marginTop :'10px', flexFlow: 'wrap'}}>
                        <Game className={style.soloGame} game={{...games[1], name : 'Baldur\'s Gate 3'}} solo hideLikes/>
                        <Game className={style.soloGame} game={{...games[1], name : 'Hades'}} solo hideLikes/>

                    </div>
                </div>

                <div>
                    <h2>Катаю с друзьями</h2>
                    <div style={{marginTop :'10px'}}>
                        <Game className={style.soloGame} game={{...games[1], name : 'Dota 2'}} solo hideLikes/>
                    </div>
                </div>
            </div>
            <div className={style.bounty}>
                <h2>Пройденные игры</h2>
                <Input type='text' placeholder='Найти игру'></Input>
                <div className={style.games}>{games.map((g, index) => <Game key={index} game={g}></Game>)}</div>
            </div>  
        </div>    
    )
}


export default GamePage;