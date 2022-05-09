import type { NextPage } from 'next'
import styles from './interest.module.scss'
import { Computer, Motorcycle, Scuba, Electronics, Plane } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Interest: NextPage = () => {
  const icons = [
    { Icon: Computer, msg: 'Programming' },
    { Icon: Electronics, msg: 'Electronics' },
    { Icon: Motorcycle, msg: 'Motorcycling' },
    { Icon: Scuba, msg: 'Scuba Diving' },
    { Icon: Plane, msg: 'Flying' },
  ]
  return (
    <div className={styles.interest}>
      <h4 className="h4">Interest</h4>
      <div className={styles.iconBlock}>
        {icons.map(({ Icon, msg }) => {
          return (
            <div key={msg} className={styles.iconRow}>
              <Icon />
              <span>{msg}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
