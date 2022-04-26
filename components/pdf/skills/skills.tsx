import type { NextPage } from 'next'
import styles from './skills.module.scss'
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
  MongoLeaf,
  Nextjs,
  Node,
  Puppeteer,
  React,
  Typescript,
  Git,
  Express,
  Gimp,
  Regex,
  CreateReactApp,
  StyledComponents,
  Pwa,
} from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Skills: NextPage = () => {
  const icons = [
    { Icon: Html5, msg: 'HTML 5' },
    { Icon: Css3, msg: 'CSS 3' },
    { Icon: Sass, msg: 'Sass' },
    { Icon: StyledComponents, msg: 'Styled' },
    { Icon: Tailwind, msg: 'Tailwind' },
    { Icon: Bootstrap, msg: 'Bootstrap' },
    { Icon: Js, msg: 'JavaScript' },
    { Icon: Typescript, msg: 'TypeScript' },
    { Icon: React, msg: 'React' },
    { Icon: CreateReactApp, msg: 'CRA' },
    { Icon: Nextjs, msg: 'NextJS' },
    { Icon: Git, msg: 'Git' },
    { Icon: Node, msg: 'Node' },
    { Icon: Express, msg: 'Express' },
    { Icon: MongoLeaf, msg: 'MongoDB' },
    { Icon: Firebase, msg: 'Firebase' },
    { Icon: Puppeteer, msg: 'Puppeteer' },
    { Icon: LinuxTux, msg: 'Linux' },
    { Icon: Apache, msg: 'Apache' },
    { Icon: Bash, msg: 'Bash' },
    { Icon: Gimp, msg: 'Gimp' },
    { Icon: Regex, msg: 'RegEx' },
    { Icon: Pwa, msg: 'PWA' },
  ]

  return (
    <div className={styles.skills}>
      <h4 className="h4">Skills</h4>
      <div className={styles.icons}>
        {icons.map(({ Icon, msg }) => {
          return (
            <div className={styles.iconRow} key={msg}>
              <Icon />
              <span>{msg}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
