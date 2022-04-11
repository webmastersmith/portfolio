import type { NextPage } from 'next'
import { SVGProps, useState, useRef, useEffect } from 'react'
import styles from './card.module.scss'
import { Button } from 'components'

interface Props {
  src: string
  alt: string
  title: string
  text: string
  icons: Icon[]
  id: number
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
  id,
  children,
}) => {
  const [inView, setInView] = useState(false) //state change loads image.
  const objRef = useRef(null) //same as document.querySelector('img')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            obs.disconnect() //disconnect once in view.
          } else setInView(false)
        }
      },
      {
        // rootMargin: '1000px',  //consider isIntersecting 1000px before item reaches viewport.
      }
    )
    if (objRef.current) {
      observer.observe(objRef?.current) //attach observer to 'objRef'
    }
    return () => {
      observer.disconnect() //when unmount disconnect observer
    }
  }, [])

  return (
    <div
      className={`${styles.cardContainer} ${
        inView ? styles.cardContainerAnimate : ''
      }`}
      ref={objRef}
    >
      <div
        className={`${styles.textContainer} ${
          id % 2 === 1 ? styles.gridChildA : styles.gridChildB
        }`}
      >
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
      <img
        src={src}
        alt={alt}
        className={`${id % 2 !== 1 ? styles.gridChildA : styles.gridChildB}`}
      />
    </div>
  )
}
