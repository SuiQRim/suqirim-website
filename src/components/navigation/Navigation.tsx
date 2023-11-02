import React, { FC } from 'react'
import style from './Navigation.module.css'
import NavItem from './Item/NavItem'
import { Tab } from '../../Models/Tab'


interface Props {
    icons : Tab []
}

const Navigation:FC<Props> = (props) => {
  return (
    <div className={style.navigation}>
        {props.icons.map((t, index) => {
            return (
                <NavItem key={index} path={t.path} image={t.icon}/>
            )})
        }      
    </div>
  )
}

export default Navigation;