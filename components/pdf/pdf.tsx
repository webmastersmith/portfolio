import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { decodeEmail } from 'components'
import { Contact } from './contact'
import styles from './pdf.module.scss'
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
  CreateReactApp,
  Stripe,
  Heroku,
  Github,
  Top,
  Email,
  Location,
  Linkedin,
} from 'icons'

interface Props {
  isPdf: boolean
}

export const Pdf: NextPage<Props> = ({ isPdf }) => {
  const [email, setEmail] = useState('####@########.##')
  useEffect(() => {
    const delay = setTimeout(() => {
      setEmail(decodeEmail())
    }, 3000)
    return () => clearTimeout(delay)
  }, [])

  return (
    <div
      id="pdf"
      // remove margin for pdf creation
      className={`${styles.pdf} ${styles[isPdf ? 'noMargin' : '']}`}
    >
      <div className={styles.sidebar}>
        <div className={styles.bryonImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bryon-suit.jpg" alt="image of bryon smith" />
        </div>

        <Contact email={email} />
      </div>

      <div className={styles.main}>
        <div className={styles.header}>
          <h1>Bryon Smith</h1>
          <h4 className={styles.h4}>FULL-STACK DEVELOPER</h4>
        </div>
      </div>
    </div>
  )
}
