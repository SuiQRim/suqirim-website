import React, { useEffect, useRef, useState } from 'react'
import style from './ItPage.module.css'
import Toggle from '../../components/toggle/Toggle'
import itStore from './../../storage/it/it';
import Project from '../../components/project/Project';
import IProject from '../../models/IProject';


const projects: IProject [] = [
    {
        name : 'suiqrim-website ',
        description : 'Вебсайт, которвый вы сейчас просматриваете. Он красивый, удобный и информативный',
        link : 'https://github.com/SuiQRim/suqirim-website'
    },
    {
        name : 'ToyRuParser',
        description : 'Парсер сайта-каталога игрушек. Приложение сделано легко адаптируемым к изменениям сайта. Парсинг происходит учитывая пагинацию каталога',
        link : 'https://github.com/SuiQRim/ToyRuParser'
    },
    {
        name : 'SkillProfi ',
        description : 'CRM с серверной частью на ASP.NET и приложениями для администрирования и просмотра',
        link : 'https://github.com/SuiQRim/ToyRuParser'
    },
    {
        name : 'SnakeGame',
        description : 'Консольная змейка, с меню и локальным лидербордом. Реализовал очень крутой интерфейс для консоли',
        link : 'https://github.com/SuiQRim/SnakeGame'
    },
]

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

            <div>
                <h2>Проекты</h2>
                <div className={style.projectsWrapper}>
                    {projects.map(p => <Project project={p}/>)}
                </div>
            </div>
        </div>
  )
}

export default ItPage;