import { Hero, HomeHowToUse, HomeProjects, HomeReviews, HomeTalent, HomeTopOffers, HomeWelcome } from '@/components'
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
    </div>
  )
}

export default Home