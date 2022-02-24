import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
  return (
    <aside className={styles['aside']}>
      <nav className={styles['aside__nav']}>
        <div className={styles['aside__item']}>
          <Link to="/">Dashboard</Link>
        </div>
        <div className={styles['aside__item']}>
          <Link to="/studies">Studies</Link>
        </div>
        <div className={styles['aside__item']}>
          <Link to="/individuals">Individuals</Link>
        </div>
      </nav>
    </aside>
  )
}

export default memo(Sidebar)
