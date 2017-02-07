import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div className="container-fluid text-center corelay">
    <div className="row">
      <Header />
    </div>
    <div className="core-layout__viewport" id="children">
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}


export default CoreLayout;

  // <div className="container-fluid text-center corelay">
  //   <Header />
  //   <div className="container-fluid core-layout__viewport">
  //     <div className="row">
  //       <div className="col-xs-12 col-md-12 col-lg-12" id="children">
  //         {children}
  //       </div>
  //     </div>
  //   </div>
  // </div>
