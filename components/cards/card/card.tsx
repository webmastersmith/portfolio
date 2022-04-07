import type { NextPage } from 'next'
import styles from './card.module.scss'
import { Button } from 'components'

interface Props {
  src: string
  alt: string
  title: string
}
// NextPage<Props>

export const Card: NextPage<Props> = ({ src, alt, title, children }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <Button />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  )
}
