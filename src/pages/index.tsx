//index.tsx
import Head from 'next/head'
import '@fontsource/space-mono';
import styles from '@/styles/Home.module.css'
import Building from '../components/Map/building'
import Title from '../components/Intro/title' 
import Footer from '../components/Footer/footer' 
import About from '../components/Intro/about'
import Map from '../components/Map/map'
import BG_Gradient from '../components/bg_gradient'

const locations =[
  {x:-190,y:65},       // hospital
  {x:75,y:180},        // foundation
  {x:-90,y:700},    // hotel
  {x:160,y:620},       // city
  {x:370,y:420},      // park
  {x:-620,y:440}      // farm
];

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Ben Polanco - Head of Product</title>
      </Head>
      <Title />
      <BG_Gradient />
      <About />
      <div id={styles.contents} />
      <Map locations={locations} />
      <Footer />
    </>
  )
}