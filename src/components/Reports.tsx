import React from 'react'

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600">View your lending performance and analytics</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-sageGreen rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">📈</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Reports Coming Soon</h2>
        <p className="text-gray-600 mb-6">Advanced analytics and reporting features are in development.</p>
      </div>
    </div>
  )
}

export default Reports