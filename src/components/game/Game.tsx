import React, { FC } from 'react'
import { IGame } from '../../models/IGame'
import like from '../../Assets/Game/like.png'
import icon from '../../Assets/Game/icon_tempate.png'
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
  
    if(game.tier !== undefined){
        for (let i = 3; i > 0; i--) {
            likes.push(
                <div key={i} className={style.like}>
                    <img alt='icon' src={game.tier < i? hollowLike : like }/>
                </div>
            );
        } 
    }
    
    return (
        <div className={className}>
            <div className={isSolo ? style.gameSolo : style.gameInList}>
                <div className={style.icon}>
                    <img alt='icon' src={icon}/>
                </div>
                <div className={style.content}>
                    <div className={style.name}>
                        <span>{game.name}</span>
                    </div>
                    {
                        (hideLikes && likes.length !== 0) ||
                        <div className={style.tier}>
                            <div className={style.likes}>
                                {likes} 
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Game;