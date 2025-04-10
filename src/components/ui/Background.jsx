import React from 'react'
import { ShootingStars } from './shooting-stars'
import { StarsBackground } from './stars-background'
import bg2 from '../../assets/bg 2.jpg'

export default function Background() {
  return (
    <div className="fixed -z-40 inset-0 bg-black">
        <div>
          <img src={bg2} className='opacity-35'></img>
        </div>
        <ShootingStars />
        <StarsBackground />

    </div>
  )
}
