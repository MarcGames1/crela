"use client";
import { AnimatePresence, motion, useCycle, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { display } from "@mui/system";
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
      transition: { duration: 0.5 },
      position: "fixed",
    },
    closed: {
      x: -500,
      scale: scaleCoefficient,
      transition: { duration: 0.5 },
      position: "fixed",
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={"open"}
        variants={ContainerVariants}
        animate={isOpened ? "open" : "closed"}
        exit={{ opacity: 0, display: "none" }}
        className={"w-fit h-fit lg:block hidden lg:fixed bottom-0 left-0"}
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
    </AnimatePresence>
  );
};

export default VideoPopUp;
