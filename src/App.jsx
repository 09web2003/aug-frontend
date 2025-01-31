import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Jobs from './pages/jobs'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/edit/:id" element={<Jobs />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
