import React, { FC } from 'react'
import { IContainer as IGame } from '../../models/IContainer'
import like from '../../Assets/Game/like.png'
import style from './Game.module.css'

interface Props {
    game: IGame
}

const Game:FC<Props> = ({game}) => {

    const likes = [];
  
    for (let i = 0; i < game.tier; i++) {
      likes.push(
        <div className={style.like}>
            <img key={i} src={like}/>
        </div>
        );
    }

    return (
        <div className={style.container}>
            <div className={style.icon}>
                <img alt='image' src={game.image}/>
            </div>
            <div className={style.content}>
                <div className={style.name}>
                    <h4>{game.name}</h4>
                </div>
                <div className={style.tier}>

                    {likes}  
                    
                </div>
            </div>
        </div>
    )
}

export default Game;