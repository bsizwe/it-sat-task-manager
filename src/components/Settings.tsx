import React from 'react'

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and configurations</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              defaultValue="Sizwe Bongco"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sageGreen focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              defaultValue="sizwe@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sageGreen focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input 
              type="tel" 
              defaultValue="+27 11 123 4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sageGreen focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-sageGreen text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings