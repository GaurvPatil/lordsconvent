import React from 'react'

import HeroBanner from "../components/homeC/HeroBanner"
import CardsSection from '../components/homeC/CardsSection'
import SilentFeatures from '../components/homeC/SilentFeatures'
import Icons from '../components/homeC/Icons'
import Footer from '../components/layout/Footer'

export const Home = () => {
  return (
   <>
   
   <HeroBanner />
   <CardsSection />
    <SilentFeatures />
    <Icons />
    <Footer />
   </>
  )
}
