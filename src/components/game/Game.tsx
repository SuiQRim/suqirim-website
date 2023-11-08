import React, { FC } from 'react'
import { IGame } from '../../models/IGame'
import like from '../../Assets/Game/like.png'
import hollowLike from '../../Assets/Game/hollow_Like.png'
import style from './Game.module.css'

interface Props {
    game: IGame,
    hideLikes? : boolean,
    solo? : boolean,
    className? : string
}

const Game:FC<Props> = ({game, hideLikes, solo : isSolo, className}) => {

    const likes = [];
  
    for (let i = 3; i > 0; i--) {
        likes.push(
            <div key={i} className={style.like}>
                <img alt='icon' src={game.tier < i? hollowLike : like }/>
            </div>
        );
    }

    return (
        <div className={className}>
            <div className={isSolo ? style.gameSolo : style.gameInList}>
                <div className={style.icon}>
                    <img alt='icon' src={game.image}/>
                </div>
                <div className={style.content}>
                    <div className={style.name}>
                        <h4>{game.name}</h4>
                    </div>
                    <div className={style.tier}>
                        {hideLikes || likes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;