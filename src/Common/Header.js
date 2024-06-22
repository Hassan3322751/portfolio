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