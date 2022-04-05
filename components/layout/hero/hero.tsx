import type { NextPage } from 'next'
import styles from './hero.module.scss'
import { Orb, Bryon } from 'components'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Hero: NextPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <p>Hi, I&#39;m</p>
          <h1>Bryon Smith.</h1>
          <h2>
            I help build <span>full stack</span> dreams...
          </h2>
        </div>
      </div>

      <div className={styles.bryonContainer}>
        <Bryon />
      </div>
    </div>
  )
}
