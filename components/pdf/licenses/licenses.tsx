import type { NextPage } from 'next'
import styles from './licenses.module.scss'
import { ArrowRight } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Licenses: NextPage = () => {
  const licenseTypes = [
    {
      title: 'ASE Master Technician',
      type: 'A1-A8 Automotive Repair',
    },
    {
      title: 'ASE L1',
      type: 'Advanced Engine Performance',
    },
    {
      title: 'MVAC',
      type: 'Mobile Vehicle Air Conditioning',
    },
    {
      title: 'Electrical & HVAC Tech',
      type: 'Electrician & Air Conditioning',
    },
    {
      title: 'EPA 608',
      type: 'Air Conditioning Refrigerant',
    },
    {
      title: 'Airplane Technician',
      type: 'Airframe and Powerplant Technician',
    },
  ]
  return (
    <div className={styles.licenses}>
      <h4 className="h4">Licenses</h4>
      <div className={styles.grid}>
        {licenseTypes.map(({ title, type }) => {
          return (
            <div key={title}>
              <p className={styles.title}>{title}</p>
              <p className={styles.type}>{type}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

{
  /* <div className={styles.gridChild1}>
<div className={styles.item}>
  <p className={styles.title}>
    ASE Master Technician <span>10+ years</span>
  </p>
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
</div> */
}
