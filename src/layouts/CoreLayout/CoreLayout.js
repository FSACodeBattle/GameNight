import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className="container-fluid text-center corelay">
    <Header />
    <div className="container-fluid core-layout__viewport">
      <div className="row">
        <div className="col col-xs-12 col-md-10 col-md-offset-1">
          {children}
        </div>
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}


export default CoreLayout
