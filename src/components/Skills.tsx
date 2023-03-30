import styles from '../styles/Skills.module.scss'
import { Skill } from './Skill'

export const Skills = ()=>{
    return (
        <section className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.listskills}>
                <Skill name='HTML' color='#FFA500' progress='90%'></Skill>
                <Skill name='CSS' color='#0061E0' progress='95%'></Skill>
                <Skill name='SASS' color='#E000C6' progress='65%'></Skill>
                <Skill name='JavaScript' color='#fac150' progress='75%'></Skill>
                <Skill name='TypeScript' color='#0061E0' progress='60%'></Skill>
                <Skill name='React' color='#00D1E0' progress='75%'></Skill>
                <Skill name='Node' color='#25AB03' progress='30%'></Skill>
                <Skill name='Python' color='#317DF7' progress='30%'></Skill>
                <Skill name='SQL' color='#675EEB' progress='20%'></Skill>
                <Skill name='C#' color='#8602EB' progress='5%'></Skill>
            </div>
        </section>
    )
}