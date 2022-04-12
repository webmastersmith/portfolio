import type { NextPage } from 'next'
import { Hero } from 'components'
import styles from 'styles/candyCrush.module.scss'

const CandyCrush: NextPage = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <Hero />
      </header>
    </div>
  )
}

export default CandyCrush
