import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { decodeEmail } from 'components'
import { Contact } from './contact'
import { Skills } from './skills'
import { Interest } from './interest'
import { Licenses } from './licenses'
import { Experience } from './experience'

import styles from './pdf.module.scss'
import { UsaFlag } from 'icons'

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
        <meta name="viewport" content="user-scalable = yes"></meta>
      </Head>
      <div className={styles.bgImage}></div>
      <div className={styles.sidebarContainer}>
        <div className={styles.whiteBG}></div>
        <div className={styles.sidebar}>
          <div className={styles.bryonImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bryon-suit.jpg" alt="image of bryon smith" />
          </div>

          <Contact email={email} />

          <div className={styles.education}>
            <h4 className="h4">Education</h4>
            <div className={styles.group}>
              <p className={styles.year}>
                Smith Auto <span>2003-2015</span>
              </p>
              <p className={styles.title}>Business Owner</p>
            </div>
            <div className={styles.group}>
              <p className={styles.year}>
                TSTC <span>1997-1998</span>
              </p>
              <p className={styles.title}>Applied Science Degree</p>
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
          <p className={styles.text}>
            Drive, hard work, and my love of programing has made me a successful
            full-stack developer. I&apos;ve studied and practiced programming
            for 6+ years. For the last 2+ years, I doubled my efforts,
            practicing 8-12 hours a day, 7 days a week.{' '}
            <span>HTML, CSS, JavaScript, React, Typescript, Node.js</span> are
            just a few of my skills.
          </p>
          <p className={styles.text}>
            Thank you for reviewing my resume, I&apos;m excited to talk to you
            and see if we&apos;re a good fit.
          </p>
        </div>

        <Experience />

        <Licenses />

        <Interest />
      </div>
    </div>
  )
}
