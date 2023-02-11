import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <h2> this is a header 2 test</h2>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {/* Here we are calling the renderPage method which will return a component  */}
      <h1> This is a test to see what shows on page</h1>
      <p> body tag to again test and see what is visible</p> 
       <Header />
      <Footer />

    </div>
  );
}