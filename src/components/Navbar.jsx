import React, { useRef, useState } from "react";
import { motion } from "framer-motion";




export default Navbar;

const SlideTabs = (props) => {
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
      <Tab setPosition={setPosition} setCameraPosition={props.setCameraPosition} setSection={props.setSection} href="/">Home</Tab>
      <Tab setPosition={setPosition} href="/events">Events</Tab>
      <Tab setPosition={setPosition} href="/teams">Teams</Tab>
      <Tab setPosition={setPosition} href="/">Celebrity</Tab>
      <Tab setPosition={setPosition} href="/merch">Merchandise</Tab>

      <Cursor position={position} />
    </div>
  );
};

