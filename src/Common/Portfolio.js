import React from 'react'
import images from '../Images/images';
import SkewImg from './SkewImg';
import Tab from './Tabs';
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Portfolio.css'

const Portfolio = () => {
    const tabsData = [
        {
            tabTitle: 'Web Development',
            images:['../Images/webDev1.png', '../Images/webDev2.png', '../Images/webDev3.png',
            '../Images/webDev4.png', 
            ],
            width: '35vw',
          },
          {
            tabTitle: 'App Development',
            images:['../Images/appDev1.png', '../Images/appDev2.png', '../Images/appDev3.png',
            '../Images/appDev4.png'
            ],
            width: '35vw',
          },
          {
            tabTitle: 'UI/UX Design',
            images:['../Images/uixu1.png', '../Images/uixu2.png', '../Images/uixu3.png',
            '../Images/uixu4.png'
            ],
            width: '35vw',
          },
          {
            tabTitle: 'Devops Solutions',
            images:['../Images/devSol1.png', '../Images/devSol2.png', '../Images/devSol3.png',
            '../Images/devSol4.png'
            ],
            width: '35vw',
          },
      ];
  return (
    <React.Fragment>
         <div className="section1">
                <div className="sectionData">

                    <h1 style={{fontSize: '58px', width: '35vw'}}>
                        Portfolio
                    </h1>
                    <span style={{fontSize: '25px'}} className='d-flex mt-3 mb-1'>Our work performs as it sees</span>
                    <span style={{fontSize: '15px'}}>
                    We create beautiful, interesting, and responsive web and mobile applications
                    </span>

                    <div className="btnGroup">
                        <button className="btn1">Contact Us</button>
                    </div>
                </div>

                <SkewImg image={images.skewImg1}/>
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
                <span style={{fontSize: '25px'}} className='mt-3 mb-1'>
                    We <span className='red'>Construct</span> Ideas
                </span>
                <div className="btnGroup">
                    <button className="btn1" style={{width: '345px'}}>Let’s Talk About Your Project</button>
                </div>
            </div>

            <div>
                <img src='../Images/3bulbs.png' />
            </div>
        </div>
    </React.Fragment>
  )
}