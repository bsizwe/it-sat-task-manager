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

  const handleInviteBorrower = async () => {
    if (!inviteEmail) return

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Inviting borrower:', inviteEmail)
      setShowInviteModal(false)
      setInviteEmail('')
      // Show success message
      alert('Invitation sent successfully!')
    } catch (error) {
      console.error('Failed to send invitation:', error)
      alert('Failed to send invitation. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
          className="bg-sageGreen text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          + Invite Borrower
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Invite Borrower</h2>
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
              
              <div className="bg-gray-100 p-3 rounded-md">
                <p className="text-sm text-gray-600">Invitation Code:</p>
                <p className="font-mono text-lg font-bold text-sageGreen">MOOLA-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowInviteModal(false)}
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
          </div>
        </div>
      )}
    </div>
  )
}

export default BorrowersList