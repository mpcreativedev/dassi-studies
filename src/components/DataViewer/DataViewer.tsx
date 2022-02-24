import { memo } from 'react'
import styles from './DataViewer.module.scss'

interface DataViewerProps {
  formData?: unknown
}

const DataViewer: React.FC<DataViewerProps> = ({ formData }: DataViewerProps) => {
  return (
    <div className={styles['data-viewer']}>
      <div className={styles['data-viewer__body']}>
        {JSON.stringify(formData, null, 1)}
      </div>
    </div>
  )
}

export default memo(DataViewer)
