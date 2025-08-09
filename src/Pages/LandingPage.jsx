import React from 'react'
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import Carousal from '../Components/LandingPageComponents/Carousal';
import Filter_Content from '../Components/LandingPageComponents/Filter_Content';
import ResturantsCards from '../Components/LandingPageComponents/ResturantsCards';
// import SearchResturant from '../Components/LandingPageComponents/SearchResturant';
import ContactUsForm from '../Components/LandingPageComponents/ContactUsForm';
import FAQ from '../Components/LandingPageComponents/FAQ';
import AboutUs from '../Components/LandingPageComponents/AboutUs';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      {/* <SearchResturant /> */}
      <Filter_Content />
      <ResturantsCards />
      <FAQ />
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <AboutUs />
        <ContactUsForm />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
