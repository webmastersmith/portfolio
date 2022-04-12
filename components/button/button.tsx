import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './button.module.scss'

interface Props {
  page: string
}
//NextPage<Props>

export const Button: NextPage<Props> = ({ page }) => {
  return (
    <Link href={page}>
      <a>
        <button className={styles.glow}>VIEW PROJECT</button>
      </a>
    </Link>
  )
}
