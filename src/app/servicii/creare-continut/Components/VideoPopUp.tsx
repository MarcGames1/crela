"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import TiktokVideoContainer from "@/app/servicii/creare-continut/Components/TiktokVideoContainer";

const scaleCoefficient = 0.7;
const VideoPopUp = () => {
  const [isOpened, setIsOpened] = useState(true);

  const CloseButtonHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpened(false);
  };

  const ContainerVariants: Variants = {
    open: {
      x: 0,
      scale: scaleCoefficient,
      transition: { duration: 0.5, delay: 3 },
      position: "fixed",
      left: 0,
      bottom: 0,
    },
    closed: {
      x: -500,
      scale: scaleCoefficient,
      transition: { duration: 0.5 },
      position: "fixed",
      left: -5000,
      bottom: 5000,
    },
  };

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={"closed"}
          variants={ContainerVariants}
          animate={"open"}
          exit={"closed"}
          className={"w-fit h-fit lg:block hidden "}
          id={"popupContainer"}
        >
          <div id={"popupContainerWrapper"} className={"relative p-2"}>
            <div
              role={"button"}
              onClick={CloseButtonHandler}
              className={"cursor-pointer z-50 absolute -top-4 -left-4"}
            >
              <IoMdCloseCircleOutline size={"3em"} />
            </div>
            <TiktokVideoContainer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopUp;
