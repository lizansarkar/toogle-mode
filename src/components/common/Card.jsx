import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
