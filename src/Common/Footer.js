import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Footer.css';
import images from '../Images/images';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer p-0 ml-0" id='footerDiv'>
        <div className="footerCard1 py-5">
          <img src={images.logo} alt="SumizanWebs Logo" className="img-fluid mb-4" />
          <p className="text-white font-size-18">
            SumizanWebs excels in software development and data analytics, driving digital transformation with innovative solutions across diverse industries worldwide.
          </p>
          <p className="text-white font-size-18">
            Have a game-changing app idea but don't know where to begin? We're the app alchemists at SumizanWebs. We turn your vision into cutting-edge mobile apps that will take the world by storm.  Let's brainstorm and build something amazing together!
          </p>
        </div>

        <div className="footerCard2 py-5">
          <Container style={{background: 'transparent'}}>
            <Row className="justify-content-center">
              <Col className="footer_col">
                <h3 className="text-white font-size-24 bg_red">Quick Links</h3>
                <ul className="list-unstyled bg_red">
                  <li><Link href="#" className="text-white bg_red">Home</Link></li>
                  <li><Link href="#" className="text-white bg_red">How It Works</Link></li>
                  <li><Link href="#" className="text-white bg_red">Features</Link></li>
                  <li><Link href="#" className="text-white bg_red">About Us</Link></li>
                  <li><Link href="#" className="text-white bg_red">Contact</Link></li>
                </ul>
              </Col>
              <Col className="footer_col">
                <h3 className="text-white font-size-24 bg_red">Quick Links</h3>
                <ul className="list-unstyled bg_red">
                <li><Link href="#" className="text-white bg_red">Home</Link></li>
                  <li><Link href="#" className="text-white bg_red">How It Works</Link></li>
                  <li><Link href="#" className="text-white bg_red">Features</Link></li>
                  <li><Link href="#" className="text-white bg_red">About Us</Link></li>
                  <li><Link href="#" className="text-white bg_red">Contact</Link></li>
                </ul>
              </Col>
              <Col className='footer_col'>
                <h3 className="text-white font-size-24 footer_col">Quick Links</h3>
                <ul className="list-unstyled bg_red">
                <li><Link href="#" className="text-white bg_red">Home</Link></li>
                  <li><Link href="#" className="text-white bg_red">How It Works</Link></li>
                  <li><Link href="#" className="text-white bg_red">Features</Link></li>
                  <li><Link href="#" className="text-white bg_red">About Us</Link></li>
                  <li><Link href="#" className="text-white bg_red">Contact</Link></li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="text-center py-3 footer_copyright" style={{background: 'transparent'}}>
            &copy; {new Date().getFullYear()} Portfolio
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;