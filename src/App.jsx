import React from 'react'
import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import './App.css'
import LandingPage from '../src/Pages/LandingPage'
import Auth from '../src/Pages/Auth'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={'/auth'} element={<Auth />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
