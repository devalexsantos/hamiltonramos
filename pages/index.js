import Head from 'next/head'
import Header from '../components/Header';
import Expertise from '../components/Expertise';
import Profile from '../components/Profile';
import * as C from '../components/styles';
import Script from 'next/script';
import Contacts from '../components/Contacts';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamilton Ramos - Advocacia</title>
        <meta name="description" content="Áreas de atuação: Civil, Consumidor, Administrativo e Eleitoral" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <C.Container>
          <C.Area>
            <Header/>
            <Expertise/>
            <About/>
            <Profile/>
            <Contacts/>
          </C.Area>
        </C.Container>
      </main>

      <footer>
      <Script src="https://kit.fontawesome.com/33c943d672.js" crossorigin="anonymous"></Script>

      </footer>
    </div>
  )
}
