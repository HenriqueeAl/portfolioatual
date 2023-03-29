import styles from '../styles/Redes.module.scss'
import { CiTwitter, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';

interface Redes {
    hover: string;
}


export const Redes = (props: Redes)=>{

    return (
        <div className={styles.redes}>
            <ul>
                <li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><CiTwitter></CiTwitter></li>
                <li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><CiInstagram></CiInstagram></li>
                <li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><VscGithub></VscGithub></li>
                <li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><CiLinkedin></CiLinkedin></li>
            </ul>
        </div>
    )
}