//index.tsx

import Head from 'next/head'
import Image from 'next/image'
import '@fontsource/space-mono';
import styles from '@/styles/Home.module.css'
import Building from '../components/building'
import Trees from "../../public/img/front-trees.svg";

//import Experience_Card from '../components/experience_card'

const locations =[
  {x:195,y:85},       // hospital
  {x:305,y:95},        // foundation
  {x:700,y:950},    // hotel
  {x:200,y:170},       // city
  {x:305,y:178},      // park
  {x:250,y:720}      // farm
];

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>My Website</title>
      </Head>
      
      <div className={styles.title}>
        <h1>Ben Polanco</h1>
        <h2>Building digital products<br /> for a purpose-driven world</h2>
      </div>
      {/*<Experience_Card></Experience_Card>*/}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Building locations={locations}></Building>
          <Trees id={styles.trees}></Trees>
        </div>
      </div>

      <section className={styles.footer}>
        <div className={styles.info}>
          <h2>More info</h2>
        </div>
        <div className={styles.contact}>
          <h2>Hire me</h2>
          <a href="mailto:benpolanco@icloud.com">benpolanco@icloud.com</a>
        </div>
      </section>

    </>
  )
}