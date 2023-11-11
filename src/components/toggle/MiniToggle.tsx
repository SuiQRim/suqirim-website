import React, { FC } from 'react'
import style from './MiniToggle.module.css'

export interface IMiniToggleProps {
    name : string,
    description : string,
    changeDescription: (value: string) => void,
}

const MiniToggle:FC<IMiniToggleProps> = ({name, description, changeDescription}) => {


    const hasDescription = (description === '')
    
    const setDescription = () => {
        if(description !== '')
            changeDescription(description);
    }

    return (
        <div className={hasDescription ? style.simpleToggleMini : style.toggleMini} onClick={setDescription}>
            <div>{name}</div>
        </div>
  )
}

export default MiniToggle;