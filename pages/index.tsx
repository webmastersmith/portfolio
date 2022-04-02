import type { NextPage } from 'next'
import { Orb } from 'components'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Orb particles={300} />
    </div>
  )
}

export default Home
