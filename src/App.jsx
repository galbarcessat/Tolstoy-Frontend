
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Header } from './cmps/Header'
import './assets/styles/main.scss'

export function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </Router>
  )
}

