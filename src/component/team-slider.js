import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "./team-card"; // Import the TeamCard component
import Image from "../img/th.jpeg";

// Sample Team Data
const teamMembers = [
  { id: 1, name: "AKHIL KUMAR SINGH", role: "OVERALL FEST CONTROLLER", image: Image },
  { id: 2, name: "SIDDHANT GUPTA", role: "OVERALL FEST CONTROLLER", image: Image },
  { id: 3, name: "SAURABH MAURYA", role: "OVERALL FEST CONTROLLER", image: Image },
  { id: 4, name: "ARADHYA CHATURVEDI", role: "OVERALL FEST CONTROLLER", image: Image },
  { id: 5, name: "AKSHIT SINGH", role: "OVERALL FEST CONTROLLER", image: Image },
  { id: 6, name: "GUNGUN SARAWAT", role: "OVERALL FEST CONTROLLER", image: Image },
];

const TeamSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < teamMembers.length - 2) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative py-[100px]">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-1"
          animate={{ x: `-${index * 50}%` }} // Moves left by 50% per step
          transition={{ type: "spring", stiffness: 100 }}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="w-1/3 flex-shrink-0 p-4">
              <TeamCard name={member.name} role={member.role} image={member.image} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left Arrow - Hidden at start */}
      {index > 0 && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow - Hidden at end */}
      {index < teamMembers.length - 2 && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default TeamSlider;
