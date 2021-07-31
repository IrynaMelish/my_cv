import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>

            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skills-container">
            <SkillsSection skill={'Html5'} progress={'80%'} width={'80%'}/>
            <SkillsSection skill={'Css3'} progress={'80%'} width={'80%'}/>
            <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'}/>
            <SkillsSection skill={'React'} progress={'50%'} width={'50%'}/>
            <SkillsSection skill={'Photoshop'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'Figma'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'Bootstrap'} progress={'50%'} width={'50%'}/>
            </div>
            
        </div>
    )
}

export default AboutPage
