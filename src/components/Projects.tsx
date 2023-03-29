import styles from '../styles/Projects.module.scss'
import { Project } from './Project'

export const Projects = ()=>{
    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.listproject}>
                <Project image='url(/blizzard.png)' link='https://blizzard-iota.vercel.app/' github='https://github.com/HenriqueeAl/blizzard'></Project>
                <Project image='url(/pizza.png)' link='https://pizza-time-five.vercel.app/' github='https://github.com/HenriqueeAl/Pizza-Time'></Project>
                <Project image='url(/empireburger.png)' link='https://empire-burger-brchallenges.vercel.app/' github='https://github.com/HenriqueeAl/Empire-Burger---BRChallenges'></Project>
                <Project image='url(/space.png)' link='https://space-three-rose.vercel.app/home' github='https://github.com/HenriqueeAl/Space'></Project>
                <Project image='url(/empireburger.png)' link='https://empire-burger-brchallenges.vercel.app/' github='https://github.com/HenriqueeAl/Empire-Burger---BRChallenges'></Project>
                <Project image='url(/pizza.png)' link='https://pizza-time-five.vercel.app/' github='https://github.com/HenriqueeAl/Pizza-Time'></Project>
                <Project image='url(/empireburger.png)' link='https://empire-burger-brchallenges.vercel.app/' github='https://github.com/HenriqueeAl/Empire-Burger---BRChallenges'></Project>
                <Project image='url(/blizzard.png)' link='https://blizzard-iota.vercel.app/' github='https://github.com/HenriqueeAl/blizzard'></Project>
                <Project image='url(/space.png)' link='https://space-three-rose.vercel.app/home' github='https://github.com/HenriqueeAl/Space'></Project>
            </div>
        </section>
    )
}