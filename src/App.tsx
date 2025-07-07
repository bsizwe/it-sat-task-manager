import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import BorrowersList from './components/BorrowersList'
import LoansList from './components/LoansList'
import Reports from './components/Reports'
import Settings from './components/Settings'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/borrowers" element={<BorrowersList />} />
            <Route path="/loans" element={<LoansList />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App