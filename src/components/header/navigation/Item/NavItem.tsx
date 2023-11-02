import React, { FC } from 'react'
import style from './NavItem.module.css'

interface Props {
    image : string
}


const NavItem:FC<Props> = (props) => {
    return (
        <div className={style.navItem}>                        
            <div className={style.icon}>
                <img alt='icon' className={style.image} src={props.image}></img>
            </div>
            <hr className={style.bottomLine}></hr>
        </div>
    )
}


export default NavItem;