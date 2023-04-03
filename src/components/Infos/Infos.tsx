import styles from './Infos.module.scss'
import { Redes } from '../Redes/Redes'

interface Infos {
    darkmode: boolean;
}

export const Infos = (props : Infos)=>{
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
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Redes hover={props.darkmode ? 'hoverd' : 'hoverl'}></Redes>
                        <p className={styles.email}>henrique.almeida231@hotmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}