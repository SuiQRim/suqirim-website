import React, { FC } from 'react'
import style from './Footer.module.css'
import IContacts from './../../models/IContacts';

type Props = {
    contacts: IContacts
}

const Footer:FC<Props> = ({contacts}) => {
  return (
    <div className={style.footer}>
    <div className={style.contacts}>
        <div>
            {contacts.phone}
        </div>
        <div>
            {contacts.email}
        </div>
    </div>
    <div className={style.socialNetworks}>
        {contacts.socialNetworks.map((sc, index) => 
            <a key={index} className={style.socNet} href={sc.link} target='_blank' rel="noreferrer">
                <img alt='social network' src={sc.image}/>
            </a>
        )}
    </div>
</div>
  )
}

export default Footer;