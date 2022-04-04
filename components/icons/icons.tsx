import type { NextPage } from 'next'
import styles from './icons.module.scss'
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
} from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Icons: NextPage = () => {
  const icons = [
    { Icon: Html5, msg: 'HTML 5' },
    { Icon: Css3, msg: 'CSS 3' },
    { Icon: Sass, msg: 'Sass' },
    { Icon: Tailwind, msg: 'Tailwind CSS' },
    { Icon: Bootstrap, msg: 'Bootstrap' },
    { Icon: Js, msg: 'JavaScript' },
    { Icon: Typescript, msg: 'TypeScript' },
    { Icon: React, msg: 'React' },
    { Icon: Nextjs, msg: 'NextJS' },
    { Icon: Git, msg: 'Git' },
    { Icon: Node, msg: 'Node' },
    { Icon: Express, msg: 'Express' },
    { Icon: Mongodb, msg: 'MongoDB' },
    { Icon: Firebase, msg: 'Firebase' },
    { Icon: Puppeteer, msg: 'Puppeteer' },
    { Icon: LinuxTux, msg: 'Linux' },
    { Icon: Apache, msg: 'Apache' },
    { Icon: Bash, msg: 'Bash Shell' },
    { Icon: Gimp, msg: 'Gimp' },
  ]

  return (
    <div className={styles.iconContainer}>
      <h1>
        My <span>Skills</span>
      </h1>
      <div className={styles.iconInnerContainer}>
        {icons.map(({ Icon, msg }, i) => {
          return (
            <div key={i}>
              <Icon />
              <span>{msg}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
