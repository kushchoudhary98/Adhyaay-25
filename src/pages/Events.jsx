import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

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
    description: "Description for Event 1",
    link: "#",
  },
  {
    title: "Sufi Night",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Student Of The Year",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Short Film Making",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Bollywood Day",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Glamour Strut",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Sanskritk Ekta",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "EDM Night",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Stage Performance",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Masquerade Party",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Butler Got Guts",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Roadies",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Squid Game",
    description: "Description for Event 1",
    link: "#",
  }, {
    title: "Celebrity Night",
    description: "Description for Event 1",
    link: "#",
  },
];

const Events = () => {
  const [open, setOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("Title")
  const [eventDesc, setEventDesc] = useState("lorem ipsum dolor sit amet.")

  const changeImage = () => {

  }

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <>
      <div className="hidden relative z-30 w-full h-screen md:flex items-center justify-center">
        <div>
          <div
            onClick={() => setOpen(true)}
            className="bg-zinc-500 w-[600px] h-[600px] rounded-4xl cursor-pointer" />
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
            className='bg-[#ffffff06] px-8 py-6 backdrop-blur-3xl rounded-4xl'>
            {eventsData.map((data, index) => {
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, y: 0.8 },
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                  className={`text-2xl p-1 font-medium cursor-pointer ${hoveredIndex === null || hoveredIndex === index
                    ? "text-white"
                    : "text-gray-500"
                    }`}
                >
                  {data.title}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <h2 className="text-4xl font-bold text-neutral-200">
              {eventTitle}
            </h2>
            <p>
              {eventDesc}
            </p>
          </div>
        </DragCloseDrawer>
      </div>
      <div className="w-full h-[100dvh] relative md:hidden flex justify-center items-center">
        <div className="w-[90vw] h-[80vh] text-white bg-[#ffffff06] translate-y-[5vh] backdrop-blur-3xl rounded-4xl z-30 relative overflow-scroll py-0">
          {eventsData.map((data, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }} 
                key={index}
                className="p-5">
                <h2 className="text-2xl py-3">{data.title}</h2>
                <div onClick={() => {setEventTitle(data.title); setEventDesc(data.description); setOpen(true)}} className="w-full h-[40vh] bg-amber-300 rounded-2xl">

                </div>
              </motion.div>
            )
          })}
        </div>
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <h2 className="text-4xl font-bold text-neutral-200">
              {eventTitle}
            </h2>
            <p>
              {eventDesc}
            </p>
          </div>
        </DragCloseDrawer>
      </div>
    </>
  );
};

export default Events;