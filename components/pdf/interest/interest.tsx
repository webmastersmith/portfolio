import type { NextPage } from 'next'
import styles from './interest.module.scss'
import { Computer } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Interest: NextPage = () => {
  const icons = [
    { Icon: Computer, msg: 'Programming' },
    { Icon: Computer, msg: 'Programming' },
    { Icon: Computer, msg: 'Programming' },
    { Icon: Computer, msg: 'Programming' },
  ]
  return (
    <div className={styles.interest}>
      <h4 className="h4">Interest</h4>
      {icons.map(({ Icon, msg }) => {
        return (
          <div key={msg} className={styles.iconRow}>
            <Icon />
            <span>{msg}</span>
          </div>
        )
      })}
    </div>
  )
}
