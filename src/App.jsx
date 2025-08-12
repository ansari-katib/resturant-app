import React from 'react'
import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import './App.css'
import LandingPage from '../src/Pages/LandingPage'
import Auth from '../src/Pages/Auth'
import ContactUsForm from './Components/LandingPageComponents/ContactUsForm'
import AboutUs from './Pages/AboutUs'
import BookYourSeat from './Pages/BookYourSeat'
import OrderFood from './Pages/OrderFood'
import ContactUs from './Pages/ContactUs'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={'/auth'} element={<Auth />} />
      <Route path={'/about'} element={<AboutUs />} />
      <Route path={'/reservation'} element={<BookYourSeat />} />
      <Route path={'/order-food'} element={<OrderFood />} />
      <Route path={'/contact'} element={<ContactUs />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
