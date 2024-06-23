// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function Header() {
//   return (
//     <>
//       {['md'].map((expand) => (
//         <Navbar key={expand} expand={expand} variant='dark' className="bg-body-tertiary mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">
//                 <img src='../Images/Logo.png'/>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1" className='text-light'>Home</Nav.Link>
//                   <Nav.Link href="#action2" className='text-light'>Link</Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default Header;


import React from 'react';
import Images from '../Images/images'
import '../CSS/Common.css'
import '../CSS/Header.css'

const Header = () => {
  return (
    <React.Fragment>
        <nav className='header'>
            <div className='brand'>
                <img src={Images.logo} alt='logo' className='logo' />
                {/* <span className='webName'><span className='red'>sumizan</span>webs</span> */}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='menu'>
                <img src={Images.search} className='search'/>
                <img src={Images.hamburg} className='hamburg'/>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Header