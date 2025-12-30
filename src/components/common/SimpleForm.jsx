import React from 'react'

export default function SimpleForm({ children, onSubmit, className = '' }) {
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>{children}</form>
  )
}
