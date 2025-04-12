import React from "react";
import { motion } from "framer-motion";
import hp from "../assets/team/hp.jpg";
import sp1 from "../assets/sponsors/1.png";
import sp2 from "../assets/sponsors/2.png";
import sp3 from "../assets/sponsors/3.png";
import sp4 from "../assets/sponsors/4.png";
import sp5 from "../assets/sponsors/5.png";
import sp6 from "../assets/sponsors/6.png";
import sp7 from "../assets/sponsors/7.png";
import sp8 from "../assets/sponsors/8.png";
import sp9 from "../assets/sponsors/9.png";
import sp10 from "../assets/sponsors/10.png";
import sp11 from "../assets/sponsors/11.png";
import sp12 from "../assets/sponsors/12.png";
import '../fonts.css'
const sponsorImages = [
    sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, sp11, sp12
];

export default function Sponsors() {
    return (
        <>
            <div className="flex relative z-30 w-full h-screen items-center text-white justify-center">
                <div className="flex w-[80vw] h-[80dvh] translate-y-[5vh] overflow-scroll md:overflow-hidden flex-col md:flex-wrap items-center md:justify-center gap-10 bg-[#ffffff06] px-8 py-12 backdrop-blur-lg rounded-4xl">
                    <p className="text-white text-4xl font-medium">Sponsors</p>
                    {sponsorImages.map((image, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                                className="bg-white p-5 rounded-full">
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Sponsor ${index + 1}`}
                                    className="md:w-[120px] w-[150px]" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}