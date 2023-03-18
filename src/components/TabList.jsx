import React, { useState } from 'react';
import '../styles/experience.css'


function TabList({tabs}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='tablist-container'>
      <div  className='tablist-labels'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <hr className='tablist-line'/>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}

export default TabList;
