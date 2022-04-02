import type { NextPage } from 'next'
import styles from './hero.module.scss'
import { Orb } from 'components'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Hero: NextPage = () => {
  return (
    <div className={styles.container}>
      <Orb particles={300} />
    </div>
  )
}
