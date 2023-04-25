//index.tsx
import React from 'react';
import Head from 'next/head'
import '@fontsource/space-mono';
import styles from '@/styles/Home.module.css'
import Title from '../src/components/Intro/title' 
import About from '../src/components/Intro/about'
import Map from '../src/components/Map/map'
import BG_Gradient from '../src/components/bg_gradient'

const locations =[
  {x:-190,y:65},       // hospital
  {x:75,y:180},        // foundation
  {x:-90,y:700},    // hotel
  {x:160,y:620},       // city
  {x:370,y:420},      // park
  {x:-620,y:440}      // farm
];

export const config = { runtime: 'experimental-edge' }

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
    </>
  )
}