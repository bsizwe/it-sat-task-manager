import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const location = useLocation()
  const [showReferralModal, setShowReferralModal] = useState(false)
  const [referralCode] = useState(`SB${Math.random().toString(36).substr(2, 8).toUpperCase()}`)

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/borrowers', label: 'My Borrowers', icon: '👥' },
    { path: '/loans', label: 'My Loans', icon: '💰' },
    { path: '/reports', label: 'Reports', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  const handleSendInvite = () => {
    setShowReferralModal(true)
  }

  const handleCloseReferral = () => {
    setShowReferralModal(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode)
    alert('Referral code copied to clipboard!')
  }

  return (
    <>
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sageGreen rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Moola</span>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-sageGreen text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleSendInvite}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>📩</span>
                <span>Send Invite</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sageGreen rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">SB</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Sizwe Bongco</div>
                  <div className="text-gray-500">Lender</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Referral Code Modal */}
      {showReferralModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🔗</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Your Referral Code</h2>
              </div>
              <button 
                onClick={handleCloseReferral}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              Share this code with borrowers to link them to you as their lender.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Referral Code:</p>
                  <p className="font-mono text-xl font-bold text-sageGreen">{referralCode}</p>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-2 bg-sageGreen text-white rounded-md text-sm hover:bg-opacity-90 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="font-medium text-gray-900 mb-2">How it works:</h3>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Share your referral code with borrowers</li>
                <li>2. They enter the code during registration</li>
                <li>3. They're automatically linked to you as their lender</li>
              </ol>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleCloseReferral}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation