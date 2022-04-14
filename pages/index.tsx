import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import { Hero, Icons, Cards, Contact } from 'components'
// import { Top, Bottom } from 'icons'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  const [show, setShow] = useState(false) //state change loads image.
  const h1Ref = useRef<HTMLHeadingElement>(null) //same as document.querySelector('img')

  function obs(
    fn: React.Dispatch<React.SetStateAction<boolean>>,
    ref: React.RefObject<HTMLElement>
  ) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            fn(true)
            obs.disconnect() //disconnect once in view.
          } else fn(false)
        }
      },
      {
        // rootMargin: '1000px',  //consider isIntersecting 1000px before item reaches viewport.
      }
    )
    if (ref.current) {
      observer.observe(ref?.current) //attach observer to 'objRef'
      console.log(ref?.current)
    }
    return () => {
      observer.disconnect() //when unmount disconnect observer
    }
  }
  useEffect(() => {
    // set observers
    obs(setShow, h1Ref)
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Hero />
      </header>

      <main>
        <section className={styles.cardSection} id="cardSection">
          <h1 ref={h1Ref} className={`${show ? styles.h1Animation : ''}`}>
            My Current Projects
          </h1>
          <Cards />
        </section>
        <section className={styles.iconSection} id="iconSection">
          <Icons />
        </section>
        <section className={styles.contactSection} id="contactSection">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default Home
