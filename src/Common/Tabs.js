import React, { useState } from 'react';
import '../CSS/Tabs.css';

const Tab = ( {tabs} ) => {
    const {constIdea, tabsData} = tabs;
    const [activeTab, setActiveTab] = useState(0);

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
            {tabsData[activeTab].images.map((image, index) => (
            <img key={index} src={image} alt={tabsData[activeTab].tabTitle} style={{width: `${tabsData[activeTab].width}`}}/>
            ))}
      </div>
      </div>
    );
};

export default Tab;