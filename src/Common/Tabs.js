import React, { useState } from 'react';
import images from '../Images/images';
import '../CSS/Tabs.css';
import '../CSS/Responsive.css'
import LazyLoad from 'react-lazy-load';

const Tab = ( {tabs} ) => {
    const {constIdea, tabsData} = tabs;
    const [activeTab, setActiveTab] = useState(0);
    console.log(tabsData[activeTab].images)

    const handleTabChange = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div className="tab-container">
        <div className="tab-buttons">
          {tabsData.map((tab, index) => (
            <button
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabChange(index)}
            >
                {
                  tab.tabTitle
                }
            </button>
          ))}
        </div>

        {constIdea && <div className="tabconstIdea">{constIdea()}</div>}
        
        <div className="tab-content">
            {tabsData[activeTab].categories.map((category, index) => (
              <span style={{fontSize: `${tabsData[activeTab].width}`, marginRight: '2rem'}}>{category}</span>
              // <LazyLoad>
              //   <img key={index} src={images[image]} alt={tabsData[activeTab].tabTitle} style={{width: `${tabsData[activeTab].width}`}}/>
              // </LazyLoad>
            ))}
      </div>
      </div>
    );
};

export default Tab;