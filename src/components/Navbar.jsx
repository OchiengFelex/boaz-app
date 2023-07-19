    import React from 'react'
    import './Navbar.css'
    import { Link } from 'react-router-dom'
    
    function Navbar() {
      return (
        <div className='navbar'>

            <div className="logo">
                <h2>LOGO</h2>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <Link to='/'><a href='#'>  Home  </a> </Link>
                        </li>

                    <li>
                        <Link to='/about'><a href='#'>  About  </a> </Link>
                    </li>

                </ul>
            </div>

        </div>
      )
    }
    
    export default Navbar