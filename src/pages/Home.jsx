import React, { useState } from "react";
import { motion } from "framer-motion";
import p1 from '../assets/planets/planet1.png';
import p2 from '../assets/planets/planet2.png';
import p3 from '../assets/planets/planet3.png';
import Background from "../components/ui/Background";
import adhyaayLogo from "../assets/adhyaay.png";

const Home = () => {
  const duration = 10;

  return (
    <>
      <Background />
      <div className="relative w-full h-[100vh] overflow-hidden">
        <div>
        </div>
        <img src={adhyaayLogo} alt="adhyaay" className="absolute top-1/2 left-1/2" />

        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
          <motion.div
            initial={{ rotate: -60 }}
            animate={{ rotate: 80 }}
            transition={{ duration: 200, ease: "linear", repeat: Infinity, delay: 0 }}
            className="w-full h-full">
            <img src={p2} alt="p2" className="fixed top-[-90px] left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
        <div className="absolute top-[30%] w-[100dvw] h-[100vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
          <motion.div
            initial={{ rotate: -80 }}
            animate={{ rotate: 85 }}
            transition={{ duration: 70, ease: "linear", repeat: Infinity, delay: 0 }}
            className="w-full h-full">
            <img src={p1} alt="p1" className="fixed top-[-90px] left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
        <div className="absolute top-[65%] left-[50%] -translate-x-1/2 w-[80vw] h-[80vw] -z-40 rounded-full border-zinc-700 border-dashed border-2">
          <motion.div
            initial={{ rotate: -70 }}
            animate={{ rotate: 60 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, delay: 0 }}
            className="w-full h-full">
            <img src={p3} alt="p3" className="fixed top-[-90px] left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </div>

    </>
  );
};

export default Home;