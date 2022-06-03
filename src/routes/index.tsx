import { Login } from '../Presentation/Pages/Login'
import { Home } from '../Presentation/Pages/Modules'
import { Admin } from '../Presentation/Pages/Admin'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Module } from '../Presentation/Pages/Module'

function AppRouter() {
 return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/modules" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/modules/:name" element={<Module />} />
      {/* <Route path="*" element={<Navigate to="/login" />}/> */}
      </Routes>
    </Router>
  )
}

export default AppRouter
