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
            <div>
                <img alt='icon' className={style.image} src={props.image}></img>
            </div>
        </NavLink>
    )
}


export default NavItem;