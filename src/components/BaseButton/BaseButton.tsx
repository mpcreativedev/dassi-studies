import { memo } from 'react'
import { Icon } from '@iconify/react'
import styles from './BaseButton.module.scss'

interface BaseButtonProps {
  className?: string
  variant?: string
  label?: string
  icon?: string
  type?: string
  onClick?: () => void
}

const BaseButton: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
  const { variant, label, icon, className, onClick } = props

  return (
    <button
      className={`${styles['btn']}${variant ? ` ${styles[`btn--${variant}`]}` : ''}${
        className ? ` ${className}` : ''
      }`}
      onClick={onClick}
    >
      {icon && <Icon className={styles['btn__icon']} icon={icon} />}
      {label && <span className={styles['btn__label']}>{label}</span>}
    </button>
  )
}

export default memo(BaseButton)
