import React from 'react'
import images from '../Images/images';
import SkewImg from './SkewImg';
import LazyLoad from 'react-lazy-load';
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Services.css'
import '../CSS/Responsive.css'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <React.Fragment>
        <div className="section1">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Services
                    </h1>
                    <span className='d-flex mt-3 mb-1 first_span'> What We Do?</span>
                    <span className='sec_span'>
                    With our top-notch IT services, you may create your own
                    success stories. See below for a list of our primary
                    areas of expertise.
                    </span>

                    <div className="btnGroup">
                        <button className="btn1">Free Quote</button>
                        <Link to='/contact'>
                            <button className="btn2">Contact Us</button>
                        </Link>
                    </div>
                </div>

                <SkewImg image={images.serviceSkew}/>
            </div>

        <div className="section1">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Our<span className='red'> Services</span>
                    </h1>
                    <span className='sec_span'>
                    All of your software development needs are met under one roof at SumizanWebs thanks to our top-notch technical expertise and proactive attitude.
                    With the appropriate mix of designers, developers, QA engineers, and marketers, we can provide the best for you.
                    </span>
                </div>
            </div>


        <div className="section1">
                <div className="sectionData">
                    <h1 style={{width: '35vw'}} className='first_span'>
                        <span className='red'>Web </span>Development
                    </h1>
                    <span className="sec_span">
                    At SumizanWebs, we've got you covered for all your software needs in one place. With top-notch technical skills and a can-do attitude, we're here to make your vision a reality. Our team includes experts in design, development, testing, and promotion, ensuring you get the best service possible.
                    </span>
                    <br/>
                    <img src={images.more} style={{marginTop: '2rem'}} />
                </div>
                <div>
                    <LazyLoad>
                        <img src={images.services1} className="services_img"/>
                    </LazyLoad>
                </div>
            </div>
        <div className="section1">
                <div className="sectionData">
                    <h1 style={{width: '35vw'}} className="first_span">
                        <span className='red'>App </span> Development
                    </h1>
                    <span className="sec_span">
                    We supercharge your company with versatile iOS and Android apps. From creating simple to intricate mobile applications, we've got you covered from start to finish: designing, building, launching, and promoting your app. Our team collaborates closely with you to bring your ideas to life, ensuring your project is a success.
                    </span>
                    <br/>
                    <img src={images.more} style={{marginTop: '2rem'}} />
                </div>
                <div>
                    <LazyLoad>
                        <img src={images.services2} className="services_img"/>
                    </LazyLoad>
                </div>
            </div>
        <div className="section1">
                <div className="sectionData">
                    <h1 style={{width: '35vw'}} className="first_span">
                        <span className='red'>UX/UI </span>Design
                    </h1>
                    <span className="sec_span">
                    At SumizanWebs Technology, we create attractive UI/UX designs that make it easy for users to navigate. Our designs combine good looks with practicality, making websites, apps, and computer programs better for people to use.
                    </span>
                    <br/>
                    <img src={images.more} style={{marginTop: '2rem'}} />
                </div>
                <div>
                    <LazyLoad>
                        <img src={images.services3} className="services_img"/>
                    </LazyLoad>
                </div>
            </div>

        <div className="section1">
                <div className="sectionData">
                    <h1 style={{width: '35vw'}} className="first_span">
                        <span className='red'>Devops </span> Solutions
                    </h1>
                    <span className="sec_span">
                    We specialize in providing cutting-edge DevOps solutions tailored to optimize your website's performance and reliability. Our team offers expertise in leveraging leading cloud platforms such as AWS, GCP, and Azure, along with advanced tools like Kubernetes and Terraform, to streamline your development pipelines and automate infrastructure management. With a focus on efficiency and scalability, we empower your business to deliver high-quality software faster and more reliably than ever before.
                    </span>
                    <br/>
                    <img src={images.more} style={{marginTop: '2rem'}} />
                </div>
                <div>
                    <LazyLoad>
                        <img src={images.services4} className="services_img"/>
                    </LazyLoad>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Services