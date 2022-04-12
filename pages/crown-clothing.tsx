import type { NextPage } from 'next'
import { Hero } from 'components'
import styles from 'styles/crownClothing.scss'

const CrownClothing: NextPage = ({ children }) => {
  return (
    <header className={styles.header}>
      <Hero />
    </header>
  )
}

export default CrownClothing
