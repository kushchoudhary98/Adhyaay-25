import React, { useState, useEffect, useRef } from "react";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import p1 from '../assets/planets/planet1.png';
import p2 from '../assets/planets/planet2.png';
import p3 from '../assets/planets/planet3.png';
import p4 from '../assets/planets/planet4.png';
import Background from "../components/ui/Background";
import adhyaayLogo from "../assets/adhyaay.png";
import adLogo from "../assets/adh logo.png";
import logo from "../assets/logo.png";
import Merch from "./Merch";
import Events from "./Events";
import Team from "./Team";
import About from "./About";
import NavItems from "../components/NavItems";

const positions = {
  'home': { x: "-30vw", y: "-10vw" },
  'events': { x: "10vw", y: "-60vw" },
  'merch': { x: "-30vw", y: "-110vw" },
  'about': { x: "-30vw", y: "-60vw" },
  'teams': { x: "-70vw", y: "-60vw" },
};


const Home = () => {
  const duration = 10;
  const easing = cubicBezier(.99, -0.01, .53, .99);

  const [section, setSection] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [showMobNav, setShowMobNav] = useState(false);

  const [cameraPosition, setCameraPosition] = useState(window.innerWidth<765?{ x: "-84vh", y: "10vh" }:{ x: "-30vw", y: "0vw" });

  const Navbar = () => {
    return (
      <div className="fixed top-0 left-0 w-[100dvw] z-50 flex justify-center mt-5">
        {/* <motion.div
          
          animate={{ height: showMobNav ? "100vh" : "0vh", opacity: showMobNav ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="fixed top-0 left-0 bg-black w-full h-screen border-2 border-white"></motion.div> */}
        <NavItems showMobNav={showMobNav} setShowMobNav={setShowMobNav} setSection={setSection} setCameraPosition={setCameraPosition} />
        <div className="absolute hidden md:block top-5 left-5">
          <img src={logo} alt="adhyaay" className="w-[150px] h-[150px]" />
        </div>
        <div onClick={() => setShowMobNav(!showMobNav)} className="md:hidden bg-[#ffffff15] backdrop-blur-3xl rounded-full p-2">
          <img src={logo} alt="adhyaay" className="w-[80px] h-[80px]" />
        </div>
        
        <SlideTabs />
      </div>
    );
  };

  const SlideTabs = () => {
    const [position, setPosition] = useState({
      left: 0,
      width: 0,
      opacity: 0,
    });

    return (
      <div
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="hidden mx-auto md:flex w-fit rounded-full border-2 border-black bg-[#ffffff16] p-3 backdrop-blur-3xl"
      >
        <Tab setPosition={setPosition} href="home">Home</Tab>
        <Tab setPosition={setPosition} href="events">Events</Tab>
        <Tab setPosition={setPosition} href="teams">Teams</Tab>
        <Tab setPosition={setPosition} href="merch">Merchandise</Tab>
        <Tab setPosition={setPosition} href="about">About</Tab>

        <Cursor position={position} />
      </div>
    );
  };

  const Tab = ({ children, setPosition, href }) => {
    const ref = useRef(null);

    return (
      <button
        type="button"
        ref={ref}
        onClick={() => {
          if (section == href) return;

          setShowNav(false);
          setSection("");
          setTimeout(() => {
            setCameraPosition(positions[href]);
          }
          , 350);
          setTimeout(() => {
            setSection(href);
            setShowNav(true);
          }
          , 1350);
          
          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        onMouseEnter={() => {
          if (!ref?.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        {children}
      </button>
    );
  };

  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{
          ...position,
        }}
        style={{ backgroundColor: showNav ? "#ffffff" : "transparent" }}
        className="absolute z-0 h-7 rounded-full  md:h-12"
      />
    );
  };


  return (
    <>
      <Background />
      <Navbar />
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] overflow-hidden">
        <AnimatePresence>
          {section === "home" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{
                duration: 0.25,
                ease: "linear",
                delay: 0,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-screen">
              <img src={adLogo} alt="adhyaay" className="md:w-[900px] w-full md:scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="text-zinc-400 fixed bottom-10 left-1/2 -translate-x-1/2 font-semibold">Tap Menu to Explore</div>
            </motion.div>
          )}
        </AnimatePresence>

       <AnimatePresence>
          {section === "about" && (
            <div>
              <About />
            </div>
          )}
       </AnimatePresence>

        <AnimatePresence>
          {section === "events" && (
            <div className="">
              <Events />
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {section === "teams" && (
            <div>
              <Team />
            </div>
          )}
        </AnimatePresence>

          {section === "merch" && (
            <div
              className="w-[100dvw] h-[100dvh] flex items-center justify-center">
              <Merch />
            </div>
          )}


        <motion.div
          animate={{
            x: cameraPosition.x,
            y: cameraPosition.y,
          }}
          transition={{
            duration: 1,
            ease: easing,
          }}
          className="absolute top-0 left-0"
        >
          <div className="absolute top-0 left-0 w-[210vh] h-[210vh] md:w-[160vw] md:h-[160vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full -z-40">
              <img src={p4} alt="p2" className="fixed w-[200px] top-[-90px] left-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
          <div className="absolute md:top-[15vw] md:left-[15vw] left-[25vh] top-[25vh] md:w-[130vw] md:h-[130vw] w-[160vh] h-[160vh] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full -z-40">
              <img src={p2} alt="p2" className="fixed w-[250px] md:w-[200px] top-[-90px] left-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
          <div className="absolute md:top-[30vw] md:left-[30vw] top-[50vh] left-[50vh] md:w-[100vw] md:h-[100vw] w-[110vh] h-[110vh] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full">
              <img src={p1} alt="p1" className="fixed w-[250px] md:w-[300px] top-[-90px] left-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
          <div className="absolute md:top-[45vw] md:left-[45vw] top-[75vh] left-[75vh] md:w-[70vw] md:h-[70vw] w-[60vh] h-[60vh] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full -z-40">
              <img src={p3} alt="p3" className="fixed w-[250px] md:w-[200px] top-[-90px] left-1/2 -translate-x-1/2 -z-40" />
            </motion.div>
          </div>
        </motion.div>
      </div>



      <div className="relative w-full h-[00vh] overflow-hidden">
        {/* <img src={spaceBg} alt="background" className="fixed top-0 left-0 w-full h-full object-cover -z-50" /> */}

      </div>

    </>
  );
};

export default Home;