import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
        <div className='footer'>
            <div className='footerCard1'>
                <img src={'../Images/Logo.png'} />
                <span>
                SumizanWebs excels in software development and data analytics, driving digital transformation with innovative solutions across diverse industries worldwide.
                </span>
                <br/>
                <span>
                Have a game-changing app idea but don't know where to begin? We're the app alchemists at SumizanWebs. We turn your vision into cutting-edge mobile apps that will take the world by storm.  Let's brainstorm and build something amazing together!
                </span>
            </div>

            <div className='footerCard2'>
                <Row>
                <Col>
                    <h3>Quick Links</h3>
                    <div className="d-flex align-items-center mt-5">
                    <ul className="list-unstyled">
                        <li><a href="#" className='text-white'>Home</a></li>
                        <li><a href="#" className='text-white'>How It Works</a></li>
                        <li><a href="#" className='text-white'>Features</a></li>
                        <li><a href="#" className='text-white'>About Us</a></li>
                        <li><a href="#" className='text-white'>Contact</a></li>
                    </ul>
                    </div>
                </Col>
                <Col>
                    <h3>Quick Links</h3>
                    <div className="d-flex align-items-center mt-5">
                    <ul className="list-unstyled">
                        <li><a href="#" className='text-white'>Home</a></li>
                        <li><a href="#" className='text-white'>How It Works</a></li>
                        <li><a href="#" className='text-white'>Features</a></li>
                        <li><a href="#" className='text-white'>About Us</a></li>
                        <li><a href="#" className='text-white'>Contact</a></li>
                    </ul>
                    </div>
                </Col>
                <Col>
                    <h3>Quick Links</h3>
                    <div className="d-flex align-items-center mt-5">
                    <ul className="list-unstyled">
                        <li><a href="#" className='text-white'>Home</a></li>
                        <li><a href="#" className='text-white'>How It Works</a></li>
                        <li><a href="#" className='text-white'>Features</a></li>
                        <li><a href="#" className='text-white'>About Us</a></li>
                        <li><a href="#" className='text-white'>Contact</a></li>
                    </ul>
                    </div>
                </Col>
                </Row>
                <div className="text-center py-3">
                    &copy; {new Date().getFullYear()} Your Social Boost
                </div>
            </div>
            </div>
            {/* <div className='footerCard2'>
                <div className='footerSection1'>
                <div className='footerLinks1'>
                <sapn className='footerHeading'>Get In Touch</sapn>
                </div>
                <div className='footerLinks2'>
                <span className='footerHeading'>Quick Links</span>
                </div>
                <div className='footerLinks3'>
                <span className='footerHeading'>Popular Links</span>
                    </div>
                </div>
                <div className='footerSection2'>

                </div>
            </div> */}
    </React.Fragment>
  )
}

export default Footer