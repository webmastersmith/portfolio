import type { NextPage } from 'next'
import styles from './cards.module.scss'
import { Card } from 'components'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Cards: NextPage = () => {
  const cards = [
    {
      src: '/AddressHelper/AddressHelper.png',
      alt: 'image of address helper website',
      title: 'Address Helper',
      text: 'Address Helper to locate people in city',
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