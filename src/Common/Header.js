import React from 'react';
import Images from '../Images/images';
import '../CSS/Common.css';
import '../CSS/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <nav className='header'>
        <div className='brand'>
          <img src={Images.logo} alt='logo' className='logo' />
        </div>
        <div className='menu-btn d-md-none'>
          <button
            className='btn '
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasMenu'
            aria-controls='offcanvasMenu'
          >
            <img src={Images.hamburg} className='hamburg' />
          </button>
        </div>
        <ul className='d-none d-md-flex headLinks'>
        <li>
            <Link to='/' style={{ textDecoration: 'none'}} className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' style={{ textDecoration: 'none'}} className='link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/services' style={{ textDecoration: 'none'}} className='link'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/portfolio' style={{ textDecoration: 'none'}} className='link'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to='/contact' style={{ textDecoration: 'none'}} className='link'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='menu d-none d-md-flex'>
          <img src={Images.search} className='search' />
        </div>

        <div
          className='offcanvas offcanvas-end'
          tabIndex='-1'
          id='offcanvasMenu'
          aria-labelledby='offcanvasMenuLabel'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasMenuLabel'>
              Menu
            </h5>
            <button
              type='button'
              className='btn-close text-reset'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            >
              <img src={Images.hamburg} className='hamburg' />
            </button>
          </div>
          <div className='offcanvas-body'>
            <ul className='d-md-flex canvasLinks'>
                <li>
                    <Link to='/' style={{ textDecoration: 'none'}} className='link'>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' style={{ textDecoration: 'none'}} className='link'>
                    About
                    </Link>
                </li>
                <li>
                    <Link to='/services' style={{ textDecoration: 'none'}} className='link'>
                    Services
                    </Link>
                </li>
                <li>
                    <Link to='/portfolio' style={{ textDecoration: 'none'}} className='link'>
                    Portfolio
                    </Link>
                </li>
                <li>
                    <Link to='/contact' style={{ textDecoration: 'none'}} className='link'>
                    Contact
                    </Link>
                </li>
                </ul>
                <div className='menu'>
                <img src={Images.search} className='search' />
                </div>
                </div>
        </div>
      </nav>
    </React.Fragment>
     );
    };
    
    export default Header;

// import React from 'react';
// import Images from '../Images/images';
// import '../CSS/Common.css';
// import '../CSS/Header.css';

// const Header = () => {
//   return (
//     <React.Fragment>
//       <nav className='header'>
//         <div className='brand'>
//           <img src={Images.logo} alt='logo' className='logo' />
//         </div>
//         <div className='menu-btn d-md-none'>
//           <button
//             className='btn btn-primary'
//             data-bs-toggle='offcanvas'
//             data-bs-target='#offcanvasMenu'
//             aria-controls='offcanvasMenu'
//           >
//             <img src={Images.hamburg} className='hamburg' />
//           </button>
//         </div>
//         <ul className='d-md-flex'>
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Portfolio</li>
//           <li>Contact</li>
//         </ul>
//         <div className='menu d-md-flex'>
//           <img src={Images.search} className='search' />
//         </div>

//         <div
//           className='offcanvas offcanvas-end'
//           tabIndex='-1'
//           id='offcanvasMenu'
//           aria-labelledby='offcanvasMenuLabel'
//         >
//           <div className='offcanvas-header'>
//             <h5 className='offcanvas-title' id='offcanvasMenuLabel'>
//               Menu
//             </h5>
//             <button
//               type='button'
//               className='btn-close text-reset'
//               data-bs-dismiss='offcanvas'
//               aria-label='Close'
//             >
//               <img src={Images.hamburg} className='hamburg' />
//             </button>
//           </div>
//           <div className='offcanvas-body'>
//             <ul>
//               <li>Home</li>
//               <li>About</li>
//               <li>Services</li>
//               <li>Portfolio</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </React.Fragment>
//   );
// };

// export default Header;

// import React from 'react';
// import Images from '../Images/images'
// import '../CSS/Common.css'
// import '../CSS/Header.css'

// const Header = () => {
//   return (
//     <React.Fragment>
//         <nav className='header'>
//             <div className='brand'>
//                 <img src={Images.logo} alt='logo' className='logo' />
//                 {/* <span className='webName'><span className='red'>sumizan</span>webs</span> */}
//             </div>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Services</li>
//                 <li>Portfolio</li>
//                 <li>Contact</li>
//             </ul>
//             <div className='menu'>
//                 <img src={Images.search} className='search'/>
//                 <img src={Images.hamburg} className='hamburg'/>
//             </div>
//         </nav>
//     </React.Fragment>
//   )
// }

// export default Header