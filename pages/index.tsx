import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/circle.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.wrap}>
      <div className="c" id="circle"></div>
    </div>
  )
}

export default Home
