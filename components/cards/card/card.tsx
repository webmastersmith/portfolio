import type { NextPage } from 'next'
import { SVGProps } from 'react'
import styles from './card.module.scss'
import { Button } from 'components'

interface Props {
  src: string
  alt: string
  title: string
  text: string
  icons: Icon[]
}
type Icon = {
  Icon: React.ComponentType
  msg: string
}
// NextPage<Props>

export const Card: NextPage<Props> = ({
  src,
  alt,
  title,
  text,
  icons,
  children,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <div className={styles.svgContainer}>
          {icons.map(({ Icon, msg }) => {
            return (
              <div key={msg}>
                <Icon />
                <span>{msg}</span>
              </div>
            )
          })}
        </div>
        <p>{text}</p>
        <Button />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  )
}
