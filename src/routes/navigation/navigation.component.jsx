import { Fragment } from 'react';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                {/* show logo it is in assets/crown.svg and uspe click krke home page pe jana chahiye hai */}

                <div className='nav-links-container'>
                    {/* yha pe shop page pe jane ke liye link
                   
                    yha pe sign in page pe jane ke liye link */}

                </div>
            </div>
            {/* implement outlet here, go on react router dom documentation and read about this from here and implement it, it is also related to way we done routing on App.js */}
        </Fragment>
    );
};

export default Navigation;



































// Solution - 😡 ye to hona chahiye tha appse, per koi baat nhi 😊
// <Fragment>
//             <div className='navigation'>
//                 <Link className='logo-container' to='/'>
//                     <CrwnLogo className='logo' />
//                 </Link>
//                 <div className='nav-links-container'>
//                     <Link className='nav-link' to='/shop'>
//                         SHOP
//                     </Link>
//                     <Link className='nav-link' to='/sign-in'>
//                         SIGN IN
//                     </Link>
//                 </div>
//             </div>
//             This Outlet is really imp
//             <Outlet />
//         </Fragment>