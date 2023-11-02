import React, { FC } from 'react'
import style from './Content.module.css'

interface Props {
    children?: React.ReactNode
}

const Content:FC<Props> = ({children}) => {
  return (
    <div className={style.content}>
        {children}
    </div>
  )
}

export default Content