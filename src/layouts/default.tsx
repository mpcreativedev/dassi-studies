import { Outlet, Link } from 'react-router-dom'

const AppLayout: React.FC = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/studies">Studies</Link>
          </li>
          <li>
            <Link to="/individuals">Individuals</Link>
          </li>
        </ul>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default AppLayout
