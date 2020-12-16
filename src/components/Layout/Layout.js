import React, { useState } from 'react';
import Toolbar from './../Toolbar/Toolbar';
import SideDrawer from './../SideDrawer/SideDrawer'

const Layout = (props) => {
  const [showSd,setShowSd] = useState(false)

  return (
    <div>
      <Toolbar showSD={() => setShowSd(true)} />
      <SideDrawer display={showSd} closeSD={() => setShowSd(false)}/>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
