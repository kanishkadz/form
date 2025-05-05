import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import RegisterForm from './pages/RegisterForm'
import Landing from './pages/Landing'
import SuccessPage from './pages/SuccessPage'
import FailedPage from './pages/FailedPage'
import ViewForm from './pages/ViewForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failed" element={<FailedPage />} />
        <Route path="/viewform" element={<ViewForm />} />
      </Routes>
    </Router>
  )
}

export default App
