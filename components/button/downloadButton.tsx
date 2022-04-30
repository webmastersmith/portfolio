import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './button.module.scss'

// interface Props {
//   className: string
// }
// NextPage<Props>

export const DownloadButton: NextPage = () => {
  return (
    <a href="/Bryon_Resume.pdf" download>
      <button className={`${styles.glow} ${styles.downloadButton}`}>
        DOWNLOAD PDF
      </button>
    </a>
  )
}
