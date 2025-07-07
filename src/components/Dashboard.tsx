import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your Moola P2P Lending dashboard</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-sageGreen rounded-lg">
              <span className="text-white text-xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Borrowers</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-sageGreen rounded-lg">
              <span className="text-white text-xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Loans</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-sageGreen rounded-lg">
              <span className="text-white text-xl">📈</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Lent</p>
              <p className="text-2xl font-bold text-gray-900">R 45,000</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-sageGreen rounded-lg">
              <span className="text-white text-xl">🎯</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Return Rate</p>
              <p className="text-2xl font-bold text-gray-900">12.5%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600">✓</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Loan payment received</p>
              <p className="text-sm text-gray-500">Thabo Mokoena • R 1,200 • 2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600">📧</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New borrower invitation sent</p>
              <p className="text-sm text-gray-500">jane.doe@example.com • 5 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600">⚠️</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Payment reminder sent</p>
              <p className="text-sm text-gray-500">Nokuthula Dlamini • 1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard