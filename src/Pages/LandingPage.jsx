import React from 'react'
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import Carousal from '../Components/LandingPageComponents/Carousal';
import Filter_Content from '../Components/LandingPageComponents/Filter_Content';
import ResturantsCards from '../Components/LandingPageComponents/ResturantsCards';
// import SearchResturant from '../Components/LandingPageComponents/SearchResturant';
import ContactUsForm from '../Components/LandingPageComponents/ContactUsForm';
import FAQ from '../Components/LandingPageComponents/FAQ';
import { Review } from '../Components/LandingPageComponents/Review';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      {/* <SearchResturant /> */}
      <Filter_Content />
      <ResturantsCards />
      <Review />
      <FAQ />
      <ContactUsForm />
      <Footer />
    </div>
  )
}

export default LandingPage
