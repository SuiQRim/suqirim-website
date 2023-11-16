import React, { useEffect, useRef, useState } from 'react'
import style from './ItPage.module.css'
import Project from '../../components/project/Project';
import Toggle from '../../components/toggle/Toggle';
import ITRequests from '../../api/ITRequests';
import IProject from '../../models/IProject';
import ITechnology from '../../models/ITechnology';


const hardSkillHolder = 'Выберите Hard Skill или используемую в проекте технологию'

const ItPage = () => {

    const itPage = useRef<HTMLDivElement>(null)

    const [projects, setProjects] = useState<IProject[]>();
    const [hardSkills, sethardSkills] = useState<ITechnology[]>();
    const [aboutMe, setAboutMe] = useState<string>();
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
    
    
    useEffect(()=> {
        const fetchHardSkills = async () => {
            const data = await ITRequests.getHardSkills();
            sethardSkills(data);
        }
        const fetchAboutMe = async () => {
            const data = await ITRequests.getAboutMe();
            setAboutMe(data);
        }
        const fetchProjects = async () => {
            const data = await ITRequests.getProjects();
            setProjects(data);
        }

        fetchAboutMe();
        fetchHardSkills();
        fetchProjects();
    },[]) 
    
    return (
        <div ref={itPage} className={style.it}>
            <div>
                <h2>Me & IT</h2>
                <div className='text'>
                    {aboutMe}
                </div>
            </div>
        
            <div> 
                <h2>Hard Skills</h2>
                <div className={style.hardSkills}>
                    
                    <div className={style.hardSkillsWrapper}>
                        {hardSkills && hardSkills.map((hs, index) => 
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
                    {projects && projects.map((p, index) => <Project key={index} project={p} changeDescription={changeHardSkill}/>)}
                </div>
            </div>
        </div>
  )
}

export default ItPage;