import React, { Component } from 'react'
import HelperForm from '../containers/HelperForm'
import 'bootstrap/dist/css/bootstrap.css'

class HomePage extends Component {

  render() {
    return (
      <div style={{marginTop: 100}}>
        <div className="row">
          <div className="col-md-10">
            <h1 style={{textAlign: 'center'}}>Tư vấn tuyển sinh Đại Học, Cao Đẳng</h1>
            <HelperForm />
          </div>
          <div className="col-md-1" >
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage
