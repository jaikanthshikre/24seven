import React from 'react'
import Banner from './sections/Banner'
import BettingSiteSection from './sections/Hero'
import MahavirBookFAQ from './sections/Faq'
import Testimonial from './sections/Testimonial'


import BetChampShowcase from './sections/Herotwo'

const page = () => {
  return (
    <>
    <Banner/>
    <BetChampShowcase/>
    <BettingSiteSection/>
    <MahavirBookFAQ/>
    <Testimonial/>
    </>
  )
}

export default page