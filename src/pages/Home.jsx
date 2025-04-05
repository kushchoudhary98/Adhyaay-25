import React, { useState, useEffect, useRef } from "react";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import p1 from '../assets/planets/planet1.png';
import p2 from '../assets/planets/planet2.png';
import p3 from '../assets/planets/planet3.png';
import Background from "../components/ui/Background";
import adhyaayLogo from "../assets/adhyaay.png";
import logo from "../assets/logo.png";
//import Navbar from "../components/Navbar";
import spaceBg from "../assets/space-bg.png";
import m1 from "../assets/meteor1.png";
import m2 from "../assets/meteor2.png";
import m3 from "../assets/meteor3.png";

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

  const [cameraPosition, setCameraPosition] = useState({
    x: "-30vw",
    y: "0vw",
  });

  const Navbar = () => {
    return (
      <div className="fixed top-0 left-0 w-[100dvw] z-50 flex items-center justify-between mt-5">
        <div className="absolute top-5 left-5">
          <img src={logo} alt="adhyaay" className="w-[150px]" />
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
        className="mx-auto flex w-fit rounded-full border-2 border-black bg-[#ffffff16] p-5 backdrop-blur-3xl"
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
          setCameraPosition(positions[href]);
          setSection(href);
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
        className="absolute z-0 h-7 rounded-full bg-white md:h-12"
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
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: easing,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <img src={adhyaayLogo} alt="adhyaay" className="w-[900px]" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {section === "about" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: "linear",
              }}
              className='w-full h-[100dvh] p-20 text-white flex flex-col items-center justify-center z-30'>
              <div className="w-[80vw] h-[90vh] p-20 flex flex-col items-center justify-center bg-[#000000] rounded-4xl z-30">
                <div className='text-7xl font-extrabold flex items-end justify-end'>
                  ABOUT
                  <hr className='w-[50vw]' />
                </div>
                <div className='mt-10 text-2xl font-semibold text-center'>
                  Adhyaay serves as vital platform for celebrating diversity, fostering, understanding, and preserving heritage. They bring communities together, bridging differences and promoting unity through shared experiences. These events showcase various forms of art, music, dance, cuisine, and traditions, providing opportunities for individuals to express their cultural identities and for audiences to appreciate and learn from them.
                  <br />
                  The purpose of Adhyaay extends beyond mere entertainment; they serve as catalysts for social cohesion, dialogue, and mutual respect. By highlighting the richness of different cultures, they promote tolerance and appreciation for cultural diversity, combating prejudice and fostering a sense of belonging among participants and attendees alike.
                  <br />
                  Furthermore, Adhyaay contribute to the local economy by attracting people, supporting local artisans and businesses. They also play a crucial role in cultural preservation, passing down traditions, stories, and customs from one generation to the next, ensuring their continuity and relevance in an ever- changing session.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {section === "events" && (
            <div>About</div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {section === "teams" && (
            <div>About</div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {section === "merch" && (
            <div>About</div>
          )}
        </AnimatePresence>


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
          <div className="absolute top-0 left-0 w-[160vw] h-[160vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full -z-40">
              <img src={p2} alt="p2" className="fixed top-[-90px] left-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
          <div className="absolute top-[15vw] left-[15vw] w-[130vw] h-[130vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full -z-40">
              <img src={p2} alt="p2" className="fixed top-[-90px] left-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
          <div className="absolute top-[30vw] left-[30vw] w-[100vw] h-[100vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full">
              <img src={p1} alt="p1" className="fixed top-[-90px] left-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
          <div className="absolute top-[45vw] left-[45vw] w-[70vw] h-[70vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity, delay: 0 }}
              className="w-full h-full -z-40">
              <img src={p3} alt="p3" className="fixed top-[-90px] left-1/2 -translate-x-1/2 -z-40" />
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