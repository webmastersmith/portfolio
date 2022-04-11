import type { NextPage } from 'next'
import styles from './nav.module.scss'
import { Logo } from 'icons'
import Link from 'next/link'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Nav: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="#iconSection">
            <a>skills</a>
          </Link>
        </li>
        <li>
          <Link href="#contactSection">
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
