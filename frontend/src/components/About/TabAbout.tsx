import React from 'react';
const TabAbout = ({ active, selectTab, children }: { active: boolean; selectTab: () => void; children: React.ReactNode }) => {
  const buttonClasses = active ? 'text-white border-b-2 border-primary-500 pb-1' : 'text-[#adb7be]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 xl:mr-12 lg:mr-8 md:mr-6 sm:mr-4 font-semibold hover:text-white pt-2 ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabAbout;
