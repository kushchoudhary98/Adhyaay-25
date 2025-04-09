import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const positions = {
    'home': { x: "-84vh", y: "10vh" },
    'events': { x: "-30vw", y: "-100vw" },
    'merch': { x: "-84vh", y: "-110vh" },
    'about': { x: "-84vh", y: "-55vh" },
    'teams': { x: "-130vh", y: "-55vh" },
};


export default function NavItems(props) {
    return (
        <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: props.showMobNav ? "0vw" : "-100vw", opacity: props.showMobNav ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='fixed top-0 left-0 w-full h-screen md:hidden text-white bg-black flex flex-col items-center justify-center gap-3'>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: props.showMobNav ? 1 : 0.9, opacity: props.showMobNav ? 1 : 0 }} transition={{ delay: 0.1 }} className='bg-[#ffffff15] backdrop-blur-3xl rounded-full px-8 py-4 text-3xl' onClick={() => { props.setShowMobNav(false); props.setSection(""); setTimeout(() => { props.setCameraPosition(positions["home"]) }, 600); setTimeout(() => { props.setSection("home") }, 2000) }}>Home</motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: props.showMobNav ? 1 : 0.9, opacity: props.showMobNav ? 1 : 0 }} transition={{ delay: 0.2 }} className='bg-[#ffffff15] backdrop-blur-3xl rounded-full px-8 py-4 text-3xl' onClick={() => { props.setShowMobNav(false); props.setSection(""); setTimeout(() => { props.setCameraPosition(positions["events"]) }, 600); setTimeout(() => { props.setSection("events") }, 2000) }}>Events</motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: props.showMobNav ? 1 : 0.9, opacity: props.showMobNav ? 1 : 0 }} transition={{ delay: 0.3 }} className='bg-[#ffffff15] backdrop-blur-3xl rounded-full px-8 py-4 text-3xl' onClick={() => { props.setShowMobNav(false); props.setSection(""); setTimeout(() => { props.setCameraPosition(positions["teams"]) }, 600); setTimeout(() => { props.setSection("teams") }, 2000) }}>Team</motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: props.showMobNav ? 1 : 0.9, opacity: props.showMobNav ? 1 : 0 }} transition={{ delay: 0.4 }} className='bg-[#ffffff15] backdrop-blur-3xl rounded-full px-8 py-4 text-3xl' onClick={() => { props.setShowMobNav(false); props.setSection(""); setTimeout(() => { props.setCameraPosition(positions["merch"]) }, 600); setTimeout(() => { props.setSection("merch") }, 2000) }}>Merchandise</motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: props.showMobNav ? 1 : 0.9, opacity: props.showMobNav ? 1 : 0 }} transition={{ delay: 0.5 }} className='bg-[#ffffff15] backdrop-blur-3xl rounded-full px-8 py-4 text-3xl' onClick={() => { props.setShowMobNav(false); props.setSection(""); setTimeout(() => { props.setCameraPosition(positions["about"]) }, 600); setTimeout(() => { props.setSection("about") }, 2000) }}>About</motion.div>
        </motion.div>

    )
}
