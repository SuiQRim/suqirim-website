import React, { FC } from 'react'
import style from './Toggle.module.css'

export interface IToggleProps {
    name : string,
    description : string,
    changeDescription: (value: string) => void
    className? : string
}

const Toggle:FC<IToggleProps> = ({name, description, changeDescription, className}) => {

    const setDescription = () => {
        if(description !== undefined)
            changeDescription(description);
    }

    return (
        <div className={className ?? style.toggle} onClick={setDescription}>
            <div>{name}</div>
        </div>
  )
}

export default Toggle;