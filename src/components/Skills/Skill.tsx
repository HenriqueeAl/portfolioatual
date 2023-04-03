import styles from './Skill.module.scss'

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
                <div className={styles.progress} style={{backgroundColor: props.color, width: props.progress}}>
                    <div className={styles.boxshadow} style={{boxShadow: '0px 0px 25px 8px'+ props.color}}></div>
                    
                </div>
                <span className={styles.boxporcent} style={{background: props.color, marginLeft: props.progress}}>{props.progress}</span>
            </div>
        </div>
    )
}