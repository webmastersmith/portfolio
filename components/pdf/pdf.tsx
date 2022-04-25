import type { NextPage } from 'next'
import styles from './pdf.module.scss'

interface Props {
  isPdf: boolean
}

export const Pdf: NextPage<Props> = ({ isPdf }) => {
  return (
    <div
      id="pdf"
      // remove margin for pdf creation
      className={`${styles.pdf} ${styles[isPdf ? 'noMargin' : '']}`}
    >
      hello
    </div>
  )
}
