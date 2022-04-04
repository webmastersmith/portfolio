import type { NextPage } from 'next'
import styles from './bryon.module.scss'
import { Orb } from 'components'

export const Bryon: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/bryon.png"
        alt="picture of bryon"
        className={styles.bryon}
      />
      <div className={styles.orb}>
        <Orb particles={300} />
      </div>
    </div>
  )
}
