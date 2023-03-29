import styles from '../styles/Header.module.scss'
import { CiDark } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

interface Header {
    darkmodef: Function;
    darkmode: boolean;
}


export const Header = (props: Header)=>{

    return (
        <header className={styles.header} style={props.darkmode ? {background: '#39324D'} : {background: '#CDCD76'}}>
            <div className={styles.headercontent}>
                <div className={styles.box} onClick={()=>props.darkmodef()}>
                {props.darkmode == true ? <MdDarkMode></MdDarkMode> : <CiDark></CiDark>}
                </div>
            </div>
        </header>
    )
}