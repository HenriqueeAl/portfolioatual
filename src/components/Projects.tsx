import styles from '../styles/Projects.module.scss'
import { Project } from './Project'

export const Projects = ()=>{
    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.listproject}>
                <Project image='url(/blizzard.png)' link='https://blizzard-iota.vercel.app/'></Project>
                <Project image='url(/pizza.png)' link='https://pizza-time-five.vercel.app/'></Project>
                <Project image='url(/empireburger.png)' link='https://empire-burger-brchallenges.vercel.app/'></Project>
                <Project image='url(/space.png)' link='https://space-three-rose.vercel.app/home'></Project>
                <Project image='url(/empireburger.png)' link='https://empire-burger-brchallenges.vercel.app/'></Project>
                <Project image='url(/pizza.png)' link='https://pizza-time-five.vercel.app/'></Project>
                <Project image='url(/empireburger.png)' link='https://empire-burger-brchallenges.vercel.app/'></Project>
                <Project image='url(/blizzard.png)' link='https://blizzard-iota.vercel.app/'></Project>
                <Project image='url(/space.png)' link='https://space-three-rose.vercel.app/home'></Project>
            </div>
        </section>
    )
}