import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import ApiRequests from '../../api/ApiRequests'

type Props = {}

const Home = (props: Props) => {

    const [aboutMe, setAboutMe] = useState<string>()

    useEffect(() =>{
        const fetchAboutMe = async () => {
            const data = await ApiRequests.getAbout('Home')
            setAboutMe(data);
        }
        fetchAboutMe()
    })

    return (
        <div className={style.home}>
            <div>
                <h2 style={{fontSize :'26px'}}>Обо мне</h2>
                <div className='text' style={{fontSize :'22px'}}>
                    {aboutMe}
                </div>
            </div>
        </div>
  )
}

export default Home;