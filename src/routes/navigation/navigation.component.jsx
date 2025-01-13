// do this again as you seen this in previous step so no solution this time
// make sure to change sign-in link to now /auth



import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <div>

        <nav>

            <ul>
                <li>
                    <Link to="/home">Home</Link>
                    </li>

                    <li>
                    <Link to="/shop">Shop</Link>
                    </li>

                    <li>
                    <Link to="/auth">Auth</Link>
                    </li>


            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navigation;