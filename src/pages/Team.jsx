import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const webD = [
  {
    name: "Kush Choudhary",
    photo: null
  },
  {
    name: "Abhishek Gupta",
    photo: null
  }, {
    name: "Kush Choudhary",
    photo: null
  },
  {
    name: "Abhishek Gupta",
    photo: null
  }, {
    name: "Kush Choudhary",
    photo: null
  },
  {
    name: "Abhishek Gupta",
    photo: null
  },
]

const stage = [
  {
    name: "Harshit Pandey",
    photo: null
  },
  {
    name: "Abhishek Gupta",
    photo: null
  }, {
    name: "Kush Choudhary",
    photo: null
  },
  {
    name: "Abhishek Gupta",
    photo: null
  }, {
    name: "Kush Choudhary",
    photo: null
  },
  {
    name: "Abhishek Gupta",
    photo: null
  },
]

const domains = [
  { title: "Web Development", mem: webD },
  { title: "Stage Management", mem: stage },
]

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [scrolled, setScrolled] = useState(0)
  const [members, setMembers] = useState(webD)
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <div className='relative hidden w-full h-[100dvh] md:flex items-center justify-center z-30 gap-20 text-white'>
        <div className='w-[60vw] h-[65vh] bg-[#ffffff06] px-8 py-12 backdrop-blur-3xl rounded-4xl flex flex-col justify-center items-center'>
          <div className='w-[56vw] h-[65vh]'>
            <Swiper
              modules={[Virtual]}
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                type: 'fraction',
              }}
              autoplay={{ delay: 3000 }}
              virtual
              className='text-black'
            >
              {members.map((data, index) => (
                <SwiperSlide key={index} virtualIndex={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className='bg-amber-400 w-[300px] h-[40vh]'>
                    {data.name}
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex gap-4'>
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiperRef?.slidePrev()}
              className='p-5 bg-[#ffffff09] hover:bg-[#ffffff12] text-white text-2xl rounded-full'
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiperRef?.slideNext()}
              className='p-5 bg-[#ffffff09] hover:bg-[#ffffff12] text-white text-2xl rounded-full'
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
        <div>
          <h2 className='text-[70px] font-bold text-gray-300 pb-1'>Domains</h2>
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                exit: { opacity: 0 },
              }}
              className='bg-[#ffffff06] px-8 py-6 backdrop-blur-3xl rounded-4xl'>
              {domains.map((domain, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      setMembers([])
                      setTimeout(() => {
                        setMembers(domain.mem)
                      }, 250)

                    }}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, y: 0.8 },
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                    className={`text-2xl p-1 font-medium cursor-pointer ${hoveredIndex === null || hoveredIndex === index
                      ? "text-white"
                      : "text-gray-500"
                      }`}
                  >
                    {domain.title}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <div className='w-full h-[100dvh] flex justify-center items-center relative md:hidden'>
        <div className='w-[90vw] h-[80vh] text-white bg-[#ffffff06] translate-y-[5vh] backdrop-blur-3xl rounded-4xl z-30 relative overflow-scroll py-0'>
          {domains.map((data, index) => {
            return (
              <div key={index} className='w-full flex flex-col justify-center items-center'>
                <h2 className='w-full p-5 text-3xl'>{data.title}</h2>
                <div className='w-full h-[45vh] translate-x-[8vw]'>
                  <Swiper
                    modules={[Virtual]}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{
                      type: 'fraction',
                    }}
                    autoplay={{ delay: 3000 }}
                    virtual
                    className='text-black'
                  >
                    {data.mem.map((data, index) => (
                      <SwiperSlide key={index} virtualIndex={index} className=''>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className='bg-amber-400 w-[300px] h-[40vh] rounded-2xl'>
                          {data.name}
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
