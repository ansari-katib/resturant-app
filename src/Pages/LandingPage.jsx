import React from 'react'
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import Carousal from '../Components/LandingPageComponents/Carousal';
import Filter_Content from '../Components/LandingPageComponents/Filter_Content';
import ResturantsCards from '../Components/LandingPageComponents/ResturantsCards';
import FAQ from '../Components/LandingPageComponents/FAQ';
import { Review } from '../Components/LandingPageComponents/Review';
import CustomerReview from '../Components/LandingPageComponents/CustomerReview';
import { AnimatedTooltipPreview } from '../Components/LandingPageComponents/Tooltip';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <AnimatedTooltipPreview />
      {/* <SearchResturant /> */}
      <Filter_Content />
      <ResturantsCards />
      <Review />
      <CustomerReview />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandingPage
