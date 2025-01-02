import React from 'react'

function layout({ children }) {
  return (
    <div>
      <h1 className="text-3xl">dashboard</h1>
      {children}
    </div>
  )
}

export default layout