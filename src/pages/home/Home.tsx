import { Hero, HomeProjects, HomeTalent, HomeWelcome } from '@/components'
import React, { FC } from 'react'

const Home: FC = () => {
  return (
    <div className=' bg-home_gradient'>
        <Hero />
        <HomeTalent />
        <HomeProjects />
        <HomeWelcome />
    </div>
  )
}

export default Home