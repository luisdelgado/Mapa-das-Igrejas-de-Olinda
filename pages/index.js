import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Router from "next/router";

const churchTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#5A2E0B',
    },
    secondary: {
      main: '#D7D7D7',
    }
  },
});

export default function Home() {
  const addChurch = () => {
    Router.push('https://forms.gle/49MYmgjFsumwah3bA')
  }

  const accessMap = () => {
    Router.push('https://www.google.com/maps/d/edit?mid=1FnwmzldJKxOTJPvf-EfdHozkaERgIiVK&usp=sharing')
  }

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

      <ThemeProvider theme={churchTheme}>
        <main className={styles.main}>
          <img className={styles.image} src="/igrejaDaSe.jpg" />
          <img className={styles.imagePhone} src="/igrejaDaSePhone.png" />
          <p className={styles.description}>conheça horários das Missas, site e localização das Igrejas</p>
          <h1 className={styles.title}>Mapa das<br></br>Igrejas de<br></br>Olinda</h1>
          <div className={styles.map}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Button className={styles.button} color="secondary" onClick={addChurch}>Adicionar Igreja</Button>
                <Button className={styles.button} color="secondary" onClick={accessMap}>Acessar o Mapa</Button>
              </Toolbar>
            </AppBar>
          </div>
        </main>
      </ThemeProvider>
    </div>
  )
}
