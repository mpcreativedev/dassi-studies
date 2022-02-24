import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '@/layouts/default'
import Individuals from '@/pages/individuals'
import Dashboard from '@/pages/dashboard'
import Studies from '@/pages/studies'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="studies" element={<Studies />} />
          <Route path="individuals" element={<Individuals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
