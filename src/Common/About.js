import React from 'react'
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/About.css'
import '../CSS/Responsive.css'

const About = () => {
  return (
    <React.Fragment>
        <div className="section1 m-0 mt-5">
                <div className="sectionData">
                    <h1 style={{fontSize: '5.8rem', width: '35vw', marginTop: '0px'}} className="m-0">
                        About<span className="red"> Us</span>
                    </h1>
                    <span className='about_first_span'>The Best SumizanWebs Technology with Five Years of Experience</span>
                    <br/>
                    <br/>
                    <span className='about_sec_span'>
                    At Sumizan Webs, we are the architects of technological innovation, crafting solutions that propel businesses into the digital age with seamless precision. Specializing in a diverse array of technical services, including software and app development, corporate-level IT support, Linux server management, graphics designing, web development, and e-commerce solutions, we are the cornerstone of your digital success. Our team comprises industry trailblazers, each equipped with a wealth of experience garnered from the forefront of tech giants such as Google, Yahoo, and beyond. With over a decade of hands-on expertise and a myriad of achievements under our belt, we stand poised to address your most intricate technological challenges. Whether you're a burgeoning startup or an established enterprise, we tailor our services to suit your unique needs, delivering cutting-edge solutions that redefine industry standards. With a steadfast commitment to excellence, innovation, and client satisfaction, we transcend conventional boundaries to transform your digital vision into reality. Partner with us today and embark on a journey of unparalleled technological prowess. Together, we'll navigate the digital landscape, empowering your business to thrive in an ever-evolving world.
                    </span>
                </div>
            </div>
                <div className='aboutList'>
                    <ul>
                        <li>Best in Industry</li>
                        <li>24/7 Support</li>
                        <li>Professional Staff</li>
                        <li>Fair Prices</li>
                        <li>Call to ask any question
                        <br/>
                        <span className='red'>+1 347-350-0868</span></li>
                    </ul>
                </div>

        <div className="section1 m-0 mt-5">
                <div className="sectionData">
                    <h1 style={{fontSize: '5.8rem', marginTop: '0px'}} className="m-0">
                        Rescue Your<span className="red"> Company's Growth</span>
                    </h1>
                    <span className='about_sec_span'>
                    Let us know about your business plans on an introductory call, and we’ll lead the matching process.
                    </span>

                    <div className="btnGroup mb-5">
                        <button className="btn1">Hire a pro</button>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default About