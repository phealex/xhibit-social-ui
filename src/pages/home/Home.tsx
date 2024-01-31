import { Hero, HomeHowToUse, HomeProjects, HomeReviews, HomeTalent, HomeTestimonial, HomeTopOffers, HomeWelcome } from '@/components'
import React, { FC } from 'react'

const Home: FC = () => {
  return (
    <div className=' bg-home_gradient'>
        <Hero />
        <HomeTalent />
        <HomeProjects />
        <HomeWelcome />
        <HomeReviews />
        <HomeHowToUse />
        <HomeTopOffers />
        <HomeTestimonial />
    </div>
  )
}

export default Home