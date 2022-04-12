import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'

import { Hero, Icons, Cards, Nav, Footer } from 'components'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  const [inView, setInView] = useState(false) //state change loads image.
  const objRef = useRef(null) //same as document.querySelector('img')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            obs.disconnect() //disconnect once in view.
          } else setInView(false)
        }
      },
      {
        // rootMargin: '1000px',  //consider isIntersecting 1000px before item reaches viewport.
      }
    )
    if (objRef.current) {
      observer.observe(objRef?.current) //attach observer to 'objRef'
    }
    return () => {
      observer.disconnect() //when unmount disconnect observer
    }
  }, [])

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
          <div
            className={`${inView ? styles.contactAnimation : ''}`}
            ref={objRef}
          >
            <h1>Let&apos;s Build Something Together</h1>
            <p>
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or just want to connect.
            </p>
            <a href="mailto: bryon@smithauto.us" className={styles.email}>
              bryon@smithauto.us
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Home
