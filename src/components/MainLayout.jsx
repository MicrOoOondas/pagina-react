import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ConfirmationModal from './ConfirmationModal';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ConfirmationModal />
    </>
  );
}

export default MainLayout;