import styles from '../styles/Infos.module.scss'
import { Redes } from './Redes'

export const Infos = ()=>{
    return (
        <section className={styles.infos}>
            <div className={styles.bg}>
                <div className={styles.photo}>
                    
                </div>
            </div>
            <div className={styles.text}>
                <h1>Henrique Almeida de oliveira</h1>
                <div style={{marginLeft: '15px'}} className={styles.separar}>
                    <p className={styles.role}>Front-end React.Js Developer</p>
                    <div>
                        <Redes></Redes>
                        <p className={styles.email}>henrique.almeida231@hotmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}