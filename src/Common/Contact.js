import React from 'react'
import images from '../Images/images';
import SkewImg from './SkewImg';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Contact.css'
import '../CSS/Responsive.css'

const Contact = () => {
  return (
    <React.Fragment>
        <div className="section1">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw', marginTop: '0px'}} className="m-0">
                        <span className="red">Contact </span>Us
                    </h1>
                    <span className='first_span'>Our work performs as it sees</span>
                    <br/>
                    <span className='sec_span'>
                    We create beautiful, interesting, and responsive web and mobile applications
                    </span>

                    <div className="btnGroup">
                        <button className="btn1">Contact Us</button>
                    </div>
                </div>

                {/* <div className="sectionGraphics"> */}
                    <SkewImg image={images.skewImg1}/>
                {/* </div>   */}
            </div>

            <Form className='contactForm mt-5'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="First Name" className='field'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Last Name" className='field' />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control placeholder="Email" className='field' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder='Messaeg' rows={3} className='field textArea'/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div className="section1 mt-5">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', marginTop: '0px'}} className="m-0">
                    Rescue Your <span className="red">Company’s Growth!</span>
                    </h1>

                    <span className='sec_span'>
                        Let us know about your business plans on an introductory call, and we’ll lead the matching process.
                    </span>

                    <div className="btnGroup">
                        <button className="btn1">Hire A Pro</button>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Contact