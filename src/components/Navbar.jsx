import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

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

export default Navbar;

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
      <Tab setPosition={setPosition} href="/">Home</Tab>
      <Tab setPosition={setPosition} href="/events">Events</Tab>
      <Tab setPosition={setPosition} href="/teams">Teams</Tab>
      <Tab setPosition={setPosition} href="/">Celebrity</Tab>
      <Tab setPosition={setPosition} href="/merch">Merchandise</Tab>

      <Cursor position={position} />
    </div>
  );
};

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);

  return (
    <a
      ref={ref}
      href={href}
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
    </a>
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