import styles from '../styles/Project.module.scss'

interface Project{
    image: any;
    link: string;
}

export const Project = (props: Project)=>{
    return (
        <a href={props.link} target='_blank' className={styles.project} style={{backgroundImage: props.image}}>
            <div className={styles.buttonview}>View</div>
        </a>
    )
}