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

  const changeImage = () => {

  }

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <>
      <div className="relative z-30 w-full h-screen flex items-center justify-center">
        <div>
          <div
            onClick={() => setOpen(true)}
            className="bg-zinc-500 w-[600px] h-[600px] rounded-4xl cursor-pointer" />
        </div>
        <div className="ml-20">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col items-start justify-center"
          >
            {eventsData.map((data, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`text-2xl p-1 font-medium cursor-pointer transition-all ${hoveredIndex === null || hoveredIndex === index
                  ? "text-white"
                  : "text-gray-500"
                  }`}
              >
                <motion.div
                  whileHover={{ scale: 1.15, transition: { duration: 0.15, ease: "linear" } }}
                  whileTap={{ scale: 1 }}
                >
                  {data.title}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
      </div>
    </>
  );
};

export default Events;