import type { NextPage } from 'next'
import { Nav, Footer } from 'components'
import styles from './layout.module.scss'
import { Bottom } from 'icons'
import { useEffect, useState } from 'react'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Layout: NextPage = ({ children }) => {
  const [isPdf, setIsPdf] = useState(false)

  useEffect(() => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    if (params.get('pdf')) {
      setIsPdf(true)
    }
  }, [])

  //return only pdf when url has ?pdf=true.
  if (isPdf) {
    return <div>{children}</div>
  } else {
    // return nav and footer.
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
}
