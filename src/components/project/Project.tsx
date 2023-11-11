import React, { FC } from 'react'
import style from './Project.module.css'
import IProject from '../../models/IProject'

type Props = {
    project : IProject
}

const Project:FC<Props> = ({project}) => {
  return (
    <div className={style.project}>

        <div className={style.name}>
            {project.name}
        </div>

        <div className={style.description}>
            <div>{project.description}</div>
        </div>

       
        <div className={style.linkWrapper}>
            <a href={project.link} target='_blank'>
            <div className={style.link}>Посмотреть...</div>
            </a>
        </div>
      
    </div>
  )
}

export default Project