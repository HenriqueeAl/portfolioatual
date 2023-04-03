import styles from './Redes.module.scss'
import { CiTwitter, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';

interface Redes {
    hover: string;
}


export const Redes = (props: Redes)=>{

    return (
        <div className={styles.redes}>
            <ul>
                <a href="https://twitter.com/henriquedevcmer" target='_blank' style={props.hover == 'hoverl' ? {color: '#574345'} : {color: 'rgb(255, 232, 239)'}}><li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><CiTwitter></CiTwitter></li></a>
                <a href="https://www.instagram.com/henriquedevcomerc/" target='_blank' style={props.hover == 'hoverl' ? {color: '#574345'} : {color: 'rgb(255, 232, 239)'}}><li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><CiInstagram></CiInstagram></li></a>
                <a href="https://github.com/HenriqueeAl" target='_blank' style={props.hover == 'hoverl' ? {color: '#574345'} : {color: 'rgb(255, 232, 239)'}}><li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><VscGithub></VscGithub></li></a>
                <a href="https://www.linkedin.com/in/henrique-almeida-de-oliveira/" target='_blank' style={props.hover == 'hoverl' ? {color: '#574345'} : {color: 'rgb(255, 232, 239)'}}><li className={props.hover == 'hoverl' ? styles.hoverl : styles.hoverd}><CiLinkedin></CiLinkedin></li></a>
            </ul>
        </div>
    )
}