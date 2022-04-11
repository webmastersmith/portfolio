import type { NextPage } from 'next'
import styles from './hero.module.scss'
import { Bryon } from 'components'
import { Linkedin, Github, Twitter } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Hero: NextPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <p>Hi, I&#39;m</p>
          <h1>Bryon Smith.</h1>
          <h2>
            I help build <span>full stack</span> dreams...
          </h2>

          <div className={styles.links}>
            <div className={styles.line} />
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
        </div>
      </div>

      <div className={styles.bryonContainer}>
        <Bryon />
      </div>
    </div>
  )
}
