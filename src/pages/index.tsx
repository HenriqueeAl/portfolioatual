import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { Header } from '@/components/Header/Header'
import { Infos } from '@/components/Infos/Infos'
import { Skills } from '@/components/Skills/Skills'
import { Projects } from '@/components/Projects/Projects'
import { Never } from '@/components/Never/Never'
import { Footer } from '@/components/Footer/Footer'
import { useState, useEffect } from 'react';
import { json } from 'stream/consumers'
import { Quests } from '@/components/Quests/Quests'

const inter = Inter({ subsets: ['latin'] })

interface test{
  darkmode: boolean;
}

export default function Home() {

  const [darkmode, setDarkmode] = useState<Boolean | any>(null);

  useEffect(()=>{
    if(localStorage.getItem('darkmode')){
      setDarkmode(localStorage.getItem('darkmode'))
      console.log(localStorage.getItem('darkmode'))
      if(darkmode != null){
        localStorage.setItem('darkmode', darkmode)
      }
    }else{
      localStorage.setItem('darkmode', JSON.stringify(false))
      setDarkmode(localStorage.getItem('darkmode'))
    }
  }, [])

  useEffect(()=>{
    if(darkmode === 'false'){
      setDarkmode(false)
    }else if (darkmode === 'true'){
      setDarkmode(true)
    }
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
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={
                        {
            __html: `
                (function(c,l,a,r,i,t,y){
                    c[a] = c[a] || function () { (c[a].q = c[a].q || 
                    []).push(arguments) };
                    t=l.createElement(r);
                    t.async=1;
                    t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "XXXXXXXXX");`,
          }}
        />;
            
      </Head>
      {darkmode == null ? <></> 
      : 
      <>
        <Header darkmodef={()=>setDarkmode(!darkmode)} darkmode={darkmode}></Header>
          <main className={inter.className} style={darkmode == true ? {background: 'rgba(57, 50, 77,0.9)', color: '#FFE8EF'} : {background: 'rgba(245, 238, 212,0.6)', color: '#574345'}}>
            <Infos darkmode={darkmode}></Infos>
            <Skills></Skills>
            <Projects></Projects>
            <Quests bgbox={darkmode ? '#39324D' : '#AFAF60'} colorborder={darkmode ? '1px solid white' : '1px solid #574345'}></Quests>
            <Never></Never>
          </main>
        <Footer darkmode={darkmode}></Footer>
      </>
      }
    </>
  )
}
