import styles from '../styles/Redes.module.scss'
import { CiTwitter, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';


export const Redes = ()=>{
    return (
        <div className={styles.redes}>
            <ul>
                <li><CiTwitter></CiTwitter></li>
                <li><CiInstagram></CiInstagram></li>
                <li><VscGithub></VscGithub></li>
                <li><CiLinkedin></CiLinkedin></li>
            </ul>
        </div>
    )
}