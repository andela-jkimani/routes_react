import React, {Component} from 'react';

class Main extends React.Component {
  render (){
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Scotch Cars</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">About<span className="sr-only">(current)</span></a></li>
                <li><a href="#">Cars</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='container'>
          {/* Mount child routes */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
