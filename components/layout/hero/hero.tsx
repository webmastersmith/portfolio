import type { NextPage } from 'next'
import styles from './hero.module.scss'
import { Section, Orb } from 'components'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Hero: NextPage = () => {
  return (
    <div className={styles.hero}>
      <Orb particles={300} />
    </div>
  )
}
