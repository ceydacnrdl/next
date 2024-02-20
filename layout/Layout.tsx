import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className=' mx-auto'>{children}</div>;
};

export default Layout;
