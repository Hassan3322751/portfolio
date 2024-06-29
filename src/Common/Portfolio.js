import React from 'react'
import images from '../Images/images';
import SkewImg from './SkewImg';
import Tab from './Tabs';
import LazyLoad from 'react-lazy-load';
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Portfolio.css'
import '../CSS/Responsive.css'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const tabsData = [
        {
            tabTitle: 'Web Development',
            images:['webDev1', 'webDev2', 'webDev3',
            'webDev4', 
            ],
            width: '35vw',
          },
          {
            tabTitle: 'App Development',
            images:['appDev1', 'appDev2', 'appDev3',
            'appDev4'
            ],
            width: '35vw',
          },
          {
            tabTitle: 'UI/UX Design',
            images:['uiux1', 'uiux2', 'uiux3',
            'uiux4'
            ],
            width: '35vw',
          },
          {
            tabTitle: 'Devops Solutions',
            images:['devSol1', 'devSol2', 'devSol3',
            'devSol4'
            ],
            width: '35vw',
          },
      ];
  return (
    <React.Fragment>
         <div className="section1">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Portfolio
                    </h1>
                    <span className='d-flex mt-3 mb-1 first_span'>Our work performs as it sees</span>
                    <span className='sec_span'>
                    We create beautiful, interesting, and responsive web and mobile applications
                    </span>

                    <div className="btnGroup">
                      <Link to='/contact'>
                        <button className="btn1">Contact Us</button>
                      </Link>
                    </div>
                </div>

                <SkewImg image={images.portfolioSkew}/>
            </div>

            <div className="servicesTabs">
                <Tab tabs={{tabsData, constIdea}} />      
            </div>
    </React.Fragment>
  )
}

export default Portfolio

const constIdea = () => {
  return (
    <React.Fragment>
        <div className="section1 porfoIdeasSection">
            <div className="sectionData">
                <span style={{fontSize: '4rem'}} className='mt-3 mb-1'>
                    We <span className='red'>Construct</span> Ideas
                </span>
                <div className="btnGroup">
                  <Link to='/contact'>
                    <button className="btn1" style={{width: '34.5rem'}}>Let’s Talk About Your Project</button>
                  </Link>
                </div>
            </div>

            <div>
              <LazyLoad>
                <img src={images.bulbs} className='porfolio_bulbs_img' style={{width: '40rem', marginRight:'10rem'}}/>
              </LazyLoad>
            </div>
        </div>
    </React.Fragment>
  )
}