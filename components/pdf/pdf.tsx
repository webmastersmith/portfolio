import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { decodeEmail } from 'components'
import { Contact } from './contact'
import { Skills } from './skills'
import { Interest } from './interest'
import { Licenses } from './licenses'

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

  const courses = [
    'Advanced CSS, SASS, Flexbox, Grid, Animations',
    'Web Design for Developers',
    'The Complete JavaScript Course',
    'JavaScript: The Advanced Concepts',
    'Complete React Developer',
    'Modern React with Redux',
    'Typescript with modern React',
    'Next.js & React - The Complete Guide',
    'Typescript: The Complete Developers Guide',
    'Node.js, Express, MongoDB. The Complete Bootcamp',
  ]
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

        <div className={styles.experience}>
          <h4 className="h4">Experience</h4>
          <div className={styles.group}>
            <p className={styles.business}>
              full-stack developer training <span>2016-current</span>
            </p>
            <p>
              <span></span>I have dedicated the last 6+ years learning, growing
              and making myself the best programmer I can be. Check out{' '}
              <a
                href="https://bio.smithauto.us"
                rel={'noreferrer'}
                target={'_blank'}
              >
                my profile page
              </a>{' '}
              for examples of my latest work. Here are a few of the training
              courses and projects:
            </p>
            <div className={styles.course}>
              {courses.map((course) => {
                return <span key={course}>{course}</span>
              })}
            </div>
          </div>
          <div className={styles.group}>
            <p className={styles.business}>
              Smith Auto <span>2003-2015</span>
            </p>
            <p>
              <span>
                Owner, Manager, Lead Tech, ASE Master Mechanic, L1 Advanced
                Engine Performance
              </span>
              . I specialized in computer diagnostic, electrical troubleshooting
              and mechanical diagnostic repair. Skillful diagnostics and repair
              earned me the reputation as the &apos;go to shop&apos; and the
              &apos;2014 Best of Car Repair in Crockett&apos; award. Check out
              one of my training Videos! I trained and supervised mechanics,
              service writers and handled management duties: job assignments,
              hiring, firing, payroll.
            </p>
          </div>
          <div className={styles.group}>
            <p className={styles.business}>
              Whitehead Electric and A/C <span>2000-2002</span>
            </p>
            <p>
              <span>Electrical and HVAC install and repair.</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae aperiam cumque hic laudantium corporis mollitia at est
              enim? Quis quibusdam harum facere quam quos eaque ullam totam est
              nulla exercitationem?
            </p>
          </div>
        </div>

        <Licenses />

        <Interest />
      </div>
    </div>
  )
}
