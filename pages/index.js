import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mapa das Igrejas de Olinda</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <img className={styles.image} src="/igrejaDaSe.jpg" />
        <img className={styles.imagePhone} src="/igrejaDaSePhone.png" />
        <p className={styles.description}>conheça horários das Missas, site e localização das Igrejas</p>
        <h1 className={styles.title}>Mapa das<br></br>Igrejas de<br></br>Olinda</h1>
        <button className={styles.map}><a href="https://www.google.com/maps/d/edit?mid=1FnwmzldJKxOTJPvf-EfdHozkaERgIiVK&usp=sharing">Acessar o Mapa</a></button>
      </main>
    </div>
  )
}
