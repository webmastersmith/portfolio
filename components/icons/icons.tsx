import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import styles from './icons.module.scss'
import {
  Html5,
  Apache,
  Bash,
  Bootstrap,
  Css3,
  Sass,
  Tailwind,
  Firebase,
  Js,
  LinuxTux,
  Mongodb,
  Nextjs,
  Node,
  Puppeteer,
  React,
  Typescript,
  Git,
  Express,
  Gimp,
  Regex,
  CreateReactApp,
  StyledComponents,
} from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Icons: NextPage = () => {
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

  const icons = [
    { Icon: Html5, msg: 'HTML 5' },
    { Icon: Css3, msg: 'CSS 3' },
    { Icon: Sass, msg: 'Sass' },
    { Icon: StyledComponents, msg: 'Styled Components' },
    { Icon: Tailwind, msg: 'Tailwind CSS' },
    { Icon: Bootstrap, msg: 'Bootstrap' },
    { Icon: Js, msg: 'JavaScript' },
    { Icon: Typescript, msg: 'TypeScript' },
    { Icon: React, msg: 'React' },
    { Icon: CreateReactApp, msg: 'Create React App' },
    { Icon: Nextjs, msg: 'NextJS' },
    { Icon: Git, msg: 'Git' },
    { Icon: Node, msg: 'Node' },
    { Icon: Express, msg: 'Express' },
    { Icon: Mongodb, msg: 'MongoDB' },
    { Icon: Firebase, msg: 'Firebase' },
    { Icon: Puppeteer, msg: 'Puppeteer' },
    { Icon: LinuxTux, msg: 'Linux' },
    { Icon: Apache, msg: 'Apache' },
    { Icon: Bash, msg: 'Bash Shell' },
    { Icon: Gimp, msg: 'Gimp' },
    { Icon: Regex, msg: 'RegEx' },
  ]

  return (
    <div
      className={`${styles.iconContainer} ${
        inView ? styles.iconAnimation : ''
      }`}
      ref={objRef}
    >
      <h1>
        A Few of My <span>Skills</span>
      </h1>
      <div className={styles.iconInnerContainer}>
        {icons.map(({ Icon, msg }, i) => {
          return (
            <div key={i}>
              <Icon />
              <span>{msg}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
