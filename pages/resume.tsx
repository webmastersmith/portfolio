import type { NextPage } from 'next'
import { Pdf } from 'components'
import styles from 'styles/resume.module.scss'
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
} from 'icons'

const Resume: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <Top className={styles.angle} />
      <Pdf />
    </div>
  )
}

export default Resume
