import type { NextPage } from 'next'
import { Hero, Icons, Cards } from 'components'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Hero />
      </header>

      <main>
        <section className={styles.cardSection}>
          <h1>My Projects</h1>
          <Cards />
        </section>
        <section className={styles.iconSection}>
          <Icons />
        </section>
      </main>
    </div>
  )
}

export default Home
