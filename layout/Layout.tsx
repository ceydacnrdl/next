import React from 'react';
import Menu from 'components/menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className=' mx-auto'>{children}</div>;
};

export default Layout;
