import React from 'react'
import MenuItems from './MenuItems'

const SideBar = () => {
  return (
    <div className="h-full overflow-y-auto scrollbar-hide">
      <MenuItems />
    </div>
  );
};

export default SideBar;
