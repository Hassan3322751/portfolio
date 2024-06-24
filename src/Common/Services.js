import React from 'react'
import images from '../Images/images';
import SkewImg from './SkewImg';
import LazyLoad from 'react-lazy-load';
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Services.css'
import '../CSS/Responsive.css'

const Services = () => {
  return (
    <React.Fragment>
        <div className="section1">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Services
                    </h1>
                    <span style={{fontSize: '2.5rem'}} className='d-flex mt-3 mb-1'> What We Do?</span>
                    <span style={{fontSize: '1.5rem'}}>
                    With our top-notch IT services, you may create your own
                    success stories. See below for a list of our primary
                    areas of expertise.
                    </span>

                    <div className="btnGroup">
                        <button className="btn1">Free Quote</button>
                        <button className="btn2">Contact Us</button>
                    </div>
                </div>

                <SkewImg image={images.skewImg1}/>
            </div>

        <div className="section1">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Our<span className='red'> Services</span>
                    </h1>
                    <span style={{fontSize: '1.5rem'}}>
                    All of your software development needs are met under one roof at SumizanWebs thanks to our top-notch technical expertise and proactive attitude.
                    With the appropriate mix of designers, developers, QA engineers, and marketers, we can provide the best for you.
                    </span>
                </div>
            </div>


        <div className="section1">
                <div className="sectionData">
                    <h1 style={{fontSize: '2.8rem', width: '35vw'}}>
                        <span className='red'>Web </span>Development
                    </h1>
                    <span style={{fontSize: '1.5rem'}}>
                    At SumizanWebs, we've got you covered for all your software needs in one place. With top-notch technical skills and a can-do attitude, we're here to make your vision a reality. Our team includes experts in design, development, testing, and promotion, ensuring you get the best service possible.
                    </span>
                    <br/>
                    <img src='../Images/more.png' />
                </div>
                <div>
                    <LazyLoad>
                        <img src='../Images/services1.png'/>
                    </LazyLoad>
                </div>
            </div>
        <div className="section1">
                <div className="sectionData">
                    <h1 style={{fontSize: '2.8rem', width: '35vw'}}>
                        <span className='red'>App </span> Development
                    </h1>
                    <span style={{fontSize: '1.5rem'}}>
                    We supercharge your company with versatile iOS and Android apps. From creating simple to intricate mobile applications, we've got you covered from start to finish: designing, building, launching, and promoting your app. Our team collaborates closely with you to bring your ideas to life, ensuring your project is a success.
                    </span>
                    <br/>
                    <img src='../Images/more.png' />
                </div>
                <div>
                    <LazyLoad>
                        <img src='../Images/services2.png'/>
                    </LazyLoad>
                </div>
            </div>
        <div className="section1">
                <div className="sectionData">
                    <h1 style={{fontSize: '2.8rem', width: '35vw'}}>
                        <span className='red'>UX/UI </span>Design
                    </h1>
                    <span style={{fontSize: '1.5rem'}}>
                    At SumizanWebs Technology, we create attractive UI/UX designs that make it easy for users to navigate. Our designs combine good looks with practicality, making websites, apps, and computer programs better for people to use.
                    </span>
                    <br/>
                    <img src='../Images/more.png' />
                </div>
                <div>
                    <LazyLoad>
                        <img src='../Images/services3.png'/>
                    </LazyLoad>
                </div>
            </div>

        <div className="section1">
                <div className="sectionData">
                    <h1 style={{fontSize: '2.8rem', width: '35vw'}}>
                        <span className='red'>Devops </span> Solutions
                    </h1>
                    <span style={{fontSize: '1.5rem'}}>
                    We specialize in providing cutting-edge DevOps solutions tailored to optimize your website's performance and reliability. Our team offers expertise in leveraging leading cloud platforms such as AWS, GCP, and Azure, along with advanced tools like Kubernetes and Terraform, to streamline your development pipelines and automate infrastructure management. With a focus on efficiency and scalability, we empower your business to deliver high-quality software faster and more reliably than ever before.
                    </span>
                    <br/>
                    <img src='../Images/more.png' />
                </div>
                <div>
                    <LazyLoad>
                        <img src='../Images/services4.png'/>
                    </LazyLoad>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Services