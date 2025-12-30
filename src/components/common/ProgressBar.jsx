import React from 'react'

export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
      <div className="h-2 rounded-full bg-black dark:bg-white transition-all" style={{ width: `${value}%` }} />
    </div>
  )
}
