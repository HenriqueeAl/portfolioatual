import styles from './Footer.module.scss'
import { Inter } from 'next/font/google'
import { Redes } from '../Redes/Redes'

interface Footer {
    darkmode: boolean;
}

const inter = Inter({ subsets: ['latin'] })

export const Footer = (props: Footer)=>{
    return (
        <footer className={styles.footer} style={props.darkmode == true ? {background: '#39324D', color: '#FFE8EF'} : {background: '#e3d5bf', color: '#574345'}}>
            <div className={styles.footercontent}>
                <div className={styles.certificados}>
                    <h6 className={inter.className}>Certificados:</h6>
                    <ul className={inter.className}>
                        <li><a style={props.darkmode == true ? 
                        {color: '#FFE8EF', borderBottom: '1px solid #FFE8EF'}
                            : 
                        {color: '#332e1d', borderBottom: '1px solid #332e1d'}}

                        href="https://cursos.dankicode.com/api/certificados/59b21afa-c47a-4111-9cac-c1969ddef6d3" 
                        target="_blank">Front-end</a></li>
                        <li>|</li>
                        <li><a style={props.darkmode == true ? 
                        {color: '#FFE8EF', borderBottom: '1px solid #FFE8EF'}
                            : 
                        {color: '#332e1d', borderBottom: '1px solid #332e1d'}} href="https://www.treinaweb.com.br/certificado/COE3ES36KOMH" target="_blank">React.Js</a></li>
                        <li>|</li>
                        <li><a style={props.darkmode == true ? 
                        {color: '#FFE8EF', borderBottom: '1px solid #FFE8EF'}
                            : 
                        {color: '#332e1d', borderBottom: '1px solid #332e1d'}}
                        href="https://www.udemy.com/certificate/UC-91fda60e-8ff0-4123-9572-366a6d3a3a0a/" target="_blank">Treina Web Multi-stack</a></li>
                    </ul>
                </div>
                <h4 className={inter.className}>Cursando Analise e desenvolvimento de sistemas.</h4>
                <Redes hover={props.darkmode ? 'hoverd' : 'hoverl'}></Redes>
                <h4 className={inter.className}>henrique.almeida231@hotmail.com</h4>
            </div>
        </footer>
    )
}