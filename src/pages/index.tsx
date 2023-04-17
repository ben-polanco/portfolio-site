//index.tsx
import Head from 'next/head'
import '@fontsource/space-mono';
import styles from '@/styles/Home.module.css'
import Building from '../components/building'
import Title from '../components/title' 
import Footer from '../components/footer'

//import Experience_Card from '../components/experience_card'

const locations =[
  {x:-200,y:280},       // hospital
  {x:90,y:410},        // foundation
  {x:-90,y:1000},    // hotel
  {x:190,y:850},       // city
  {x:370,y:670},      // park
  {x:-660,y:600}      // farm
];

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Ben Polanco - Head of Product</title>
      </Head>
      <Title />
      <div id={styles.contents} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Building locations={locations}></Building>
        </div>
      </div>

      <Footer />
    </>
  )
}