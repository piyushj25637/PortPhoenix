import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Dashboard from './pages/Dashboard'
import Showcase from './pages/Showcase'
import SignIn from './pages/Signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/showcase/:id" element={<Showcase />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
