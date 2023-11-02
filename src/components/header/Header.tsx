import React, { FC } from 'react'
import style from './Header.module.css'
import itIcon from '../../Assets/CatalogIcons/it_icon.png'
import gameIcon from '../../Assets/CatalogIcons/game_icon.png'
import sportIcon from '../../Assets/CatalogIcons/Sport_icon.png'
import musicItem from '../../Assets/CatalogIcons/Music_icon.png'
import profile from '../../Assets/Profile/Q34F.png'
import Navigation from './navigation/Navigation'

const icons : string [] = [
    itIcon,
    gameIcon,
    sportIcon,
    musicItem
]

type Props = {
    mini? : boolean
}

const Header : FC<Props> = (props) => {
  return (
    <div className={style.header}>
        <div className={style.navPanel}>
            <Navigation icons={icons} />
        </div>
        <div className={style.profilePanel}>
            <img alt='icon' className={props.mini ? style.iconMini : style.icon} src={profile}/>
        </div>
    </div>
  )
}

export default Header;