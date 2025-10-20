import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ConfirmationModal from './ConfirmationModal'; // Import the global modal

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ConfirmationModal /> {/* Render the global modal here */}
    </>
  );
}

export default MainLayout;