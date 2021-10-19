import Head from 'next/head'
import Header from '../components/Header';
import Expertise from '../components/Expertise';
import Profile from '../components/Profile';
import * as C from '../components/styles';
import Script from 'next/script';
import Contacts from '../components/Contacts';
import Copyright from '../components/Copyright';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamilton Ramos - Advocacia</title>
        <meta name="description" content="Áreas de atuação: Civil, Consumidor, Administrativo e Eleitoral" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <C.Container>
          <C.Area>
            <Header/>
            <Expertise/>
            <Profile/>
            <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ delay: 2, duration: 1 }}
          >
            <Contacts/>
            </motion.div>
          </C.Area>
          <Copyright/>
        </C.Container>
      </main>

      <footer>
      <Script src="https://kit.fontawesome.com/33c943d672.js" crossorigin="anonymous"></Script>
      </footer>
    </div>
  )
}
