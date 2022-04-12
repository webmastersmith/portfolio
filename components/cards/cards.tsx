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
  const cards = [
    {
      src: '/cards/addressHelper/addressHelper.png',
      alt: 'image of address helper website',
      title: 'Address Helper',
      page: 'address-helper',
      text: 'Webscraper, Database, to static website. Built to easily find property owners address, property image and property owner phone numbers. Hosted on an HTTPS Apache server.',
      icons: [
        { Icon: Html5, msg: 'HTML' },
        { Icon: Css3, msg: 'CSS' },
        { Icon: Sass, msg: 'Sass' },
        { Icon: Js, msg: 'JavaScript' },
        { Icon: Typescript, msg: 'TypeScript' },
        { Icon: React, msg: 'React' },
        { Icon: Nextjs, msg: 'NextJS' },
        { Icon: Node, msg: 'Node' },
        { Icon: Mongodb, msg: 'MongoDB' },
        { Icon: Puppeteer, msg: 'Puppeteer' },
        { Icon: Apache, msg: 'Apache' },
      ],
    },
    {
      src: '/cards/candyCrush/candyCrush.png',
      alt: 'image of candy crush game',
      title: 'Candy Crush',
      page: 'candy-crush',
      text: 'Candy Crush game inspired by Anna Kubow. Built with React Hooks. Hosted on Github pages.',
      icons: [
        { Icon: Html5, msg: 'HTML' },
        { Icon: Css3, msg: 'CSS' },
        { Icon: Sass, msg: 'Sass' },
        { Icon: Js, msg: 'JavaScript' },
        { Icon: React, msg: 'React' },
        { Icon: CreateReactApp, msg: 'Create React App' },
        { Icon: Github, msg: 'Github Pages' },
      ],
    },
    {
      src: '/cards/crownClothing/crownClothing.png',
      alt: 'image of clothing store',
      title: 'Crown Clothing',
      page: 'crown-clothing',
      text: '"Complete React Developer" Udemy course. Clothing Store with modern sign-in, editable shopping cart and stripe checkout. Hosted on Heroku.',
      icons: [
        { Icon: Html5, msg: 'HTML' },
        { Icon: Css3, msg: 'CSS' },
        { Icon: Sass, msg: 'Sass' },
        { Icon: Js, msg: 'JavaScript' },
        { Icon: React, msg: 'React' },
        { Icon: CreateReactApp, msg: 'Create React App' },
        { Icon: Stripe, msg: 'Stripe Payments' },
        { Icon: Heroku, msg: 'Heroku' },
      ],
    },
  ]

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, i) => {
        return <Card key={card.src} {...card} id={i} />
      })}
    </div>
  )
}
