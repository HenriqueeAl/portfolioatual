import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { Header } from '@/components/Header'
import { Infos } from '@/components/Infos'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Never } from '@/components/Never'
import { Footer } from '@/components/Footer'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface test{
  darkmode: boolean;
}

export default function Home() {

  const [darkmode, setDarkmode] = useState<Boolean | any>(null);

  useEffect(()=>{
    if(localStorage.getItem('darkmode')){
      setDarkmode(localStorage.getItem('darkmode'))
      if(darkmode != null){
        localStorage.setItem('darkmode', darkmode)
      }
    }else{
      localStorage.setItem('darkmode', false)
      setDarkmode(localStorage.getItem('darkmode'))
    }
  }, [])

  useEffect(()=>{
    if(darkmode != null){
      localStorage.setItem('darkmode', darkmode)
    }
  }, [darkmode])


  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Front-end React developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {darkmode == null ? <></> 
      : 
      <>
        <Header darkmodef={()=>setDarkmode(!darkmode)} darkmode={darkmode}></Header>
          <main className={inter.className} style={darkmode ? {background: 'rgba(57, 50, 77,0.9)', color: '#FFE8EF'} : {background: '#CDCD76', color: '#332E1D'}}>
            <Infos></Infos>
            <Skills></Skills>
            <Projects></Projects>
            <Never></Never>
          </main>
        <Footer darkmode={darkmode}></Footer>
      </>
      }
    </>
  )
}
