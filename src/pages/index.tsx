//index.tsx
import Head from 'next/head'
import Image from 'next/image'
import '@fontsource/space-mono';
import styles from '@/styles/Home.module.css'
import Building from '../components/building'
import Trees from "../../public/img/front-trees.svg";

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
      
      <div className={styles.title}>
        <h1>Ben Polanco</h1>
        <h2>Building digital products<br /> for a purpose-driven world</h2>
        <div id={styles.under_construction}>
          *This world is still under construction, explore <br />at your own risk*<br />
          <a href="https://github.com/ben-polanco/portfolio-site/blob/main/user_stories.md" target="_blank">Follow my progress on github</a>
          <p>last updated: 04/13/23</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Building locations={locations}></Building>
        </div>
      </div>

      <section className={styles.footer}>
        <div className={styles.info}>
          <h2>More info</h2>
          <p> Coming Soon</p>
        </div>
        <div className={styles.contact}>
          <h2>Hire me</h2>
          <a href="mailto:benpolanco@icloud.com">benpolanco@icloud.com</a>
        </div>
      </section>

    </>
  )
}