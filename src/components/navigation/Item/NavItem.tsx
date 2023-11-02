import React, { FC } from 'react'
import style from './NavItem.module.css'
import {Link} from 'react-router-dom'

interface Props {
    image : string,
    path : string
}


const NavItem:FC<Props> = (props) => {
    return (
        <Link to={props.path}>
            <div className={style.navItem}>                       
                <div className={style.icon}>
                    <img alt='icon' className={style.image} src={props.image}></img>
                </div>
                <hr className={style.bottomLine}></hr>
            </div>
        </Link>
    )
}


export default NavItem;