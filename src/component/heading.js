import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
const  Heading = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap  text-white py-4">
      <motion.div
        className="text-9xl font-bold flex space-x-20 uppercase"
        initial={{ x: "50%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <span className="opacity-40"><ImCross /></span>
        <span className="flex"> Our Best <span className="text-cyan-100 px-5"> Team</span></span>
        <span className="opacity-40"><ImCross /></span>
        <span className="flex">Our Best <span className="text-cyan-100 px-5"> Team</span></span>
        <span className="opacity-40"><ImCross /></span>
        <span className="flex">Our Best <span className="text-cyan-100 px-5"> Team</span></span>
        <span className="opacity-40"><ImCross /></span>
        <span className="flex">Our Best <span className="text-cyan-100 px-5"> Team</span></span>
        <span className="opacity-40"><ImCross /></span>
        
      </motion.div>
    </div>
  );
};

export default Heading;
