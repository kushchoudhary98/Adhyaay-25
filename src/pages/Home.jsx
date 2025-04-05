import React, { useState } from "react";
import { ShootingStars } from './../components/ui/shooting-stars';
import { StarsBackground } from './../components/ui/stars-background';
import { Menu, X } from "lucide-react";
import LOGO from "../assets/logo.png";
import Adhyaay from "../assets/adhyaay-name.png";
import SpaceVideo from "../assets/space-video.mp4";
import BgImage from "../assets/space-bg.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      
      <div className="px-4 w-full top-7 flex flex-row justify-between items-center">
       
        <img src={LOGO} alt="Logo" className="w-16 rounded-full" />

    
        <nav className="hidden md:flex md:w-[60%] justify-center space-x-8 text-white text-[14px] md:text-lg font-bold">
          <a href="/home" className="underline underline-offset-4">HOME</a>
          <a href="/events" className="hover:underline hover:underline-offset-4">EVENTS</a>
          <a href="/team" className="hover:underline hover:underline-offset-4">OUR TEAM</a>
          <a href="/sponsor" className="hover:underline hover:underline-offset-4">SPONSORS</a>
          <a href="/contact-us" className="hover:underline hover:underline-offset-4">CONTACT US</a>
        </nav>

        <div className="md:hidden">
          {menuOpen ? (
            <X className="text-white w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="text-white w-8 h-8 cursor-pointer" onClick={() =>{setMenuOpen(true)}} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden z-50 hover:cursor-pointer absolute top-16 right-5 bg-black bg-opacity-80 p-5 rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4 hover:cursor-pointer text-white text-lg font-bold">
            <a href="/home" className="hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>HOME</a>
            <a href="/events" className="hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>EVENTS</a>
            <a href="/team" className="hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>OUR TEAM</a>
            <a href="/sponsor" className="hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>SPONSORS</a>
            <a href="/contact-us" className="hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>CONTACT US</a>
          </nav>
        </div>
      )}

   
      <img
        src={Adhyaay}
        alt="Adhyaay"
        className="w-3/4 md:w-1/2 mx-auto mix-blend-multiply brightness-100 contrast-200"
      />

     
      <div className="relative w-full flex justify-center items-center mt-4">
        <video
          src={SpaceVideo}
          autoPlay
          loop
          muted
          className="w-full brightness-100 mix-blend-multiply contrast-200"
        />
      </div>
      {/* <ShootingStars />
      <StarsBackground /> */}
    </div>
    
  );
};

export default Home;