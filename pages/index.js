import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    flexGrow: 2,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Mapa das Igrejas de Olinda</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Conheça os horários das Missas, site e localização das Igrejas de Olinda." />
        <meta name="keywords" content="igreja, olinda, horário, missa, localizacao" />
        <meta name="author" content="Luís Delgado" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:title" content="Mapa das Igrejas de Olinda" />
        <meta property="og:url" content="https://mapa-das-igrejas-de-olinda.vercel.app/" />
        <meta property="og:description" content="Conheça os horários das Missas, site e localização das Igrejas de Olinda." />
        <meta property="og:image" itemProp="image" content="/assets/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </Head>

      <main className={styles.main}>
        <img className={styles.image} src="/igrejaDaSe.jpg" />
        <img className={styles.imagePhone} src="/igrejaDaSePhone.png" />
        <p className={styles.description}>conheça horários das Missas, site e localização das Igrejas</p>
        <h1 className={styles.title}>Mapa das<br></br>Igrejas de<br></br>Olinda</h1>
        {/* <button className={styles.map}><a href="https://www.google.com/maps/d/edit?mid=1FnwmzldJKxOTJPvf-EfdHozkaERgIiVK&usp=sharing">Acessar o Mapa</a></button> */}
        <div className={styles.map}>
          <AppBar color="inherit" position="static">
            <Toolbar>
              <Button className={classes.button}>Adicionar Igreja</Button>
              <Button className={classes.button}>Acessar o Mapa</Button>
            </Toolbar>
          </AppBar>
        </div>
      </main>
    </div>
  )
}
