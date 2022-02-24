import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar/Sidebar'

const AppLayout: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 md:col-2">
          <Sidebar />
        </div>
        <div className="col-12 md:col-10">
          <section>
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
