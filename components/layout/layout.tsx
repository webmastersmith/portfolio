import type { NextPage } from 'next'
import { Nav, Footer } from 'components'
//import styles from './layout.module.scss'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
