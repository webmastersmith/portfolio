import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { decodeEmail } from 'components'
import { Contact } from './contact'
import { Skills } from './skills'
import { Interest } from './interest'
import { Accomplishments } from './accomplishments'

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
  UsaFlag,
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
      <Head>
        {/* <meta name="viewport" content="width=820, initial-scale=1" /> */}
        <meta name="viewport" content="user-scalable = yes"></meta>
      </Head>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <div className={styles.bryonImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bryon-suit.jpg" alt="image of bryon smith" />
          </div>

          <Contact email={email} />

          <div className={styles.education}>
            <h4 className="h4">Education</h4>
            <div className={styles.group}>
              <p className={styles.year}>2002 - 2015</p>
              <p className={styles.title}>Business Owner</p>
              <p className={styles.college}>Smith Auto</p>
            </div>
            <div className={styles.group}>
              <p className={styles.year}>1997 - 1999</p>
              <p className={styles.title}>Applied Science Degree</p>
              <p className={styles.college}>Texas State Technical College</p>
            </div>
          </div>

          <Skills />

          <div className={styles.language}>
            <h4 className="h4">Language</h4>
            <div className={styles.iconRow}>
              <UsaFlag />
              <p>English</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.header}>
          <h1>BRYON SMITH</h1>
          <h4 className="h4">FULL-STACK DEVELOPER</h4>
        </div>

        <div className={styles.about}>
          <h4 className="h4">About</h4>
          {/*  <p className={styles.text}>
            Three words that best describe me:
            <p className={styles.moto}>
              <span>trusted</span>
              <span>dependable</span>
              <span>professional</span>
            </p>
          </p> */}
          <p className={styles.text}>
            I&apos;ve studied and practiced programming for 6+ years. The first
            four of those years, I worked part time, programming nights and
            weekends. For the last 2+ years I doubled my efforts and dedicated
            myself full-time, practicing 8 - 12 hours a day, 7 days a week. I
            feel I have finally reached a level of competency that will be
            valuable to my employer. My specialty is{' '}
            <span>
              HTML, CSS, React, Typescript, JavaScript, NodeJS, NextJS and
              MongoDB.
            </span>
          </p>
        </div>

        <Accomplishments />

        <Interest />
      </div>
    </div>
  )
}
