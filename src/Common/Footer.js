import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Footer.css';
import images from '../Images/images';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer p-0">
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
          {/* <Container style={{background: 'transparent'}}> */}
            <Row className="justify-content-center">
              <Col xs={12} md={4} lg={4} className="mb-4 mb-md-0">
                <h3 className="text-white font-size-24">Quick Links</h3>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">How It Works</a></li>
                  <li><a href="#" className="text-white">Features</a></li>
                  <li><a href="#" className="text-white">About Us</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                </ul>
              </Col>
              <Col xs={12} md={4} lg={4} className="mb-4 mb-md-0">
                <h3 className="text-white font-size-24">Quick Links</h3>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">How It Works</a></li>
                  <li><a href="#" className="text-white">Features</a></li>
                  <li><a href="#" className="text-white">About Us</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                </ul>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <h3 className="text-white font-size-24">Quick Links</h3>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">How It Works</a></li>
                  <li><a href="#" className="text-white">Features</a></li>
                  <li><a href="#" className="text-white">About Us</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                </ul>
              </Col>
            </Row>
          {/* </Container> */}
          <div className="text-center py-3 footer_copyright" style={{background: 'transparent'}}>
            &copy; {new Date().getFullYear()} Your Social Boost
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;