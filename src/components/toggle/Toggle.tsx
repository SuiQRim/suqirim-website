import React, { FC } from 'react'
import style from './Toggle.module.css'

export interface IToggleProps {
    name : string,
    description : string,
    changeDescription: (value: string) => void
}

const Toggle:FC<IToggleProps> = ({name, description, changeDescription}) => {

    const setDescription = () => {
        changeDescription(description);
    }

    return (
        <div className={style.toggle}>
            <div className={style.name} onClick={setDescription}>
                {name}
            </div>
        </div>
  )
}

export default Toggle;