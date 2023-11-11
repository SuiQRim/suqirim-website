import React, { FC } from 'react'
import style from './Project.module.css'
import IProject from '../../models/IProject'
import Toggle from '../toggle/Toggle'

type Props = {
    project : IProject,
    changeDescription: (value: string) => void
}

const Project:FC<Props> = ({project, changeDescription}) => {
  return (
    <div style={{display: 'inline-block', height: '100%'}}>
        <div className={style.project}>

            <div className={style.name}>
                {project.name}
            </div>

            <div className={style.description}>
                <div>{project.description}</div>
            </div>

            <div className={style.technologies}>
                <div className={style.technologieWrapper}>
                    {project.technologies.map((hs, index) => 
                        <Toggle className={style.technologie} key={index} name={hs.name} description={hs.description} changeDescription={changeDescription}/>)
                    }
                </div>
            </div>
            <div className={style.linkWrapper}>
                <a href={project.link} target='_blank' rel="noreferrer">
                    <div className={style.link}>GitHub</div>
                </a>
            </div>
        
        </div>
    </div>
  )
}

export default Project