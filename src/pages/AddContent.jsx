

import tabsData from '../data/tabsData';
import { useState } from 'react';
import Addexpense from '../components/Addexpense';
import Addreminder from '../components/Addreminder';
import Addincome from '../components/Addincome'
const AddContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabs = (index) => {
    setActiveTab(index);
  }

  return (
    <main className="min-h-screen flex p-5 items-center flex-col gap-10 text-white mb-[5rem] ">
      <div className="flex flex-row gap-8 flex-wrap items-center justify-center bg-[#00000029] w-full fixed top-0 p-5  z-20 ">
      {tabsData.map((tab, index) => (
          <button
          key={tab.id}
          name={tab.name}
          onClick={() => handleTabs(index)}
          className={
            activeTab === index
              ? 'bg-custom-navy active text-white p-4 rounded-md text-lg button-tab  '
              : 'text-white p-4 rounded-md text-lg button-tab '
          }
        >
          {tab.title}
        </button>
      ))}
  
      </div>
      {activeTab === 0 ? (
        <div id="content-1" className="w-full tab-content mt-[8rem]">
            <Addexpense/>
        </div>
      ) : activeTab === 1 ? (
        <div id="content-2" className="w-full tab-content mt-[8rem]">
         <Addreminder/>
        </div>
      )  : activeTab == 2 ? (
        <div id="content-3" className="w-full tab-content mt-[8rem]">
          <Addincome/>
        </div>
      ) : (
        ''
      )}
    </main>
  );
};

export default AddContent;
