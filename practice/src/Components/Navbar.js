import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
    {/* code of my navbar from bootstrap */}

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
         
      </ul>
      <div className= {`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      
    </div>
  </div>
</nav>

    </>
  )
}

// prop types
// i) named prop
// restricting props to be an string
Navbar.propTypes = {title: PropTypes.string.isRequired, 
                    aboutText: PropTypes.string
}
// PropTypes.string means you can only pass string to this prop
// Proptype.string.isRequired meand it is mandatory to assign some value to this prop(here in our case it is necessary to put string)

//ii) default prop

// Navbar.defaultProps = {
//     title:'Home',
//     aoutText:'Contact'
// };