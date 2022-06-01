import { Login } from '../Presentation/Pages/Login'
import { Home } from '../Presentation/Pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

function AppRouter() {
 return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
