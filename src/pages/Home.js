import React from 'react'
import Navbar from '../components/homeC/Nabar'
import HeroBanner from "../components/homeC/HeroBanner"
import CardsSection from '../components/homeC/CardsSection'
import SilentFeatures from '../components/homeC/SilentFeatures'
import Icons from '../components/homeC/Icons'

export const Home = () => {
  return (
   <>
   <Navbar />
   <HeroBanner />
   <CardsSection />
    <SilentFeatures />
    <Icons />
   </>
  )
}
