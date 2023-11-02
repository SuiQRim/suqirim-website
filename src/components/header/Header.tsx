import React, { FC } from 'react'
import style from './Header.module.css'
import profile from '../../Assets/Profile/Q34F.png'
import Navigation from '../navigation/Navigation'
import { Tabs } from '../../Storage/Tabs/Tabs'

const tabs = Tabs;

type Props = {
    mini? : boolean
}

const Header : FC<Props> = (props) => {
  return (
    <div className={style.header}>
        <div className={style.navPanel}>
            <Navigation icons={tabs} />
        </div>
        <div className={style.profilePanel}>
            <img alt='icon' className={props.mini ? style.iconMini : style.icon} src={profile}/>
        </div>
    </div>
  )
}

export default Header;