import type { NextPage } from 'next'
import styles from './button.module.scss'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Button: NextPage = (props) => {
  return (
    <button className={styles.button} {...props}>
      VIEW PROJECT
    </button>
  )
}
