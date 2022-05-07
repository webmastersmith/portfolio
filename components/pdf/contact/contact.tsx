import type { NextPage } from 'next'
import styles from './contact.module.scss'
import { Email, Location, Linkedin, Twitter, Webpage, Github } from 'icons'

interface Props {
  email: string
}

export const Contact: NextPage<Props> = ({ email }) => {
  return (
    <div className={styles.contactContainer}>
      <h4 className="h4">Contact</h4>
      <div className={styles.iconRow}>
        <Location />
        <span>Texas, USA</span>
      </div>
      <div className={styles.iconRow}>
        <Webpage />
        <a href="https://bio.smithauto.us" target="_blank" rel="noreferrer">
          <span>bio.smithauto.us</span>
        </a>
      </div>
      <div className={styles.iconRow}>
        <Email />
        <a href={`mailto:${email}`}>
          <span>{email}</span>
        </a>
      </div>
      <div className={styles.iconRow}>
        <Linkedin />
        <a
          href="https://www.linkedin.com/in/bryonsmith/"
          target="_blank"
          rel="noreferrer"
        >
          <span>linkedin.com/in/bryonsmith</span>
        </a>
      </div>
      <div className={styles.iconRow}>
        <Github />
        <a
          href="https://github.com/webmastersmith"
          target="_blank"
          rel="noreferrer"
        >
          <span>github.com/webmastersmith</span>
        </a>
      </div>
      <div className={styles.iconRow}>
        <Twitter />
        <a
          href="https://twitter.com/MasterTech40"
          target="_blank"
          rel="noreferrer"
        >
          <span>twitter.com/MasterTech40</span>
        </a>
      </div>
    </div>
  )
}
