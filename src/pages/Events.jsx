import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import Guts from "../assets/events/guts.png";
import Face from "../assets/events/Face Painting.png";
import Masquerade from "../assets/events/Masquerade Party.png";
import melody from "../assets/events/melody war (1).png";
import Roadies from "../assets/events/ROADIES - 1.png";
import Sannskritik from "../assets/events/Sanskritik Ekta (1).png";
import SFM from "../assets/events/SFM.png";
import Squid from "../assets/events/Squid Game.png";
import dj from "../assets/events/dj.png";
import Celebrity from "../assets/events/Celebrity.png";
import Soty from "../assets/events/soty.png";
import BollyDay from '../assets/events/bd.jpeg'
import GS from '../assets/events/gs.jpeg'

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (

    <DragCloseDrawer open={open} setOpen={setOpen}>
      <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
        <h2 className="text-4xl font-bold text-neutral-200">
          Drag the handle at the top of this modal downwards 100px to close it
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
          nulla aliquid iure optio quaerat deserunt, molestias quasi facere
          aut quidem reprehenderit maiores.
        </p>
      </div>
    </DragCloseDrawer>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const [eventImage, setEventImage] = useState(null);

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const eventsData = [
  {
    title: "Sanskritk Ekta",
    description: "Sanskritik Ekta is a vibrant cultural event that celebrates the rich tapestry of Indian traditions and heritage. This event is a platform for students to showcase their talents through various performances, including dance, music, and drama, all while promoting unity and diversity.",
    link: "#",
    image: Sannskritik,
  },
  {
    title: "Star of Tommorrow",
    description: "Get ready to showcase your talent, passion, and charisma in this thrilling competition that celebrates creativity and leadership within our college community. This event is designed to test your strategic thinking, teamwork, and artistic abilities through a series of engaging challenges. Whether you excel in problem-solving, collaboration, or performance, this event will challenge and reward you at every step.",
    link: "#",
    image: Soty,
  },
  {
    title: "Short Film Making",
    description: "Step into the future of filmmaking at our Short Film Festival, a platform dedicated to showcasing the talent of emerging creators. Share your unique stories and perspectives, and experience the raw energy and innovation of tomorrow's cinematic voices.",
    link: "#",
    image: SFM,
  },
  {
    title: "Bollywood Day",
    description: "We cordially invite you to participate in a vibrant celebration of Bollywood cinema, featuring a captivating fashion show that showcases the iconic styles and personalities of Indian film. Participants are encouraged to select a beloved Bollywood actor or actress and recreate their signature look, capturing their unique essence through attire, hairstyle, and makeup.",
    link: "#",
    image: BollyDay
  },
  {
    title: "Glamour Strut",
    description: "Glamour Strut is a fashion-centric event where participants showcase their style, elegance, and personality on the ramp. Participants can choose to walk individually, in pairs, or present captivating stage performances. Glamour Strut is a platform for students to showcase their unique style, confidence, and creativity through individual and paired ramp walks, as well as stage performances.",
    link: "#",
    image: GS
  },
  {
    title: "Face Painting",
    description: "Unleash your creativity and express yourself through the art of face painting! Join us for a fun-filled event where you can transform your face into a canvas of colors, designs, and imagination. Whether you're a beginner or an experienced artist, this event is open to all.",
    link: "#",
    image: Face,
  },
  {
    title: "DJ Night",
    description: "The rumors are true. Fellas! Get ready to witness the star power with the amazing EDM Night of the year. From the studio to the stage, it's more than just a gig! Together let's enjoy the magic that unfolds and support the ones who make such nights memorable.",
    link: "#",
    image: dj,
  },
  {
    title: "Melody Nights",
    description: "Join us for an unforgettable evening of music and camaraderie at our Melody Nights event! This is a unique opportunity for students to showcase their singing talents in a friendly and supportive environment. Whether you're a seasoned performer or just starting out, this event is open to all.",
    link: "#",
    image: melody
  },
  {
    title: "Masquerade Party",
    description: "Lets unmask the magic together! Join us for a night of mystery, elegance, and unforgettable moments at our Masquerade Prom! Dance, laugh, and create memories that will last a lifetime.",
    link: "#",
    image: Masquerade,
  }, {
    title: "Butler Got Guts",
    description: "Get ready for a talent showdown inspired by India's Got Latent! In this exciting event, we're scouting for the best in parody, acting, comedy, singing, dance, and more. If you've got talent, this is your moment to shine!",
    link: "#",
    image: Guts,
  }, {
    title: "Roadies",
    description: "Get ready to push your limits and ignite your competitive spirit! ROADIES is here to challenge your strength, strategy, and mental prowess in a thrilling test of endurance. This is not just about physical power - it's a battleground for sharp minds, quick decisions, and seamless teamwork.",
    link: "#",
    image: Roadies,
  }, {
    title: "Squid Game",
    description: "Step into the ultimate college showdown - Squid Games: Campus Chaos Edition! Are you ready to challenge your skills, outwit your classmates, and battle for glory (and maybe some cool prizes)? Only the strongest, smartest, and most determined will prevail",
    link: "#",
    image: Squid,
  },
  {
    title: "Celebrity Night",
    description: "A Celebrity Night event is a star-studded affair, where a veritable pantheon of luminaries from diverse realms gather to entertain and engage with the audience. The event features dazzling performances, interactive sessions, and opportunities for fans to meet their favorite celebrities. Carefully planned and supported by sponsors, the night aims to etch memorable experiences with a mix of music, dance, jest, culture and fun. Media coverage amplifies its reach, making it a night to remember for everyone involved.",
    link: "#",
    image: Celebrity,
  },

];

const Events = () => {
  const [open, setOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("Title");
  const [eventDesc, setEventDesc] = useState("lorem ipsum dolor sit amet.");
  const [eventImage, setEventImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleOpenDrawer = (event) => {
    setEventTitle(event.title);
    setEventDesc(event.description);
    setEventImage(event.image || null);
    setOpen(true);
  };

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex relative z-30 w-full h-screen items-center justify-center">
        <div className="flex gap-10 items-center">
          <div
            onClick={() => {
              if (hoveredIndex !== null) {
                handleOpenDrawer(eventsData[hoveredIndex]);
              }
            }}
            className={`w-[600px] h-[600px] rounded-4xl cursor-pointer overflow-hidden transition-all duration-300 flex items-center justify-center ${hoveredIndex !== null ? "bg-transparent" : "bg-neutral-800"}`}
          >
            {hoveredIndex !== null ? (
              eventsData[hoveredIndex]?.image ? (
                <motion.img
                  key={hoveredIndex}
                  initial={{ opacity: 0.4, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={eventsData[hoveredIndex].image}
                  alt="Preview"
                  className="w-full h-full object-contain rounded-4xl"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-white text-2xl font-bold">
                  Coming Soon....
                </div>
              )
            ) : (
              <p className="text-white opacity-50">Hover over an event</p>
            )}
          </div>

          <div className="ml-20">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                exit: { opacity: 0 },
              }}
              className='bg-transparent px-8 py-6 backdrop-blur-3xl rounded-4xl'
            >
              {eventsData.map((data, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                  onClick={() => handleOpenDrawer(data)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  //onMouseLeave={() => setHoveredIndex(null)}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, y: 0.8 },
                  }}
                  className={`text-2xl p-1 font-medium cursor-pointer ${hoveredIndex === null || hoveredIndex === index ? "text-white" : "text-gray-500"}`}
                >
                  {data.title}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="w-full h-[100dvh] relative md:hidden flex justify-center items-center">
        <div className="w-[90vw] h-[80vh] text-white bg-[#ffffff06] translate-y-[5vh] backdrop-blur-3xl rounded-4xl z-30 relative overflow-y-scroll pt-10 space-y-6">
          {eventsData.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              key={index}
              className="space-y-2"
            >
              <h2 className="text-3xl font-medium ml-4">{data.title}</h2>
              <div
                onClick={() => handleOpenDrawer(data)}
                className="w-full h-fit overflow-hidden bg-neutral-800 flex justify-center items-center cursor-pointer"
              >
                {data.image ? (
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-xl">Coming Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shared Drawer */}
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 pb-16">
          <h2 className="text-3xl font-bold text-neutral-200">{eventTitle}</h2>
          <p>{eventDesc}</p>
        </div>
      </DragCloseDrawer>
    </>
  );
};

export default Events;