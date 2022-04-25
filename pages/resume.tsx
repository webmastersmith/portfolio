import type { NextPage } from 'next'
import { Pdf } from 'components'
import { useEffect, useState } from 'react'
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
  const [isPdf, setIsPdf] = useState(false)

  useEffect(() => {
    console.log(window.location.href)
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    if (params.get('pdf')) {
      setIsPdf(true)
    }
  }, [])
  console.log(isPdf)

  return (
    <div className={styles.container}>
      <Top
        className={styles.angle}
        style={{ display: `${isPdf ? 'none' : 'block'}` }}
      />
      <Pdf isPdf={isPdf} />
    </div>
  )
}

export default Resume
