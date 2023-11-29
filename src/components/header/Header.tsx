import React, { FC } from 'react'
import style from './Header.module.css'
import profile from '../../Assets/Profile/Q34F.png'
import Navigation from '../navigation/Navigation'
import { Tabs } from '../../storage/tabs/Tabs'

const tabs = Tabs;

type Props = {
    mini? : boolean,
    layer : string,
}

const Header : FC<Props> = ({mini, layer}) => {

    const filteredTabs = tabs.filter(a => a.layer === layer)

    return (
    <div className={mini ? style.headerMini : style.header}>
        <div className={style.navPanel}>
            <Navigation icons={filteredTabs} />
        </div>
    
        <div className={style.profilePanel}>

            <div className={style.iconWrapper}>
                <div className={style.icon}>
                    <img alt='icon' src={profile}/>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default Header;