import styles from './orb.module.scss'

type Props = {
  particles: number
}

export const Orb = ({ particles }: Props) => {
  const range = Array.from({ length: particles }, (x, i) => i)

  return (
    <div className={styles.wrap}>
      {range.map((num) => {
        return <div key={num} className={styles.c}></div>
      })}
    </div>
  )
}
