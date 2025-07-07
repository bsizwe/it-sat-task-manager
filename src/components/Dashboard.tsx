import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Sizwe Bongco!</h1>
        <p className="text-gray-600">Here's what's happening with your lending today.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Borrowers</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-green-600 mt-1">+3 ↗</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <span className="text-blue-600 text-xl">👥</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Lent</p>
              <p className="text-2xl font-bold text-gray-900">R 45,200</p>
              <p className="text-sm text-green-600 mt-1">+R 8,500 ↗</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-green-600 text-xl">💰</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Amount Repaid</p>
              <p className="text-2xl font-bold text-gray-900">R 32,800</p>
              <p className="text-sm text-green-600 mt-1">+R 5,200 ↗</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-green-600 text-xl">✓</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Repayments</p>
              <p className="text-2xl font-bold text-gray-900">R 12,400</p>
              <p className="text-sm text-yellow-600 mt-1">+R 3,300 ↗</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <span className="text-yellow-600 text-xl">⏰</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Loans and Watchlist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Loans */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <span>📋</span>
              <span>Recent Loans</span>
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-sageGreen rounded-full flex items-center justify-center text-white font-bold">
                TM
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Thabo Mokoena</p>
                <p className="text-sm text-gray-500">R 3,000</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-sageGreen rounded-full flex items-center justify-center text-white font-bold">
                ND
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Nokuthula Dlamini</p>
                <p className="text-sm text-gray-500">R 2,500</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-sageGreen rounded-full flex items-center justify-center text-white font-bold">
                SN
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Sipho Nkosi</p>
                <p className="text-sm text-gray-500">R 4,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Watchlist */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <span>⚠️</span>
              <span>Watchlist</span>
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">R 1,500 overdue</p>
                <p className="text-xs text-red-500">5 days overdue</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">High</span>
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Active</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                <p className="text-sm text-gray-500">R 2,000 overdue</p>
                <p className="text-xs text-yellow-500">2 days overdue</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profit & Loss Overview */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <span>📊</span>
            <span>Profit & Loss Overview</span>
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <span className="text-green-600 text-2xl">�</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Total Interest Earned</p>
              <p className="text-xl font-bold text-green-600">R 8,450</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <span className="text-blue-600 text-2xl">✓</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Principal Repaid</p>
              <p className="text-xl font-bold text-blue-600">R 32,800</p>
            </div>
            
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <span className="text-red-600 text-2xl">✗</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Total Defaults</p>
              <p className="text-xl font-bold text-red-600">R 1,200</p>
            </div>
            
            <div className="text-center p-4 bg-sageGreen bg-opacity-10 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <span className="text-sageGreen text-2xl">💰</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Net Profit</p>
              <p className="text-xl font-bold text-sageGreen">R 7,250</p>
              <p className="text-xs text-gray-500 mt-1">15.2% annualized return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard