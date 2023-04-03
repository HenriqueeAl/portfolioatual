import styles from './Project.module.scss'
import { VscGithub } from 'react-icons/vsc';

interface Project{
    image: any;
    link: string;
    github: string;
}

export const Project = (props: Project)=>{
    return (
        <a href={props.link} target='_blank' className={styles.project} style={{backgroundImage: props.image}}>
            <div className={styles.buttonview}>View</div>
            <a href={props.github} target='_blank'><VscGithub className={styles.githubproject}></VscGithub></a>
        </a>
    )
}