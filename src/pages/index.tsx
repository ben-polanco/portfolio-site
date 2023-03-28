import Head from 'next/head'
import Image from 'next/image'
import { Space_Mono } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Map from '../components/map'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>My Website</title>
      </Head>
      
      <div className={styles.title}>
        <h1>Ben Polanco</h1>
        <h2>Building a purpose-driven world <br /> using design and technology</h2>
      </div>

      <div className={styles.content_card} id="content-card">
        {/* Content goes here */}
        <h3>Building 1</h3>
        <p>This is where the tagline for the first building goes</p>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
          <Map></Map>
      </div>

      <section className={styles.footer}>
        <h2>Digital Health Products Lead</h2>
        <div className="info">
          <h2>More info</h2>
        </div>
        <div className={styles.contact}>
          <h2>Hire me</h2>
        </div>
      </section>

    </>
  )
}