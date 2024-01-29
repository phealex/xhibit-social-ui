import { Hero, HomeProjects, HomeTalent } from '@/components'
import React, { FC } from 'react'

const Home: FC = () => {
  return (
    <div>
        <Hero />
        <HomeTalent />
        <HomeProjects />
    </div>
  )
}

export default Home