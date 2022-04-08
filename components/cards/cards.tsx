import type { NextPage } from 'next'
import styles from './cards.module.scss'
import { Card } from 'components'
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
  MongodbBlack,
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

// const icons = [
//   { Icon: Html5, msg: 'HTML 5' },
//   { Icon: Css3, msg: 'CSS 3' },
//   { Icon: Sass, msg: 'Sass' },
//   { Icon: Tailwind, msg: 'Tailwind CSS' },
//   { Icon: Bootstrap, msg: 'Bootstrap' },
//   { Icon: Js, msg: 'JavaScript' },
//   { Icon: Typescript, msg: 'TypeScript' },
//   { Icon: React, msg: 'React' },
//   { Icon: Nextjs, msg: 'NextJS' },
//   { Icon: Git, msg: 'Git' },
//   { Icon: Node, msg: 'Node' },
//   { Icon: Express, msg: 'Express' },
//   { Icon: Mongodb, msg: 'MongoDB' },
//   { Icon: Firebase, msg: 'Firebase' },
//   { Icon: Puppeteer, msg: 'Puppeteer' },
//   { Icon: LinuxTux, msg: 'Linux' },
//   { Icon: Apache, msg: 'Apache' },
//   { Icon: Bash, msg: 'Bash Shell' },
//   { Icon: Gimp, msg: 'Gimp' },
// ]

export const Cards: NextPage = () => {
  const NextjsBlack = () => <Nextjs style={{ fill: '#000000' }} />
  const cards = [
    {
      src: '/AddressHelper/AddressHelper.png',
      alt: 'image of address helper website',
      title: 'Address Helper',
      text: 'Address Helper to locate people in city',
      icons: [
        { Icon: Html5, msg: 'HTML' },
        { Icon: Css3, msg: 'CSS' },
        { Icon: Js, msg: 'JavaScript' },
        { Icon: Typescript, msg: 'TypeScript' },
        { Icon: React, msg: 'React' },
        { Icon: NextjsBlack, msg: 'NextJS' },
        { Icon: Node, msg: 'Node' },
        { Icon: MongodbBlack, msg: 'MongoDB' },
        { Icon: Puppeteer, msg: 'Puppeteer' },
      ],
    },
  ]

  return (
    <div>
      {cards.map((card) => {
        return <Card key={card.src} {...card} />
      })}
    </div>
  )
}
