import React from 'react'
import { getGameContent } from '../../storage/game/games';
import Game from '../../components/game/Game';
import style from './GamePage.module.css'

type Props = {}

const GamePage = (props: Props) => {

    const games = getGameContent;

    
    return (
        <div className={style.game}>
            <div className={style.profile}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ab! Facilis facere consequatur aspernatur, similique eligendi corrupti inventore fuga, fugit rerum rem voluptate ipsam molestiae distinctio architecto, doloremque nemo. Vitae!
            </div>
            <div className={style.bounty}>
                {games.map(g => <Game game={g}></Game>)}
            </div>  
        </div>    
    )
}


export default GamePage;