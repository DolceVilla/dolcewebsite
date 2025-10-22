import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="px-4 mobile:px-6 tablet:px-8 laptop:px-12 desktop:px-24">
      {children}
    </div>
  )
}

export default Layout