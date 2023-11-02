import React, { FC } from 'react'
import style from './Navigation.module.css'
import NavItem from './Item/NavItem'


interface Props {
    icons : string []
}

const Navigation:FC<Props> = (props) => {
  return (
    <div className={style.navigation}>
        {props.icons.map((i, index) => {
            return (
                <NavItem key={index} image={i}/>
            )})
        }      
    </div>
  )
}

export default Navigation;