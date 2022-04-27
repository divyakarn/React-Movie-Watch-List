import React from 'react';
import { connect } from 'react-redux';
import {Link,NavLink} from 'react-router-dom'

function Navigation(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Fun-App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink 
                    className="nav-link" 
                    // activeClassName="active"
                    aria-current="page" 
                    to="/search">Search WebSeries 
                    
                    </NavLink>
                    </li>
                      <li className="nav-item">
                      <NavLink 
                      className="nav-link position-relative" 
                      // activeClassName="active"
                      aria-current="page" 
                      to="/show">WebSeries Cart
                          <small className='rounded-circle bg-danger position-absolute d-flex justify-content-center align-items-center' style={{fontSize: '10px',width:"20px",height:"20px",top:"0",right:"-6%"}}>{props.series.length}</small>
                      </NavLink>
                      </li>
                <li className="nav-item">
                <NavLink 
                className="nav-link" 
                // activeClassName="active"
                aria-current="page" 
                to="/joke">Lame Jokes</NavLink>
                </li>
               
            </ul>
            </div>
        </div>
    </nav>
      
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    series:state.SeriesReducer.series,
  };
}

export default connect(mapStateToProps)(Navigation);
