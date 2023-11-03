import React from 'react'
import style from './Footer.module.css'
import someIcon from '../../Assets/Profile/Q34F.png'

const socNets = [
    someIcon,
    someIcon,
    someIcon,
    someIcon
]


export default function Footer() {
  return (
    <div className={style.footer}>
        <div style={{display: 'flex', gap: '40px'}}>
            <div>
                +7-931-967-57-06 
            </div>
            <div>
                romikkimor123@gmail.com
            </div>
        </div>



        <div className={style.socialNetworks}>
            {socNets.map(sc => 
                <div className={style.socNet}>
                    <img alt='social network' src={sc}/>
                </div>
            )}
        </div>
    </div>
  )
}