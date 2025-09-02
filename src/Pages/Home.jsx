import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { PopularTops } from '../Components/Popular/PopularTops'
import { PopularPants } from '../Components/Popular/PopularPants'
import { PopularAccessories } from '../Components/Popular/PopularAccessories'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { Footer } from '../Components/Footer/Footer'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <PopularTops/>
      <PopularPants/>
      <PopularAccessories/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}
export default Home