import styles from './Header.module.scss'
import { CiDark } from 'react-icons/ci';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

interface Header {
    darkmodef: Function;
    darkmode: boolean;
}


export const Header = (props: Header)=>{

    return (
        <header className={styles.header} style={props.darkmode == true ? {background: '#39324D', color: 'rgb(255, 232, 239)'} : {background: '#e3d5bf', color: '#574345'}}>
            <div className={styles.headercontent}>
                <div style={props.darkmode == true ? {border: '2px solid rgb(255, 232, 239)'} : {border: '2px solid #574345'}}className={styles.box} onClick={()=>props.darkmodef()}>
                {props.darkmode == true ? <MdDarkMode></MdDarkMode> : <MdLightMode></MdLightMode>}
                </div>
            </div>
        </header>
    )
}