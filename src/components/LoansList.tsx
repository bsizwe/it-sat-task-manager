import React from 'react'

const LoansList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Loans</h1>
        <p className="text-gray-600">Manage your active and completed loans</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-sageGreen rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">💰</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Loans Yet</h2>
        <p className="text-gray-600 mb-6">Start by inviting borrowers and managing their loan applications.</p>
        <button className="bg-sageGreen text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
          Invite Your First Borrower
        </button>
      </div>
    </div>
  )
}

export default LoansList