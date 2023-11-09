import React, { FC } from 'react'
import style from './Header.module.css'
import profile from '../../Assets/Profile/Q34F.png'
import Navigation from '../navigation/Navigation'
import { Tabs } from '../../storage/tabs/Tabs'
import { Link } from 'react-router-dom'

const tabs = Tabs;

type Props = {
    mini? : boolean
}

const Header : FC<Props> = ({mini}) => {
  return (
    <div className={mini ? style.headerMini : style.header}>
        <div className={style.navPanel}>
            <Navigation icons={tabs} />
        </div>
    
        <div className={mini ? style.profilePanelMini : style.profilePanel}>
            <Link to='/'>
                <img alt='icon' className={mini ? style.iconMini : style.icon} src={profile}/>
            </Link>
        </div>
    
    </div>
  )
}

export default Header;