import React, { FC } from 'react'
import style from './NavItem.module.css'
import {NavLink} from 'react-router-dom'

interface Props {
    image : string,
    path : string
}


const NavItem:FC<Props> = (props) => {
    return (
        <NavLink to={props.path} className={({ isActive }) => (isActive ? style.activeLink : style.navItem)}>
            
            <div className={style.icon}>
                <img alt='icon' className={style.image} src={props.image}></img>
            </div>
            <hr className={style.bottomLine}></hr>

        </NavLink>
    )
}


export default NavItem;