import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ClientOnly from '../components/ClientOnly'
import Login from '../UI/organisms/Login'
import Layout from '../UI/organisms/Layout'
import Dashboard from '../UI/organisms/dashboard'
import { getBrowserCookie } from "../utils/auth"

export default function Home() {
  const loggedCookie = getBrowserCookie()

  return (
    <div className={styles.container}>
      <Head>
        <title>Sun Wu Kong</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ClientOnly> 
           { (loggedCookie)
              ? <Layout>
                  <Dashboard/>
                </Layout>
              : <Login />
            }
        </ClientOnly>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
