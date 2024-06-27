import React from "react";
import SkewImg from "./Common/SkewImg";
import images from "./Images/images";
import Tab from "../src/Common/Tabs"
import '../src/CSS/Main.css'
import '../src/CSS/Common.css'
import '../src/CSS/Responsive.css'
import { Link } from "react-router-dom";


const MainPage = ()=>{
    const tabsData = [
        {
            tabTitle: 'Frontend',
            images:['../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png',
            '../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png',
            '../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png',  
            ],
            width: '13rem',
          },
          {
            tabTitle: 'Backend',
            images:['../Images/Logo.png', '../Images/Logo.png', '../Images/Logo.png'],
            width: '13rem',
          },
          {
            tabTitle: 'Mobile',
            images:['../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png'],
            width: '13rem',
          },
          {
            tabTitle: 'Database',
            images:['../Images/Logo.png', '../Images/Logo.png', '../Images/Logo.png'],
            width: '13rem',
          },
          {
            tabTitle: 'Full Stack',
            images:['../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png'],
            width: '13rem',
          },
      ];
    return(
        <React.Fragment>
            <div className="section1">
                <div className="sectionData">
                    <span className="first_span">We Design and improve</span>

                    <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                        Smart <span className="red">Web Solution </span>and  
                        <span className="red"> Build</span> Them
                    </h1>

                    <span className="sec_span">
                        Our site design, development, and marketing services are top-notch.
                    </span>

                    <div className="btnGroup">
                        <Link to='/portfolio'>
                            <button className="btn1">Portfolio</button>
                        </Link>
                        <Link to='/contact'>
                            <button className="btn2">Contact Us</button>
                        </Link>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.skewImg1}/>
                </div>  
            </div>

            <div className="section1">
                <div className="sectionData">
                    <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                        <span className="red">Digitalize </span>your business
                    </h1>

                    <span style={{display: 'flex'}} className="sec_span">
                        With agility, devotion, and high-quality IT services, we support businesses by offering custom and specialized business solutions.
                    </span>

                    <div className="btnGroup">
                        <Link to='/about'>
                            <button className="btn1">Who we are ?</button>
                        </Link>
                        <Link to='/portfolio'>
                            <button className="btn2">Portfolio</button>
                        </Link>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.skewImg2}/>
                </div>
            </div>

            <div className="section1">
                <div className="sectionData">
                    <span className="first_span">Our Services</span>

                    <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                        <span className="red">Devops </span>Technology
                        for Your  
                        <span className="red"> Successful</span> Business
                    </h1>

                    <span className="sec_span">
                        Our site design, development, and marketing services are top-notch.
                    </span>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.skewImg3}/>
                </div>
            </div>

            <div className="services">
                <div className="cus_card">
                    <img src={images.browser} className="img"></img>
                    <span className="cardHeading red">Web Development</span>
                    <span className="cardText">
                        Empowering businesses with custom web solutions, tailored to optimize processes across all platforms .
                    </span>
                </div>
                <div className="cus_card">
                    <img src={images.uiux} className="img"></img>
                    <span className="cardHeading red">UX/UI Design</span>
                    <span className="cardText">
                        Empowering businesses with custom web solutions, tailored to optimize processes across all platforms .
                    </span>
                </div>
                <div className="cus_card">
                    <img src={images.appDev} className="img"></img>
                    <span className="cardHeading red">App Development</span>
                    <span className="cardText">
                        Empowering businesses with custom web solutions, tailored to optimize processes across all platforms .
                    </span>
                </div>
                <div className="cus_card">
                    <img src={images.devSol} className="img"></img>
                    <span className="cardHeading red">Devops Solution</span>
                    <span className="cardText">
                        Empowering businesses with custom web solutions, tailored to optimize processes across all platforms .
                    </span>
                </div>
            </div>

            <div className="sectionData" style={{marginTop:'50px'}}>
                <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                    Expertise
                </h1>

                <span className="sec_span">
                    We use IT expertise to develop cutting-edge software solutions.
                </span>
            </div>

            <div className="section1">
                <div className="sectionData">
                    <span className="first_span">Design & Development</span>

                    <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                        Custom<span className="red"> App </span>Solutions
                    </h1>

                    <span className="sec_span">
                    We provide high-fidelity web software solutions that are tailored to your
                    particular business processes. Using the most up-to-date SDLC tools and
                    cross-platform technology, we develop, modernize, optimize, and grow your
                    company website.
                    </span>

                    <div className="list">
                        <ul>
                            <li>UI/UX Design & Prototyping</li>
                            <li>eCommerce Solution</li>
                            <li>Native & Hybrid Apps</li>
                            <li>MVP, PWA & CMS</li>
                            <li>On-Demand Apps</li>
                            <li>APIs Development</li>
                            <li>Quality Assurance</li>
                            <li>Deployment</li>
                        </ul>
                    </div>
                    <div className="btnGroup">
                        <button className="btn1">More Details</button>
                    </div>
                </div>
                        <div className="sectionGraphics">
                            <SkewImg image={images.skewImg3}/>
                        </div>
            </div>

            <div className="section1">
                <div className="sectionData">
                    <span className="first_span">Web Design & Development</span>

                    <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                        Custom<span className="red"> Website </span>Solutions
                    </h1>

                    <span className="sec_span">
                    We provide high-fidelity web software solutions that are tailored to your
                    particular business processes. Using the most up-to-date SDLC tools and
                    cross-platform technology, we develop, modernize, optimize, and grow your
                    company website.
                    </span>
                    
                    <div className="list">
                        <ul>
                            <li>UI/UX Design & Prototyping</li>
                            <li>eCommerce Solution (Top Rated)</li>
                            <li>Business Portfolios and Websites</li>
                            <li>Custom Web Apps</li>
                            <li>On-Demand Apps</li>
                            <li>Security Analysis and Monitoring</li>
                            <li>Continuous Support</li>
                        </ul>
                    </div>
                    <div className="btnGroup">
                        <button className="btn1" style={{marginTop: '30px'}}>More Details</button>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.skewImg3}/>
                </div>
            </div>

            <div className="section1">
                <div className="sectionData">
                    <div className="coreTechs">
                        <div className="data">
                            <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                                Custom<span className="red"> Website </span>Solutions
                            </h1>
                            <span className="sec_span">
                                SumizanWebs uses a variety of contemporary technologies
                                for efficient, scalable, and long-lasting customized
                                software development.
                            </span>
                        </div>

                        <img src={images.simpleLogo}></img>
                    </div>

                    <div className="servicesTabs">
                        <Tab tabs={{tabsData}} />      
                    </div>
                </div>
            </div>

            <div className="sectionData">
                <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                    The<span className="red"> Ideal Engagement Model </span>Should Be
                    <span className="red"> Chosen</span>
                </h1>
                <span className="sec_span">
                    Based on the project needs and your company specifications
                </span>

                <div className="services">
                    <div className="cus_card lg_cus_card" style={{padding: '30px'}}>
                        <img src={images.tickSearch} className="img" style={{width: '12.3rem', height: '12.3rem'}} />
                        <span className="cardHeading red">Web Development</span>
                        <span className="cardText">
                            By choosing, employing, and managing highly qualified software developers and IT specialists on a long-term basis, you may create your own team. In order to achieve agile software development, this approach is meant to assist you in locating and enlisting specialized personnel who possess the necessary skills and cultural fit.
                        </span>
                        <div className="btnGroup">
                            <button className="btn1" style={{marginTop: '40px'}}>More Details</button>
                        </div>
                    </div>
                    <div className="cus_card lg_cus_card" style={{padding: '30px'}}>
                        <img src={images.coinsBag} className="img" style={{width: '12.3rem', height: '12.3rem'}} />
                        <span className="cardHeading red">UX/UI Design</span>
                        <span className="cardText">
                            The greatest software development professionals are available to you through our project-based approach, which is often offered at a fixed fee. With the aid of this approach, a customer and our IT experts working on a particular project should be able to communicate effectively and quickly.
                        </span>
                        <div className="btnGroup">
                            <button className="btn2">More Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default MainPage