import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import styles from './contact.module.scss'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Contact: NextPage = () => {
  const [inView, setInView] = useState(false) //state change loads image.
  const objRef = useRef<HTMLDivElement>(null) //same as document.querySelector('img')

  useEffect(() => {
    // set observers
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
      console.log(objRef?.current)
    }
    return () => {
      observer.disconnect() //when unmount disconnect observer
    }
  }, [])

  return (
    <div
      className={`${styles.contactContainer} ${
        inView ? styles.contactAnimation : ''
      }`}
      ref={objRef}
    >
      <h1>Let&apos;s Build Something Together</h1>
      <p>
        Feel free to reach out if you&apos;re looking for a developer, have a
        question, or just want to connect.
      </p>
      <a href="mailto: bryon@smithauto.us" className={styles.email}>
        bryon@smithauto.us
      </a>
    </div>
  )
}
