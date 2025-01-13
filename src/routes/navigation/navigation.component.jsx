import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

// The component uses useContext to access the cart context
// toggleIsCartOpen is a handler that flips the current cart open state
// The shopping bag icon should be imported as a React component using the ReactComponent import syntax
// The item count is currently hardcoded to 0 (we'll update this later when we add cart items functionality)
// The component is styled to position the count inside the shopping bag icon
// Make sure the SVG file path is correct in your project structure
// Expected Behavior:
// Clicking the cart icon should toggle the cart dropdown
// The icon should be visible in the navigation bar
// The icon should be properly styled with the shopping bag SVG
// The count should appear centered at the bottom of the icon

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;