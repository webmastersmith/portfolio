import type { NextPage } from 'next'
import { Fragment } from 'react'
import styles from './experience.module.scss'
import { ArrowRight, React } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Experience: NextPage = () => {
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

  const smithAuto = [
    'Pioneered new methods of building customer trust and confidence with before/after repair videos.',
    'I trained and supervised mechanics, service writers.',
    'Worked closely with parts suppliers to receive parts in a timely fashion for the best price.',
    'Created work guides that made employee responsibility and accountability clear.',
    'Streamlined employee workflow to prevent bottlenecks and interruptions.',
  ]
  return (
    <div className={styles.experience}>
      <h4 className="h4">Experience</h4>
      <div className={styles.group}>
        <p className={styles.business}>
          Full-Stack Developer Training <span>2016-current</span>
        </p>
        <p>
          I have dedicated the last 6+ years learning and growing. Check out{' '}
          <a
            href="https://bio.smithauto.us"
            rel={'noreferrer'}
            target={'_blank'}
          >
            my profile page
          </a>{' '}
          for examples of my latest work. Here are a few of the training
          courses:
        </p>
        <div className={styles.courses}>
          {courses.map((course) => {
            return (
              <div key={course} className={styles.course}>
                <ArrowRight /> <span>{course}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.business}>
          Smith Auto <span>2003-2015</span>
        </p>
        <p className={styles.bold}>
          Owner, Manager, Lead Tech, ASE Master Mechanic, L1 Advanced Engine
          Performance
        </p>
        <p>
          Hard work and skillful diagnostics earned me the reputation as the
          go-to shop and the &apos;2014 Best of Car Repair in Crockett&apos;
          award. Check out one of my{' '}
          <a
            href="https://www.youtube.com/watch?v=brXckSyccm8"
            target={'_blank'}
            rel="noreferrer"
          >
            training videos
          </a>
          !
        </p>
        <div className={styles.smithAutoSkill}>
          {smithAuto.map((item, i) => {
            return (
              <Fragment key={i}>
                <div>
                  <ArrowRight /> <span>{item}</span>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.business}>
          Whitehead Electric and A/C <span>2000-2002</span>
        </p>
        <p className={styles.bold}>Electrical and HVAC install and repair.</p>
        <p>
          Install and repair of commercial, residential electrical and HVAC
          systems.
        </p>
      </div>
    </div>
  )
}
