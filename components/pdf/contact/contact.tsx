import type { NextPage } from 'next'
import styles from './contact.module.scss'
import { Email, Location, Linkedin, Twitter } from 'icons'

interface Props {
  email: string
}

export const Contact: NextPage<Props> = ({ email }) => {
  return (
    <div className={styles.contactContainer}>
      <h4 className={styles.h4}>Contact</h4>
      <div className={styles.iconRow}>
        <Location />
        <p>Texas, USA</p>
      </div>
      <div className={styles.iconRow}>
        <Email />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className={styles.iconRow}>
        <Linkedin />
        <a href="https://www.linkedin.com/in/bryonsmith/">BryonSmith</a>
      </div>
      <div className={styles.iconRow}>
        <Twitter />
        <a href="https://twitter.com/MasterTech40">MasterTech40</a>
      </div>
    </div>
  )
}
