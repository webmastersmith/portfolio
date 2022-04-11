import type { NextPage } from 'next'
import { Hero, Icons, Cards, Nav, Footer } from 'components'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav />
        <Hero />
      </header>

      <main>
        <section className={styles.cardSection} id="cardSection">
          <h1>My Current Projects</h1>
          <Cards />
        </section>
        <section className={styles.iconSection} id="iconSection">
          <Icons />
        </section>
        <section className={styles.contactSection} id="contactSection">
          <p>Contact Me</p>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Home
