import React, { useEffect, useRef, useState } from 'react'
import style from './ItPage.module.css'
import Toggle from '../../components/toggle/Toggle'
import itStore from './../../storage/it/it';

const ItPage = () => {

    const it = itStore;
    const itPage = useRef<HTMLDivElement>(null)

    const hardSkillHolder = 'Выберите Hard Skill...'
    const hardSkilldefaultValue = 'Просто хорошо знаком. Есть опыт, но выделить что-то ключевое не могу.'

    const [hardSkill, setHardSkill] = useState<string>(hardSkillHolder);
    function clearDescription () {
        if(hardSkill !== hardSkillHolder){
            console.log('save')
            setHardSkill(hardSkillHolder);
        }
    }

    
    function changeHardSkill (value: string) {
        if(hardSkill !== value) {
            console.log('set')
            setHardSkill(value);
        }
        if(value === '')
            setHardSkill(hardSkilldefaultValue);
    }
    
    useEffect(() => {
        const element = itPage.current;   
        if (!element) return;
    
        const handleButtonClick = (e: MouseEvent) => {
            clearDescription()
            console.log('click')
        };
    
        element.addEventListener("click", handleButtonClick);
        return () => {
            element.removeEventListener("click", handleButtonClick);
        };
    }, [hardSkill]);
    
    return (
        <div ref={itPage} className={style.it}>
            <div>
                <h2>Me & IT</h2>
                <div className='text'>
                    {it.aboutMe}
                </div>
            </div>
        
            <div> 
                <h2>Hard Skills</h2>
                <div className={style.hardSkills}>
                    
                <div className={style.hardSkillsWrapper}>
                    {it.hardSkills.map((hs, index) => 
                        <Toggle key={index} name={hs.name} description={hs.description} changeDescription={changeHardSkill}/>)
                    }
                </div>
                <div className={hardSkill !== hardSkillHolder ? style.hardSkillDescription : style.hardSkillDescriptionEmpty}>
                    {hardSkill} 
                </div>
                </div>
            </div>        
        </div>
  )
}

export default ItPage;