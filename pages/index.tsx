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
  {x:-170,y:0},       // hospital
  {x:75,y:98},        // foundation
  {x:-100,y:600},    // hotel
  {x:160,y:500},       // city
  {x:320,y:320},      // park
  {x:-580,y:320}      // farm
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