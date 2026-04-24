import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#363238', overflowX: 'hidden' }}>
      <Header />
      <main>
        {children || <Outlet />}
      </main>
      <Footer />
      <button className="back-to-top">↑</button>
    </div>
  );
};

export default Layout;
