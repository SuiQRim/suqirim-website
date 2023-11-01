import React from 'react'
import stl from './Header.module.css'
import itIcon from '../../Assets/CatalogIcons/it_icon.png'
import gameIcon from '../../Assets/CatalogIcons/game_icon.png'
import sportIcon from '../../Assets/CatalogIcons/Sport_icon.png'
import musicItem from '../../Assets/CatalogIcons/Music_icon.png'
import profile from '../../Assets/Profile/Q34F.png'

const icons = [
    itIcon,
    gameIcon,
    sportIcon,
    musicItem
]

type Props = {}

export default function Header({}: Props) {
  return (
    <div className={stl.header}>

        <div className={stl.navPanel}>

            <div className={stl.navigation}>
                {icons.map((i) => {
                    return (
                        <div key={i} className={stl.navItem}>
                            
                            <div style={{height: '32px', width : '64px'}}>
                                <img style={{height: '100%', width: '100%'}} src={i}></img>
                            </div>
                            <hr style={{border: 'solid 3px black', marginTop: '5px', borderRadius : '4px'}}></hr>

                        </div>
                    )})
                }      
            </div>
        </div>

       
        
        <div className={stl.profilePanel}>
     
            <img className={stl.ikon} src={profile}/>        
           
        </div>
    </div>
  )
}