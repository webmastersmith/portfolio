import type { NextPage } from 'next'
import styles from './footer.module.scss'

export const Footer: NextPage = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>
        &copy; 2022 <span>Bryon Smith</span>
      </p>
    </footer>
  )
}
