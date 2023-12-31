import React, { FC } from 'react'
import style from './Toggle.module.css'

export interface IToggleProps {
    name : string,
    description : string,
    changeDescription: (value: string) => void,
}

const Toggle:FC<IToggleProps> = ({name, description, changeDescription}) => {

    const hasDescription = (description === '')
    
    const setDescription = () => {
        if(description !== '')
            changeDescription(description);
    }

    return (
        <div className={hasDescription ? style.simpleToggle : style.toggle} onClick={setDescription}>
            <div>{name}</div>
        </div>
  )
}

export default Toggle;