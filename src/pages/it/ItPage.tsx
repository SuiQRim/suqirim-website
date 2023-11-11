import React, { useEffect, useRef, useState } from 'react'
import style from './ItPage.module.css'
import itStore from './../../storage/it/it';
import Project from '../../components/project/Project';
import Toggle from '../../components/toggle/Toggle';


const hardSkillHolder = 'Выберите Hard Skill или используемую в проекте технологию'

const ItPage = () => {

    const it = itStore;
    const itPage = useRef<HTMLDivElement>(null)
    const projects = it.projects;

    const [hardSkill, setHardSkill] = useState<string>(hardSkillHolder);

    
    function changeHardSkill (value: string) {
        if(hardSkill !== value) {
            setHardSkill(value);
        }
    }

    useEffect(() => {
        const element = itPage.current;   
        
        if (!element) return;

        const handleButtonClick = (e: MouseEvent) => {
            if(hardSkill !== hardSkillHolder){
                setHardSkill(hardSkillHolder);
            }
        };
        
        element.addEventListener("click", handleButtonClick);
        return () => {
            element.removeEventListener("click", handleButtonClick);
        }
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

            <div>
                <h2>Проекты</h2>
                <div className={style.projectsWrapper}>
                    {projects.map((p, index) => <Project key={index} project={p} changeDescription={changeHardSkill}/>)}
                </div>
            </div>
        </div>
  )
}

export default ItPage;