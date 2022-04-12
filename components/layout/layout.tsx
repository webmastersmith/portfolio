import type { NextPage } from 'next'
import { Nav, Footer } from 'components'
import styles from './layout.module.scss'
import { Bottom } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        {children}
        <Bottom className={styles.angle} />
      </main>
      <Footer />
    </>
  )
}
