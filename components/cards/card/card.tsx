import type { NextPage } from 'next'
import styles from './card.module.scss'

interface Props {
  src: string
  alt: string
}
// NextPage<Props>

export const Card: NextPage<Props> = ({ src, alt, children }) => {
  return (
    <div className={styles.cardContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {children}
    </div>
  )
}
