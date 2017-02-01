import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className="container-fluid text-center corelay">
    <Header />
    <div className="container-fluid core-layout__viewport">
      {children}
    </div>
  </div>
)


export default CoreLayout
