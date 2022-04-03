import type { NextPage } from 'next'
import { Hero, Icons } from 'components'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Hero />
      </header>

      <main>
        <section className={styles.cv}></section>
        <section className={styles.icons}>
          <Icons />
        </section>
      </main>
    </div>
  )
}

export default Home
