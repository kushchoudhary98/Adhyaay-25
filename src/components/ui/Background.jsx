import React from 'react'
import { ShootingStars } from './shooting-stars'
import { StarsBackground } from './stars-background'

export default function Background() {
  return (
    <div className="fixed -z-40 inset-0 bg-black">
        {/* <ShootingStars /> */}
        <StarsBackground />
    </div>
  )
}
