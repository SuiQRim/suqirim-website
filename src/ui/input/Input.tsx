import React, { FC, InputHTMLAttributes } from 'react'
import style from './Input.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement>{

}

const Input:FC<Props> = (props:Props) => {
    return (
        <input className={style.input} {...props} type="text"/>
    )
}

export default Input;