import type { NextPage } from 'next'
import styles from './accomplishments.module.scss'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Accomplishments: NextPage = () => {
  return (
    <div className={styles.accomplishments}>
      <h4 className="h4">Accomplishments</h4>
      <div className={styles.grid}>
        <div className={styles.gridChild1}>
          <div className={styles.item}>
            <p className={styles.title}>
              ASE Master Technician <span>10+ years</span>
            </p>
            <ul>
              <li>A1 - Engine Repair</li>
              <li>A2 - Automatic Transmission / Transaxle</li>
              <li>A3 - Manual Drive Train and Axles</li>
              <li>A4 - Suspension and Steering</li>
              <li>A5 - Brakes</li>
              <li>A6 - Electrical / Electronic Systems</li>
              <li>A7 - Heating and Air Conditioning</li>
              <li>A8 - Engine Performance</li>
            </ul>
          </div>

          <div className={styles.item}>
            <p className={styles.title}>
              ASE L1 <span>10+ years</span>
            </p>
            <ul>
              <li>L1 - Advanced Engine Performance Specialist</li>
            </ul>
          </div>
          <div className={styles.item}>
            <p className={styles.title}>
              HVAC Technician <span>3+ years</span>
            </p>
            <ul>
              <li>
                Texas License # <span>64045...</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.gridChild2}>
          <div className={styles.item}>
            <p className={styles.title}>
              MVAC 609 <span>10+ years</span>
            </p>
            <ul>
              <li>Mobile Vehicle Air Conditioning</li>
              <li>
                License # <span>NT0HY0...</span>
              </li>
            </ul>
          </div>

          <div className={styles.item}>
            <p className={styles.title}>
              EPA 608 <span>3+ years</span>
            </p>
            <ul>
              <li>Air Conditioning Refrigerant</li>
              <li>
                License # <span>0604456724...</span>
              </li>
            </ul>
          </div>

          <div className={styles.item}>
            <p className={styles.title}>
              Electrician <span>3+ years</span>
            </p>
            <ul>
              <li>Commercial and Residential</li>
            </ul>
          </div>

          <div className={styles.item}>
            <p className={styles.title}>
              Airplane Technician <span>3 years</span>
            </p>
            <ul>
              <li>Airframe and Powerplant</li>
              <li>
                License # <span>37278...</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
