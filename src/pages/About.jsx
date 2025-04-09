import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "linear",
        delay: 0,
      }}
      className='w-full h-[100dvh] p-20 text-white flex flex-col items-center justify-center z-30'>
      <div className="md:w-[80vw] md:h-[90vh] w-[90vw] h-[80vh] translate-y-[5vh] p-5 md:p-20 flex flex-col items-center md:justify-center bg-[#ffffff06] backdrop-blur-3xl rounded-4xl z-30">
        <div className='md:text-7xl text-4xl pt-2 md:pt-0 font-extrabold flex items-end justify-center'>
          ABOUT
          <hr className='w-[50vw]' />
        </div>
        <div className='mt-10 text-lg md:text-2xl overflow-scroll md:overflow-clip m-2'>
          <p>Adhyaay serves as vital platform for celebrating diversity, fostering, understanding, and preserving heritage. They bring communities together, bridging differences and promoting unity through shared experiences. These events showcase various forms of art, music, dance, cuisine, and traditions, providing opportunities for individuals to express their cultural identities and for audiences to appreciate and learn from them.</p>
          <br />
          <p>The purpose of Adhyaay extends beyond mere entertainment; they serve as catalysts for social cohesion, dialogue, and mutual respect. By highlighting the richness of different cultures, they promote tolerance and appreciation for cultural diversity, combating prejudice and fostering a sense of belonging among participants and attendees alike.</p>
          <br />
          Furthermore, Adhyaay contribute to the local economy by attracting people, supporting local artisans and businesses. They also play a crucial role in cultural preservation, passing down traditions, stories, and customs from one generation to the next, ensuring their continuity and relevance in an ever- changing session.
        </div>
      </div>
    </motion.div>
  )
}
