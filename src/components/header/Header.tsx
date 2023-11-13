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
    
        <div className={style.profilePanel}>

            <Link className={style.iconWrapper} to='/'>
                <div className={style.icon}>
                    <img alt='icon' src={profile}/>
                </div>
            </Link>

        </div>
    
    </div>
  )
}

export default Header;