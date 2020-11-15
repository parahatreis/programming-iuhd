import React from 'react';
// COMPONENTS
import Navbar from './Navbar'
import Header from './Header'
import Lectures from '../Lectures';
import Footer from './Footer'

const Home = () => {
   return (
      <>
      <div className="main-content">
         <div className="header">
            <Navbar />
            <Header />
         </div>
         <h1 className="title">Lectures</h1>
         <Lectures />
      </div>
      <Footer / >
      </>
   )
}

export default Home
