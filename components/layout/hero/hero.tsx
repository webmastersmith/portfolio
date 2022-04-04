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
      <div className={styles.text}>
        <h1>Bryon Smith.</h1>
        <h2>I help build full stack dreams...</h2>
        <h2>Let&#39;s be friends.</h2>
      </div>
      <Bryon />
    </div>
  )
}
