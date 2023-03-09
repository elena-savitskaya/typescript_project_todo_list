import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'
import { AboutPage } from './pages/AboutPage'
import { Footer } from './components/Footer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/"  element={<TodosPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
