import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ac from '../assets/team/ac.jpg'
import ag from '../assets/team/ag.jpg'
import aks from '../assets/team/aks.jpg'
import ak_s from '../assets/team/ak s.jpg'
import am from '../assets/team/am.jpg'
import ans_g from '../assets/team/ans g.jpg'
import av from '../assets/team/av.jpg'
import dc from '../assets/team/dc.jpg'
import ds from '../assets/team/ds.jpg'
import gs from '../assets/team/gs.jpg'
import gun_s from '../assets/team/gun s.jpg'
import hp from '../assets/team/hp.jpg'
import hps from '../assets/team/hps.jpg'
import hs from '../assets/team/hs.jpg'
import jc from '../assets/team/jc.jpg'
import kc from '../assets/team/kc.jpg'
import nr from '../assets/team/nr.jpg'
import pks from '../assets/team/pks.jpg'
import rs from '../assets/team/rs.jpg'
import sg from '../assets/team/sg.jpg'
import sk from '../assets/team/sk.jpg'
import sk_market from '../assets/team/sk(market).jpg'
import sm from '../assets/team/sm.jpg'
import sp from '../assets/team/sp.jpg'
import sr from '../assets/team/sr.jpg'
import ss from '../assets/team/ss.jpg'
import sv from '../assets/team/sv.jpg'
import ub from '../assets/team/ub.jpg'
import uky from '../assets/team/uky.jpg'
import va from '../assets/team/va.jpg'
import vy from '../assets/team/vy.jpg'

const content = [
  { name: "Ujjwal kumar yadav", photo: uky },
  { name: "Digjaya Chauhan", photo: dc },
];

const creativity = [
  { name: "Subhasini sahu", photo: ss },
  { name: "Peeyush Kumar Sharma", photo: pks },
  { name: "Anshika Gautam", photo: ans_g },
];

const events = [
  { name: "Garima Singh", photo: gs },
  { name: "Vaibhav Yadav", photo: vy },
];

const informals = [
  { name: "Harsh Sharma", photo: hs },
  { name: "Saurabh kumar", photo: sk },
  { name: "Rajat Sonkar", photo: rs },
];

const logistics = [
  { name: "Abhishek Mishra", photo: am },
  { name: "Shivam pratap", photo: sp },
];

const marketing = [
  { name: "Saurabh Kumar", photo: sk_market },
  { name: "Vishal Aryan", photo: va },
  { name: "Uttam Bansal", photo: ub },
];

const officialFestCoordinator = [
  { name: "Siddhant Gupta", photo: sg },
  { name: "Gungun Sarawat", photo: gun_s },
  { name: "Aradhya Chaturvedi", photo: ac },
  { name: "Saurabh Maurya", photo: sm },
  { name: "Akhil Kumar Singh", photo: aks },
  { name: "Akshit singh", photo: ak_s },
];

const publicRelation = [
  { name: "Shubham", photo: sv },
];

const socialMediaPublicity = [
  { name: "Naveen Rai", photo: nr },
  { name: "Divyansh Shukla", photo: ds },
];

const stageManagement = [
  { name: "Harsh pratap singh", photo: hps },
  { name: "Harshit Pandey", photo: hp },
];

const studentSecretary = [
  { name: "Jayant Chawla", photo: jc },
  { name: "Akanksha Verma", photo: av },
];

const webDevelopment = [
  { name: "AbhishekGupta", photo: ag },
  { name: "Kush Choudhary", photo: kc },
];

const designSocialHead = [
  { name: "Sumit Raghav", photo: sr },
];


const domains = [
  { title: "Student Secretary", mem: studentSecretary },
  { title: "Official Fest Coordinator", mem: officialFestCoordinator },
  { title: "Web Development", mem: webDevelopment },
  { title: "Informals", mem: informals },
  { title: "Social Media & Publicity", mem: socialMediaPublicity },
  { title: "Content", mem: content },
  { title: "Events", mem: events },
  { title: "Creativity", mem: creativity },
  { title: "Logistics", mem: logistics },
  { title: "Design & Social", mem: designSocialHead },
  { title: "Marketing", mem: marketing },
  { title: "Public Relation", mem: publicRelation },
  { title: "Stage Management", mem: stageManagement },
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [scrolled, setScrolled] = useState(0)
  const [members, setMembers] = useState(studentSecretary);
  const [selectedDomain, setSelectedDomain] = useState("Student Secretary");
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
                    className=' h-[40vh] rounded-2xl overflow-hidden'>
                    <img
                      src={data.photo}
                      alt={data.name}
                      className='absolute inset-0 w-full h-full object-cover rounded-2xl'
                    />

                    {/* Name overlay on hover with background */}
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 backdrop-blur-md transition-opacity duration-300 rounded-2xl'>
                      <div className='bg-black/50 px-4 py-2 rounded-md'>
                        <p className='text-white text-xl font-semibold text-center'>{data.name}</p>
                      </div>
                    </div>
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
          <h2 className='text-[40px] font-bold text-gray-300 pb-1'>Domains</h2>
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
                    className={`text-xl p-1 font-medium cursor-pointer ${hoveredIndex === null || hoveredIndex === index
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
        <div className='w-[90vw] h-[80vh] text-white bg-[#ffffff06] translate-y-[5vh] backdrop-blur-3xl rounded-4xl z-30 relative overflow-y-scroll overflow-x-hidden py-0'>
          {domains.map((data, index) => {
            return (
              <div key={index} className='w-full flex flex-col justify-center items-center my-10'>
                <h2 className='w-full p-5 text-3xl'>{data.title}</h2>
                <div className='w-full h-[45vh]]'>
                  <Swiper
                    modules={[Virtual]}
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={30}
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
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className='h-[40vh] rounded-2xl relative'>

                          <img
                            src={data.photo}
                            alt={data.name}
                            className='absolute inset-0 w-[80%] left-1/2 -translate-x-1/2 h-full object-cover rounded-2xl'
                          />

                          {/* Name overlay on hover with background */}
                          <div className='absolute top-[86%] w-[80%] h-[15%] left-1/2 -translate-x-1/2 inset-0 flex items-center justify-center opacity-100 backdrop-blur-md transition-opacity duration-300 rounded-2xl'>
                            <div className='bg-black/50 px-4 py-2 rounded-md'>
                              <p className='text-white text-xl font-semibold text-center'>{data.name}</p>
                            </div>
                          </div>
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
