import type { NextPage } from 'next'
import { Nav, Hero, Footer } from 'components'
import styles from 'styles/addressHelper.module.scss'

const AddressHelper: NextPage = ({ children }) => {
  return (
    <div>
      <header className={styles.header}></header>
    </div>
  )
}

export default AddressHelper
