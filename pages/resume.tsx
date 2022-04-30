import type { NextPage } from 'next'
import { Pdf, DownloadButton } from 'components'
import { useEffect, useState } from 'react'
import styles from 'styles/resume.module.scss'
import { Top } from 'icons'

const Resume: NextPage = ({ children }) => {
  const [isPdf, setIsPdf] = useState(false)

  useEffect(() => {
    // console.log(window.location.href)
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    if (params.get('pdf')) {
      setIsPdf(true)
    }
  }, [])
  // console.log(isPdf)

  return (
    <div className={styles.container}>
      <Top
        className={styles.angle}
        //needed for puppeteer pdf
        style={{ display: `${isPdf ? 'none' : 'block'}` }}
      />
      <Pdf isPdf={isPdf} />

      <DownloadButton />
    </div>
  )
}

export default Resume
