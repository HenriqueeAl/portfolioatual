import styles from '../styles/Skill.module.scss'

interface Skill{
    name: String;
    color: any;
    progress: any;
}

export const Skill = (props: Skill)=>{
    return (
        <div className={styles.skill}>
            <p>{props.name}</p>
            <div className={styles.fild}>
                <div className={styles.progress} style={{backgroundColor: props.color, width: props.progress}}></div>
            </div>
        </div>
    )
}