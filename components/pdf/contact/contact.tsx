import type { NextPage } from 'next'
import styles from './contact.module.scss'
import { Email, Location, Linkedin, Twitter, Webpage } from 'icons'

interface Props {
  email: string
}

export const Contact: NextPage<Props> = ({ email }) => {
  return (
    <div className={styles.contactContainer}>
      <h4 className="h4">Contact</h4>
      <div className={styles.iconRow}>
        <Location />
        <p>Texas, USA</p>
      </div>
      <div className={styles.iconRow}>
        <Webpage />
        <a href="https://bio.smithauto.us" target="_blank" rel="noreferrer">
          bio.smithauto.us
        </a>
      </div>
      <div className={styles.iconRow}>
        <Email />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className={styles.iconRow}>
        <Linkedin />
        <a
          href="https://www.linkedin.com/in/bryonsmith/"
          target="_blank"
          rel="noreferrer"
        >
          BryonSmith
        </a>
      </div>
      <div className={styles.iconRow}>
        <Twitter />
        <a
          href="https://twitter.com/MasterTech40"
          target="_blank"
          rel="noreferrer"
        >
          MasterTech40
        </a>
      </div>
    </div>
  )
}
