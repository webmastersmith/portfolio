import type { NextPage } from 'next'
import styles from './footer.module.scss'
import { Linkedin, Github, Twitter } from 'icons'

export const Footer: NextPage = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>Bryon Smith</p>
      <div>
        <a
          href="https://www.linkedin.com/in/bryonsmith/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/webmastersmith"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://twitter.com/MasterTech40"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </div>
    </footer>
  )
}
