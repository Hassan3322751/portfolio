import React from "react";
import SkewImg from "./Common/SkewImg";
import images from "./Images/images";
import Tab from "../src/Common/Tabs"
import Footer from "./Common/Footer";
import '../src/CSS/Main.css'
import '../src/CSS/Common.css'


const MainPage = ()=>{
    const tabsData = [
        {
            tabTitle: 'Frontend',
            images:['../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png',
            '../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png',
            '../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png',  
            ],
            width: '100px',
          },
          {
            tabTitle: 'Backend',
            images:['../Images/Logo.png', '../Images/Logo.png', '../Images/Logo.png'],
            width: '100px',
          },
          {
            tabTitle: 'Mobile',
            images:['../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png'],
            width: '100px',
          },
          {
            tabTitle: 'Database',
            images:['../Images/Logo.png', '../Images/Logo.png', '../Images/Logo.png'],
            width: '100px',
          },
          {
            tabTitle: 'Full Stack',
            images:['../Images/simpleLogo.png', '../Images/simpleLogo.png', '../Images/simpleLogo.png'],
            width: '100px',
          },
      ];
    return(
        <React.Fragment>
            <div className="section1">
                <div className="sectionData">
                    <span style={{fontSize: '32px'}}>We Design and improve</span>

                    <h1 style={{fontSize: '58px', width: '35vw', marginTop: '0px'}} className="m-0">
                        Smart <span className="red">Web Solution </span>and  
                        <span className="red"> Build</span> Them
                    </h1>

                    <span style={{fontSize: '18px', marginTop: '46px'}}>
                        Our site design, development, and marketing services are top-notch.
                    </span>

                    <div className="btnGroup">
                        <button className="btn1">Portfolio</button>
                        <button className="btn2">Contact Us</button>
                    </div>
                </div>

                {/* <div className="sectionGraphics"> */}
                    <SkewImg image={images.skewImg1}/>
                {/* </div>   */}
            </div>

            <div className="section1">
                <div className="sectionData">
                    <h1 style={{fontSize: '58px', width: '35vw', marginTop: '0px'}} className="m-0">
                        <span className="red">Digitalize </span>your business
                    </h1>

                    <span style={{fontSize: '18px', marginTop: '46px', width: '35vw', display: 'flex'}}>
                        With agility, devotion, and high-quality IT services, we support businesses by offering custom and specialized business solutions.
                    </span>

                    <div className="btnGroup">
                        <button className="btn1">Who we are ?</button>
                        <button className="btn2">Portfolio</button>
                    </div>
                </div>

                {/* <div className="sectionGraphics"> */}
                    <SkewImg image={images.skewImg2}/>
                {/* </div> */}
            </div>

            <div className="section1">
                <div className="sectionData">
                    <span style={{fontSize: '32px'}}>Our Services</span>

                    <h1 style={{fontSize: '58px', width: '35vw', marginTop: '0px'}} className="m-0">
                        <span className="red">Devops </span>Technology
                        for Your  
                        <span className="red"> Successful</span> Business
                    </h1>

                    <span style={{fontSize: '18px', marginTop: '46px'}}>
                        Our site design, development, and marketing services are top-notch.
                    </span>
                </div>

                {/* <div className="sectionGraphics"> */}
                    <SkewImg image={images.skewImg3}/>
                {/* </div> */}
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
                <h1 style={{fontSize: '58px', width: '35vw', marginTop: '0px'}} className="m-0">
                    Expertise
                </h1>

                <span style={{fontSize: '18px', marginTop: '46px'}}>
                    We use IT expertise to develop cutting-edge software solutions.
                </span>
            </div>

            <div className="section1">
                <div className="sectionData">
                    <span style={{fontSize: '32px'}}>Design & Development</span>

                    <h1 style={{fontSize: '58px', width: '35vw', marginTop: '0px'}} className="m-0">
                        Custom<span className="red"> App </span>Solutions
                    </h1>

                    <span style={{fontSize: '18px', marginTop: '46px'}}>
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
                        <button className="btn1" style={{marginTop: '40px'}}>More Details</button>
                    </div>
                </div>

                {/* <div className="sectionGraphics"> */}
                    <SkewImg image={images.skewImg3}/>
                {/* </div> */}
            </div>

            <div className="section1">
                <div className="sectionData">
                    <span style={{fontSize: '32px'}}>Web Design & Development</span>

                    <h1 style={{fontSize: '58px', width: '35vw', marginTop: '0px'}} className="m-0">
                        Custom<span className="red"> Website </span>Solutions
                    </h1>

                    <span style={{fontSize: '18px', marginTop: '46px'}}>
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
                        <button className="btn1" style={{marginTop: '40px'}}>More Details</button>
                    </div>
                </div>

                {/* <div className="sectionGraphics"> */}
                    <SkewImg image={images.skewImg3}/>
                {/* </div> */}
            </div>

            <div className="section1">
                <div className="sectionData">
                    <div className="coreTechs">
                        <div className="data">
                            <h1 style={{fontSize: '58px', width: '35vw', marginTop: '0px'}} className="m-0">
                                Custom<span className="red"> Website </span>Solutions
                            </h1>
                            <span style={{fontSize: '18px', marginTop: '46px'}}>
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
                <h1 style={{fontSize: '58px', width: '43vw', marginTop: '0px'}} className="m-0">
                    The<span className="red"> Ideal Engagement Model </span>Should Be
                    <span className="red"> Chosen</span>
                </h1>
                <span style={{fontSize: '18px', marginTop: '46px'}}>
                    Based on the project needs and your company specifications
                </span>

                <div className="services">
                    <div className="cus_card" style={{width: '608px', height: '448px', padding: '40px'}}>
                        <img src={'../Images/tickSearch.png'} className="img" style={{width: '123px', height: '123px'}} />
                        <span className="cardHeading red">Web Development</span>
                        <span className="cardText">
                            By choosing, employing, and managing highly qualified software developers and IT specialists on a long-term basis, you may create your own team. In order to achieve agile software development, this approach is meant to assist you in locating and enlisting specialized personnel who possess the necessary skills and cultural fit.
                        </span>
                        <div className="btnGroup">
                            <button className="btn1" style={{marginTop: '40px'}}>More Details</button>
                        </div>
                    </div>
                    <div className="cus_card" style={{width: '608px', height: '448px', padding: '40px'}}>
                        <img src={'../Images/coinsBag.png'} className="img" style={{width: '123px', height: '123px'}} />
                        <span className="cardHeading red">UX/UI Design</span>
                        <span className="cardText">
                            The greatest software development professionals are available to you through our project-based approach, which is often offered at a fixed fee. With the aid of this approach, a customer and our IT experts working on a particular project should be able to communicate effectively and quickly.
                        </span>
                        <div className="btnGroup">
                            <button className="btn2" style={{marginTop: '40px'}}>More Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default MainPage