//index.tsx
import Head from 'next/head'
import Image from 'next/image'
import '@fontsource/space-mono';
import styles from '@/styles/Home.module.css'
import Building from '../components/building'
import Title from '../components/title' 
import Footer from '../components/footer'

//import Experience_Card from '../components/experience_card'

const locations =[
  {x:-235,y:310},       // hospital
  {x:95,y:470},        // foundation
  {x:-100,y:1175},    // hotel
  {x:230,y:990},       // city
  {x:370,y:730},      // park
  {x:-760,y:700}      // farm
];

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Ben Polanco - Head of Product</title>
      </Head>
      <Title />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Building locations={locations}></Building>
        </div>
      </div>

      <Footer />
    </>
  )
}