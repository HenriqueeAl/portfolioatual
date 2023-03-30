import styles from './Quest.module.scss'
import { FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';

interface Quest{
    children: never[];
    name: string;
    text: string;
    bgbox: string;
    colorborder: string;
}

export const Quest = (props: Quest)=>{

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.Quest} style={{borderBottom: props.colorborder}}>
            <div className={styles.textitle} onClick={()=> setOpen(!open)}>
                <h6>{props.name}</h6>
                <FaAngleDown className={styles.arrow} style={open == true ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}></FaAngleDown>
            </div>
            <div className={styles.boxresponde} style={open == true ? {height: '100%', backgroundColor: props.bgbox} : {height: '0px', padding: '0'}}>
                {open == true ?
                    <p style={open == true ? {opacity: '1'} : {opacity: '0'}}>
                        {props.text}
                    </p>
                    :
                    <></>
                    }
            </div>
        </div>
    )
}