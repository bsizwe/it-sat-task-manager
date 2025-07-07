import React, { useState } from 'react'

interface Borrower {
  id: string
  name: string
  email: string
  phone: string
  location: string
  status: 'Active' | 'Inactive'
  avatar: string
  totalLoans: number
  activeLoans: number
  totalBorrowed: number
  creditScore: number
}

const BorrowersList: React.FC = () => {
  const [borrowers] = useState<Borrower[]>([
    {
      id: '1',
      name: 'Thabo Mokoena',
      email: 'thabo.mokoena@gmail.com',
      phone: '+27 82 123 4567',
      location: 'Cape Town, Western Cape',
      status: 'Active',
      avatar: 'TM',
      totalLoans: 2,
      activeLoans: 1,
      totalBorrowed: 2500,
      creditScore: 680
    },
    {
      id: '2',
      name: 'Nokuthula Dlamini',
      email: 'nokuthula.dlamini@gmail.com',
      phone: '+27 83 234 5678',
      location: 'Durban, KwaZulu-Natal',
      status: 'Active',
      avatar: 'ND',
      totalLoans: 1,
      activeLoans: 1,
      totalBorrowed: 12000,
      creditScore: 750
    },
    {
      id: '3',
      name: 'Sipho Nkosi',
      email: 'sipho.nkosi@gmail.com',
      phone: '+27 84 345 6789',
      location: 'Durban, KwaZulu-Natal',
      status: 'Inactive',
      avatar: 'SN',
      totalLoans: 3,
      activeLoans: 0,
      totalBorrowed: 0,
      creditScore: 750
    }
  ])

  const [showInviteModal, setShowInviteModal] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [inviteCode, setInviteCode] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const generateInviteCode = () => {
    return `MOOLA-2024-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
  }

  const handleInviteBorrower = async () => {
    if (!inviteEmail) return

    setIsLoading(true)
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Generate new invite code
      const newCode = generateInviteCode()
      setInviteCode(newCode)
      setShowSuccess(true)
      
      console.log('Invitation sent to:', inviteEmail, 'with code:', newCode)
      
      // Reset form after showing success
      setTimeout(() => {
        setShowInviteModal(false)
        setInviteEmail('')
        setShowSuccess(false)
        setInviteCode('')
      }, 3000)
      
    } catch (error) {
      console.error('Failed to send invitation:', error)
      alert('Failed to send invitation. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseModal = () => {
    setShowInviteModal(false)
    setInviteEmail('')
    setShowSuccess(false)
    setInviteCode('')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Borrowers</h1>
          <p className="text-gray-600">View and manage your borrowers and their loan history</p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="bg-sageGreen text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center space-x-2"
        >
          <span>+</span>
          <span>Invite Borrower</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search borrowers..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sageGreen focus:border-transparent"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sageGreen focus:border-transparent">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Borrowers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {borrowers.map((borrower) => (
          <div key={borrower.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            {/* Borrower Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-sageGreen rounded-full flex items-center justify-center text-white font-bold">
                {borrower.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{borrower.name}</h3>
                <p className="text-sm text-gray-600">{borrower.email}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                borrower.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {borrower.status}
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-4 h-4 mr-2">📞</span>
                {borrower.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-4 h-4 mr-2">📍</span>
                {borrower.location}
              </div>
            </div>

            {/* Loan Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-sageGreen">{borrower.totalLoans}</div>
                <div className="text-xs text-gray-600">Total Loans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sageGreen">{borrower.activeLoans}</div>
                <div className="text-xs text-gray-600">Active Loans</div>
              </div>
            </div>

            {/* Financial Info */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Borrowed:</span>
                <span className="font-medium">R {borrower.totalBorrowed.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Credit Score:</span>
                <span className="font-medium">{borrower.creditScore}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 text-sm text-sageGreen border border-sageGreen rounded-md hover:bg-sageGreen hover:text-white transition-colors">
                View Details
              </button>
              <button className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                📝
              </button>
              <button className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                📧
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            {!showSuccess ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Invite Borrower</h2>
                  <button 
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-gray-600 mb-4">Share this code with your borrower</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Borrower Email
                    </label>
                    <input
                      type="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      placeholder="Enter borrower's email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sageGreen focus:border-transparent"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🔗</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">How it works:</p>
                      </div>
                    </div>
                    <ol className="text-sm text-gray-600 space-y-1 ml-11">
                      <li>1. Share your referral code with borrowers</li>
                      <li>2. They enter the code during registration</li>
                      <li>3. They're automatically linked to you as their lender</li>
                    </ol>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleInviteBorrower}
                    disabled={!inviteEmail || isLoading}
                    className="flex-1 px-4 py-2 bg-sageGreen text-white rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Invitation'}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Invitation Sent!</h2>
                  <p className="text-gray-600 mb-4">Your invitation has been sent to {inviteEmail}</p>
                  
                  <div className="bg-sageGreen bg-opacity-10 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600 mb-2">Invitation Code:</p>
                    <p className="font-mono text-lg font-bold text-sageGreen">{inviteCode}</p>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    This modal will close automatically in a few seconds...
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default BorrowersList