import type { NextPage } from 'next'
import {} from 'components'
import { Top } from 'icons'
import styles from 'styles/addressHelper.module.scss'

const AddressHelper: NextPage = ({ children }) => {
  return (
    <div className={styles.addressHelperContainer}>
      <Top className={styles.angle} />
      <div className={styles.heading}>
        <h1>Lufkin Address Helper</h1>
        <p>
          Lufkin Address Helper is a Nextjs/React Application built for a static
          served html pages. I built this project from scratch using
          Nextjs/React, Typescript, MongoDB, and Puppeteer. This application
          required a lot of heavy lifting at build time to create fast loading
          html pages that do not have to have a dedicated database server.
        </p>
      </div>
    </div>
  )
}

export default AddressHelper
