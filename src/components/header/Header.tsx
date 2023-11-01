import React from 'react'
import style from './Header.module.css'
import itIcon from '../../Assets/CatalogIcons/it_icon.png'
import gameIcon from '../../Assets/CatalogIcons/game_icon.png'
import sportIcon from '../../Assets/CatalogIcons/Sport_icon.png'
import musicItem from '../../Assets/CatalogIcons/Music_icon.png'

const icons = [
    itIcon,
    gameIcon,
    sportIcon,
    musicItem
]

type Props = {}

export default function Header({}: Props) {
  return (
    <div className={style.header}>
        <div className={style.navPanel}>

            <div className={style.navigation}>
                {icons.map((i) => {
                    console.log(i)
                    return (
                        <div key={i} style={{height: '48px', width : '96px', marginRight: '40px'}}>
                            <img style={{height: '100%', width: '100%'}} src={i}></img>
                        </div>
                    )})
                }      
            </div>
        </div>
        
        <div className={style.profilePanel}>
            <div className={style.ikon}>                   
            </div>
        </div>
    </div>
  )
}